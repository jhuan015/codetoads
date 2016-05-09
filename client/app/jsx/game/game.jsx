import React from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, submitAttempt } from '../actions/actions';
import Race from './race';
import Prompt from './prompt';
import UserInput from './userInput';
import TestResults from './testResults';
const {Tabs, Tab} = require('react-bootstrap');

class Game extends React.Component {
  componentWillMount() {
    this.props.fetchPrompts();
  }

  render (){
    return (
      <div className='game'>
        <div className='race clearfix'>
          <Race />
        </div>
        <div className='prompt-panel col-sm-4'>
          <Tabs defaultActiveKey={1} id='detailsSelection'>
            <Tab eventKey={1} title="Prompt">
              { this.props.prompts[0] && <Prompt name={this.props.prompts[0].name} description={this.props.prompts[0].description} />}
            </Tab>
            <Tab eventKey={2} title="Test Results">
              <TestResults output={this.props.attempt.output} reason={this.props.attempt.reason} />
            </Tab>
          </Tabs>
        </div>
        <div className='input-panel col-sm-8'>
          {this.props.prompts[0] &&
            <UserInput
            fetchPrompts={this.props.fetchPrompts}
            submitAttempt={this.props.submitAttempt}
            session={this.props.prompts[0].session}
            passed={this.props.passed}/>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { prompts: state.game.prompts,
           attempt: state.game.attempt,
           passed: state.game.passed
          };
}

export default connect(mapStateToProps, { fetchPrompts, submitAttempt })(Game);
