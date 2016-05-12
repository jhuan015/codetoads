import React from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, submitAttempt, nextPrompt, cheatMe } from '../../actions/actions';
import Race from '../race';
import Prompt from '../prompt';
import UserInput from '../userInput';
import TestResults from '../testResults';
const {Tabs, Tab} = require('react-bootstrap');
import GameChat from './gameChat';


class MultiGame extends React.Component {
  componentWillMount() {
    this.props.fetchPrompts(this.props.difficulty);
    //join socket with roomname and clients username
    window.socket = io.connect({query: "chatroom="+this.props.params.name +
      '&user='+JSON.parse(window.localStorage.profile).nickname});
  }


  // componentDidMount() {
  //   socket.on('update:game', this._updateGame.bind(this));
  // }

  // _updateGame(data) {

  //   {
  //   player:
  //    {
  //    test: { name: 'test', current: 0 },
  //    jonathanshenhuang: { name: 'jonathanshenhuang', current: 0}
  //    },
  //   goal: 0,
  //   started: false }

  //   console.log('game was updated');
  //   console.log(data.name + ' completed a prompt');
  //   console.log('completed ' + data.goal);
  // }

  render (){
    if(this.props.prompts.statusCode === 500){
      console.log('calling again');
      this.props.fetchPrompts();
    }
    return (
      <div className='game'>
        <div className='race clearfix'>
          <Race />
        </div>
        <div className='prompt-panel col-sm-4'>
          <Tabs defaultActiveKey={1} id='detailsSelection'>
            <Tab eventKey={1} title="Prompt">
              { this.props.prompts[this.props.index] &&
                <Prompt name={this.props.prompts[this.props.index].name} description={this.props.prompts[this.props.index].description} />}
            </Tab>
            <Tab eventKey={2} title="Test Results">
              <TestResults output={this.props.attempt.output} reason={this.props.attempt.reason} />
            </Tab>
          </Tabs>
          <GameChat />
        </div>
        <div className='input-panel col-sm-8'>
          { this.props.prompts[this.props.index] &&
            <UserInput
            fetchPrompts={this.props.fetchPrompts}
            submitAttempt={this.props.submitAttempt}
            nextPrompt={this.props.nextPrompt}
            cheatMe={this.props.cheatMe}
            session={this.props.prompts[this.props.index].session}
            passed={this.props.passed}
            index={this.props.index}
            amount={this.props.amount}/>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { prompts: state.game.prompts,
           attempt: state.game.attempt,
           passed: state.game.passed,
           index: state.game.index,
           amount: state.selection.amount,
           difficulty: state.selection.difficulty
          };
}

export default connect(mapStateToProps, { fetchPrompts, submitAttempt, nextPrompt, cheatMe })(MultiGame);

