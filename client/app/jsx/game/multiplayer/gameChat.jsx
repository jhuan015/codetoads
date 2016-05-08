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
									{user}
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
				<strong>{this.props.user} :</strong>
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

class ChangeNameForm extends React.Component {
  constructor (){
    super();
    this.state = {
      newName: ''
    };
  }
	onKey(e) {
		this.setState({ newName : e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		var newName = this.state.newName;
		this.props.onChangeName(newName);
		this.setState({ newName: '' });
	}

	render() {
		return(
			<div className='change_name_form'>
				<h3> Change Name </h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input
						onChange={this.onKey.bind(this)}
						value={this.state.newName}
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

  componentWillMount() {
  	//joins socket according to multiplay/:NAME
    window.socket = io.connect({query: "chatroom="+this.props.name });
  }

	componentDidMount() {
		socket.on('init', this._initialize.bind(this));
		socket.on('send:message', this._messageRecieve.bind(this));
		socket.on('user:join', this._userJoined.bind(this));
		socket.on('user:left', this._userLeft.bind(this));
		socket.on('change:name', this._userChangedName.bind(this));
	}

	_initialize(data) {
		var {users, name} = data;
		this.setState({users, user: name});
	}

	_messageRecieve(message) {
		var {messages} = this.state;
		messages.push(message);
		this.setState({messages});
	}

	_userJoined(data) {
		var {users, messages} = this.state;
		var {name} = data;
		users.push(name);
		messages.push({
			user: 'APPLICATION BOT',
			text : name +' Joined'
		});
		this.setState({users, messages});
	}

	_userLeft(data) {
		var {users, messages} = this.state;
		var {name} = data;
		var index = users.indexOf(name);
		users.splice(index, 1);
		messages.push({
			user: 'APPLICATION BOT',
			text : name +' Left'
		});
		this.setState({users, messages});
	}

	_userChangedName(data) {
		var {oldName, newName} = data;
		var {users, messages} = this.state;
		var index = users.indexOf(oldName);
		users.splice(index, 1, newName);
		messages.push({
			user: 'APPLICATION BOT',
			text : 'Change Name : ' + oldName + ' ==> '+ newName
		});
		this.setState({users, messages});
	}

	handleMessageSubmit(message) {
		var {messages} = this.state;
		messages.push(message);
		this.setState({messages});
		socket.emit('send:message', message);
	}

	handleChangeName(newName) {
		var oldName = this.state.user;
		socket.emit('change:name', { name : newName}, (result) => {
			if(!result) {
				return alert('There was an error changing your name');
			}
			var {users} = this.state;
			var index = users.indexOf(oldName);
			users.splice(index, 1, newName);
			this.setState({users, user: newName});
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
				<ChangeNameForm
					onChangeName={this.handleChangeName.bind(this)}
				/>
			</div>
		);
	}
};

module.exports = ChatApp;
