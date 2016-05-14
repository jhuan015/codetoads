import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
const {Button, SplitButton, MenuItem, FormGroup, ControlLabel, FormControl} = require('react-bootstrap');
const DiffButton = require('./difficultybutton')
const {createGame, joinGame, createDifficulty, setJoin, setCreate, setRoom } = require('../actions/actions')

class Multigame extends React.Component {
  constructor (){
    super()
    
    this.state = {
      roomname: '',
      password: '',
      loader:false,
      error:''
    };
  }
  componentDidMount() {
    socket.on('gamecheck:complete', this._routeGame.bind(this));
  }
  _onRoomChange (event) {
    this.setState({
      roomname: event.target.value
    })
  }
  
  _onPasswordChange (event) {
    this.setState({
      password: event.target.value
    })
  }
  
  _handleSubmit () {
    if (this.props.join){
      this.props.setRoom(this.state.roomname, this.state.password);
      hashHistory.push('/multiplay/' + this.state.roomname)
    } else if (this.props.create){
      this.props.setRoom(this.state.roomname, this.state.password);
      // this.props.createGame(this.state.roomname, this.state.password, this.props.difficulty);
      hashHistory.push('/multiplay/' + this.state.roomname);
    }
  }
  _checkSubmit(){
    var type;
    if (this.props.create){
      type = 'create'
    } else if (this.props.join){
      type = 'join';
    }
    var check = {
      type:type,
      room:this.state.roomname,
      password:this.state.password,
      user:this.props.id
    };
    socket.emit('gamecheck:status', check);
    this.setState({loader:true});
  }
  _routeGame(data){
    this.setState({loader:false});
    if (data.type === 'create'){
      if(data.value === false){
        this.setState({error:'Room Already Exists'});        
      } else {
        this.props.setRoom(this.state.roomname, this.state.password);
        hashHistory.push('/multiplay/' + this.state.roomname + '&'+this.state.password);
      }
    } else if (data.type === 'join'){
      if (data.full){
        this.setState({error:'Room is full'});
      } else if (!data.value) {
        this.setState({error:'Room does not exist'})
      } else if (!data.passCheck){
        this.setState({error:'Password Incorrect'})
      } else {
        this.props.setRoom(this.state.roomname, this.state.password);
        hashHistory.push('/multiplay/' + this.state.roomname + '&'+this.state.password);
      }

    }
  }
  
  render(){
    return (
      <div>
        {this.state.loader && <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>}
        <form>
          <span className='rad-inline'>
            <input className="with-gap" name="action" type="radio" id="create" onClick={this.props.setCreate}/>
            <label htmlFor="create">Create</label>
          </span>
          <span className='rad-inline'>
            <input className="with-gap" name="action" type="radio" id="join" onClick={this.props.setJoin}/>
            <label htmlFor="join">Join</label>
          </span>
            <DiffButton difficulty={this.props.difficulty} createDifficulty={this.props.createDifficulty}/>
          <FormGroup controlId="room">
            <ControlLabel>Room Name</ControlLabel>
            <FormControl type="text" placeholder="Enter Room Name"
                value={this.state.roomname}
                onChange={this._onRoomChange.bind(this)} />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password (Optional)</ControlLabel>
            <FormControl type="text" placeholder="Enter Password"
               value={this.state.password}
               onChange={this._onPasswordChange.bind(this)} />
          </FormGroup>
          <div className='text-center multi-btn-submit'>
            <Button type='button' bsSize='large' bsStyle='primary' onClick={this._checkSubmit.bind(this)}>Enter</Button>
          </div>
          {this.state.error.length > 0 && <div>{this.state.error}</div>}
        </form>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return { roomname: state.selection.roomname,
           password: state.selection.password,
           difficulty: state.selection.difficulty,
           create: state.selection.create,
           join: state.selection.join
          };
}

module.exports = connect(mapStateToProps, {createGame, createDifficulty, setJoin, setCreate, setRoom})(Multigame);
