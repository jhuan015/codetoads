import React from 'react';
import { connect } from 'react-redux';
import { fetchPrompt, submitAttempt } from '../actions/actions';
import Race from './race';
import Prompt from './prompt';
import UserInput from './userInput';
import TestResults from './testResults';
const {Tabs, Tab} = require('react-bootstrap');

class Game extends React.Component {
  componentWillMount() {
    this.props.fetchPrompt();
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
              <Prompt name={this.props.prompt.name} description={this.props.prompt.description} />
            </Tab>
            <Tab eventKey={2} title="Test Results">
              <TestResults output={this.props.attempt.output} reason={this.props.attempt.reason}/>            
            </Tab>
          </Tabs>          
        </div>
        <div className='input-panel col-sm-8'>
          <UserInput
            fetchPrompt={this.props.fetchPrompt}
            submitAttempt={this.props.submitAttempt}
            session={this.props.prompt.session}
            setup={this.props.setup}
            passed={this.props.passed}/>
        </div>
      </div>
    )  
  } 
}

function mapStateToProps(state) {
  return { prompt: state.game.prompt,
           attempt: state.game.attempt,
           setup: state.game.setup,
           passed: state.game.passed };
}

export default connect(mapStateToProps, { fetchPrompt, submitAttempt })(Game);