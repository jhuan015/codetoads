const React = require('react');
const ReactRouter = require('react-router')
import classNames from 'classnames';

class UsersList extends React.Component {
  render() {
    return (
      <div className='users'>
        <h3> Online Users </h3>
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

class ChatApp extends React.Component {

  constructor (){
    super();
    this.state = {
      users: [],
      messages:[],
      text: '',
      user: '',
      show:false
    };
  }

  componentWillMount() {
  	//force socket room to the pond
  	window.socket = io.connect({query: "chatroom=pond" });
  }

	componentDidMount() {
		socket.on('init', this._initialize.bind(this));
		socket.on('send:message', this._messageRecieve.bind(this));
		socket.on('user:join', this._userJoined.bind(this));
		socket.on('user:left', this._userLeft.bind(this));
		socket.on('change:name', this._userChangedName.bind(this));
	}
	
	componentWillUnmount() {
		socket.close();
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
    console.log('join data');
    console.log(data);
    messages.push({
      user: 'TOADBOT',
      text : data.name +' has joined the pond!'
    });
    this.setState({users, messages});
  }

  _userLeft(data) {
    var {users, messages} = this.state;
    messages.push({
      user: 'TOADBOT',
      text : data.name +' has left the pond.'
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

	_toggleChat (){
    this.setState({show:!this.state.show});
  }
  render() {
    let classes = classNames('profile-panel__chat', {'profile-panel__chat-show': this.state.show} );
    return (
      <div className={classes}>
        <div className='profile-panel__chat__innerwrap'>
          <a className="profile-panel__chat__arrowwrap" onClick={this._toggleChat.bind(this)}>
            <span className='profile-panel__chat__arrow profile-panel__chat__arrow--back'></span>
            <span className='profile-panel__chat__arrow'>
              <span className='profile-panel__chat__arrow__text'>Chat</span>
            </span>
          </a>
          <a className="profile-panel__chat__arrowwrap" onClick={this._toggleChat.bind(this)}>
            <span className='profile-panel__chat__arrow--alt profile-panel__chat__arrow--back'></span>
            <span className='profile-panel__chat__arrow--alt'>
              <span className='profile-panel__chat__arrow__text'>Profile</span>
            </span>
          </a>
          <h2>Chat</h2>
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
      </div>
		);
	}
};

module.exports = ChatApp;
