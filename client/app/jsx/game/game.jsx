import React from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, submitAttempt, nextPrompt, cheatMe } from '../actions/actions';
import Race from './race';
import Prompt from './prompt';
import UserInput from './userInput';
import TestResults from './testResults';
const {Tabs, Tab} = require('react-bootstrap');

class Game extends React.Component {
  componentWillMount() {
    this.props.fetchPrompts(this.props.difficulty);
  }

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
  return { prompts: state.game.prompts,
           attempt: state.game.attempt,
           passed: state.game.passed,
           index: state.game.index,
           amount: state.selection.amount,
           difficulty: state.selection.difficulty
          };
}

export default connect(mapStateToProps, { fetchPrompts, submitAttempt, nextPrompt, cheatMe })(Game);
