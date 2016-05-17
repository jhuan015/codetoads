const React = require('react');
const ReactRouter = require('react-router')

class UsersList extends React.Component {
	render() {
		return (
			<div className='users'>
				<h3> TOAD Users </h3>
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
			<div className="message">
				<strong>{this.props.user}: </strong>
				<span>{this.props.text}</span>
			</div>
		);
	}
};

class MessageList extends React.Component {
	render() {
		return (
			<div className='messages'>
				<h2> Conversation: </h2>
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
				}
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
			<div className='message_form'>
				<h3>Write New Message</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input
						onChange={this.changeHandler.bind(this)}
						value={this.state.text}
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
			<div>
				<UsersList
					users={this.state.users}
				/>
				<MessageList
					messages={this.state.messages}
				/>
				<MessageForm
					onMessageSubmit={this.handleMessageSubmit.bind(this)}
					user={this.state.user}
				/>
			</div>
		);
	}
};

module.exports = ChatApp;
