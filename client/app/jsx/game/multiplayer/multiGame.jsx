import React from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, submitAttempt, closeAlert, nextPrompt, cheatMe } from '../../actions/actions';
import Race from '../race';
import Prompt from '../prompt';
import UserInput from '../userInput';
import TestResults from '../testResults';
const {Tabs, Tab} = require('react-bootstrap');
import GameChat from './gameChat';
import SweetAlert from 'sweetalert-react';


class MultiGame extends React.Component {
  componentWillMount() {
    this.props.fetchPrompts(this.props.difficulty);
    //join socket with roomname and clients username
    window.socket = io.connect({query: "chatroom="+this.props.params.name +
      '&user='+JSON.parse(window.localStorage.profile).nickname});
  }
  
  componentWillUnmount() {
    socket.close();
  }

  render (){
    if(this.props.prompts.statusCode === 500){
      console.log('calling again');
      this.props.fetchPrompts();
    }
    return (
      <div className='game'>
        <SweetAlert
          show={this.props.alert && this.props.index+1 !== this.props.amount}
          imageUrl= "app/img/ironfrog.gif"
          imageSize= '250x250'
          title="Success!"
          text="You got that answer right, toad."
          onConfirm={() => this.props.closeAlert()}
        />
        <SweetAlert
          show={this.props.alert && this.props.index+1 === this.props.amount}
          imageUrl= "app/img/jumping_frog.gif"
          imageSize= '250x250'
          title="Great job!"
          text="You've finished all the prompts."
          onConfirm={() => this.props.closeAlert()}
        />       
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
          <div className='race clearfix'>
            <Race />
          </div>
          { this.props.prompts[this.props.index] &&
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
           alert: state.game.alert
          };
}

export default connect(mapStateToProps, { fetchPrompts, submitAttempt, closeAlert, nextPrompt, cheatMe })(MultiGame);

