const React = require('react');
import { connect } from 'react-redux';
const {Button, SplitButton, MenuItem, FormGroup, ControlLabel, FormControl} = require('react-bootstrap');
const DiffButton = require('./difficultybutton')
const {createGame, joinGame, createDifficulty, setJoin, setCreate, setRoom } = require('../actions/actions')

class Multigame extends React.Component {
  constructor (){
    super()

    this.state = {
      roomname: '',
      password: ''
    };
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
    console.log('hiiiiii', this.state.roomname, this.state.password)
    if (this.props.join){
      console.log('joining');
    } else if (this.props.create){
      this.props.createGame(this.state.roomname, this.state.password, this.props.difficulty)
    }
  }
  
  render(){
    return (
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
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
            <Button type='submit' bsSize='large' bsStyle='primary'>Enter</Button>
          </div>
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
