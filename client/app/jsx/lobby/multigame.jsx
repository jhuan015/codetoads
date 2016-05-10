const React = require('react');
import { connect } from 'react-redux';
const {Button, SplitButton, MenuItem, FormGroup, ControlLabel, FormControl} = require('react-bootstrap');
const DiffButton = require('./difficultybutton')
const {createGame, createDifficulty} = require('../actions/actions')

class Multigame extends React.Component {
  render(){
    return (
      <div>
        <form onSubmit={this.props.createGame(this.props.roomname, this.props.password, this.props.difficulty)}>
          <span className='rad-inline'>
            <input className="with-gap" name="action" type="radio" id="create"/>
            <label htmlFor="create">Create</label>
          </span>
          <span className='rad-inline'>
            <input className="with-gap" name="action" type="radio" id="join"/>
            <label htmlFor="join">Join</label>
          </span>
            <DiffButton difficulty={this.props.difficulty} createDifficulty={this.props.createDifficulty}/>
          <FormGroup controlId="room">
            <ControlLabel>Room Name</ControlLabel>
            <FormControl type="text" placeholder="Enter Room Name" />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password (Optional)</ControlLabel>
            <FormControl type="text" placeholder="Enter Password" />
          </FormGroup>
          <div className='text-center multi-btn-submit'>
            <Button type='submit' href='#/play' bsSize='large' bsStyle='primary'>Enter</Button>
          </div>
        </form>
      </div>

      )
  }
  _getValues(){

  }
}

module.exports = Multigame;
