const React = require('react');
const ReactRouter = require('react-router')

class UsersList extends React.Component {
	render() {
		return (
			<div className='prompt-panel__chat__userlist'>
				<h3> Users </h3>
				<ul>
					{
						this.props.users.map((user, i) => {
							return (
								<li key={i}>
									{user.name}
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
};

class Message extends React.Component {
	render() {
		return (
			<div>
				<span className="prompt-panel__chat__messages__message">{this.props.user}: </span>
				<span>{this.props.text}</span>
			</div>
		);
	}
};

class MessageList extends React.Component {
	render() {
		return (
			<div className='prompt-panel__chat__messages'>
				<h3>Croak </h3>
        <div className='prompt-panel__chat__messages__message-wrap'>
				{
					this.props.messages.map((message, i) => {
						return (
							<Message
								key={i}
								user={message.user}
								text={message.text}
							/>
						);
					})
				} </div>
			</div>
		);
	}
};
class MessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

	handleSubmit(e) {
		e.preventDefault();
		var message = {
			user : this.props.user,
			text : this.state.text
		}
		this.props.onMessageSubmit(message);
		this.setState({ text: '' });
	}

	changeHandler(e) {
		this.setState({ text : e.target.value });
	}

	render() {
		return(
			<div className='prompt-panel__chat__input'>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input
						onChange={this.changeHandler.bind(this)}
						value={this.state.text}
            placeholder='Input croak and hit enter'
					/>
				</form>
			</div>
		);
	}
};

class ChatApp extends React.Component {

  constructor (){
    super();
    this.state = {
      users: [],
      messages:[],
      text: '',
      user: ''
    };
  }

	componentDidMount() {
		socket.on('init', this._initialize.bind(this));
		socket.on('send:message', this._messageRecieve.bind(this));
		socket.on('user:join', this._userJoined.bind(this));
		socket.on('user:left', this._userLeft.bind(this));
	}

	componentWillUnmount() {
		socket.close();
	}

	_initialize(data) {
		var {users, name} = data;
		this.setState({users, user: JSON.parse(window.localStorage.profile).nickname});
	}

	_messageRecieve(message) {
		var {messages} = this.state;
		messages.push(message);
		this.setState({messages});
	}

	_userJoined(data) {
		var {messages} = this.state;
    var {users} = data;
  	messages.push({
			user: 'TOADBOT',
			text : data.name +' has joined the game!'
		});
		this.setState({users, messages});
	}

	_userLeft(data) {
		var {messages} = this.state;
		var {users} = data;
		messages.push({
			user: 'TOADBOT',
			text : data.name +' has left the game.'
		});
		this.setState({users, messages});
	}

	handleMessageSubmit(message) {
		var {messages} = this.state;
		messages.push(message);
		this.setState({messages});
		socket.emit('send:message',
		{
			message: message
		});
	}

	render() {
		return (
			<div className='clearfix prompt-panel__chat__wrap'>
            <UsersList
              users={this.state.users} 
            />
            <div className='prompt-panel__chat__message-wrap'>
              <MessageList
                messages={this.state.messages}              
              />
              <MessageForm
                onMessageSubmit={this.handleMessageSubmit.bind(this)}
                user={this.state.user}
              />
            </div>
          </div> 
		);
	}
};

module.exports = ChatApp;
