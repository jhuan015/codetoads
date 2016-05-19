import React from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, submitAttempt, closeAlert, nextPrompt, cheatMe, updatePrompts, startGame, saveGame, updateUsers, reconnect } from '../../actions/actions';
import Race from '../race';
import Prompt from '../prompt';
import UserInput from '../userInput';
import TestResults from '../testResults';
import { Tabs, Tab } from 'react-bootstrap';
import GameChat from './gameChat';
import SweetAlert from 'sweetalert-react';
import Timer from '../timer'

class MultiGame extends React.Component {
  constructor() {
    super()
    this.state = {
      creator:false,
      called:false
    }
  }
  componentDidMount() {
    socket.on('creator:creator', this._initial.bind(this));
    socket.on('sharegame:users', this._shareGame.bind(this));
    socket.on('gameStart', this.props.startGame);
    socket.on('called:share', this._calledShared.bind(this));
    socket.on('reconnect:game', this._reconnect.bind(this));
  }
  componentWillMount() {
    //join socket with roomname and clients username
    var socketParams = this.props.params.name.split('&');
    const name = socketParams[0];
    const pass = socketParams[1];
    const difficulty = socketParams[2];
    window.socket = io.connect({query: "chatroom="+name +
      '&user='+JSON.parse(window.localStorage.profile).nickname + '&password=' + pass + '&difficulty=' + difficulty});
  }

  componentWillUnmount() {
    socket.close();
  }
  _initial (data){
    if (data){
      if (JSON.parse(window.localStorage.profile).nickname === data.creator){
        this.setState({creator:true});
        if(data.prompts.length === 0){
          this.props.fetchPrompts(this.props.difficulty);
        } else {
          this.props.updatePrompts(data);
        }
        this.props.updateUsers(data.player);
      }
    }
  }

  _decideWinner () {
    this.props.closeAlert();
    socket.emit('person:passed', {
      name: JSON.parse(window.localStorage.profile).nickname
    });
  }

  _startGame () {
    socket.emit('gameStart', {});
    this.props.startGame();
  }
  _reconnect (data){
    data.index=0;
    data.player.forEach(function(val, index){
      if (val.name === JSON.parse(window.localStorage.profile).nickname){
        data.index = val.progress;
      }
    });
    console.log('index =: '+ data.index);
    this.props.reconnect(data);
  }
  _shareGame (data){
    data.index = 0;
    data.player.forEach(function(val, index){
      if (val.name === JSON.parse(window.localStorage.profile).nickname){
        data.index = val.progress;
      }
    });
    this.props.updatePrompts(data);
    this.props.updateUsers(data.player)
  }
  _calledShared (data){
    this.setState({called:true});
  }
  render (){
    if (this.state.creator){
      if(this.props.prompts.statusCode === 500){
        this.props.fetchPrompts();
      } else {
        if(!this.state.called && this.props.prompts.length){
          socket.emit('sharegame:users', { prompts:this.props.prompts, called:true });
        }
      }
    }
    return (
      <div className='game'>
        <SweetAlert
          show={this.props.alert && this.props.index+1 !== this.props.amount && this.props.passed}
          imageUrl= "app/img/ironfrog.gif"
          imageSize= '250x250'
          title="Success!"
          text="You got that answer right, toad."
          onConfirm={() => this.props.closeAlert()}
        />
        <SweetAlert
          show={this.props.alert && this.props.index+1 === this.props.amount && this.props.passed}
          imageUrl= "app/img/jumping_frog.gif"
          imageSize= '250x250'
          title="Great job!"
          text="You've finished all the prompts."
          onConfirm={this._decideWinner.bind(this)}
        />
        <SweetAlert
          show={this.props.alert && !this.props.passed}
          imageUrl= "app/img/wrongtoad.jpg"
          imageSize= '250x250'
          title="Wrong Answer!"
          text="Sorry! Try again."
          onConfirm={() => this.props.closeAlert()}
        />
        <div className='prompt-panel col-sm-4'>
          {!this.props.started && <div>CLICK DA START BUTTON</div>}
          {this.props.started && <Tabs defaultActiveKey={1} id='detailsSelection'>
            <Tab eventKey={1} title="Prompt">
              { this.props.prompts[this.props.index] &&
                <Prompt name={this.props.prompts[this.props.index].name} description={this.props.prompts[this.props.index].description} />}
            </Tab>
            <Tab eventKey={2} title="Test Results">
              <TestResults output={this.props.attempt.output} reason={this.props.attempt.reason} />
            </Tab>
          </Tabs> }
          <GameChat />
        </div>
        <div className='input-panel col-sm-8'>
          <div className='clearfix'>
            {this.props.started && <Race
            saveGame={this.props.saveGame}
            />}
          </div>
          {!this.props.started && this.state.creator && <button onClick={this._startGame.bind(this)}>Start Game</button>}
          { this.props.started && this.props.prompts[this.props.index] &&
            <UserInput
            fetchPrompts={this.props.fetchPrompts}
            submitAttempt={this.props.submitAttempt}
            nextPrompt={this.props.nextPrompt}
            cheatMe={this.props.cheatMe}
            session={this.props.prompts[this.props.index].session}
            passed={this.props.passed}
            index={this.props.index}
            amount={this.props.amount}
            complete={this.props.index+1 === this.props.amount}/>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { prompts: state.game.prompts,
           attempt: state.game.attempt,
           passed: state.game.passed,
           index: state.game.index,
           amount: state.selection.amount,
           difficulty: state.selection.difficulty,
           alert: state.game.alert,
           started:state.game.started,
           users: state.game.users
          };
}

export default connect(mapStateToProps, { fetchPrompts, submitAttempt, closeAlert, nextPrompt, cheatMe, updatePrompts, startGame, saveGame, updateUsers, reconnect })(MultiGame);
