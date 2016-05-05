import React from 'react';
import { connect } from 'react-redux';
import { fetchPrompt, submitAttempt } from '../actions/actions';
import Race from './race';
import Prompt from './prompt';
import UserInput from './userInput';
import TestResults from './testResults';

class Game extends React.Component {
  componentWillMount() {
    this.props.fetchPrompt();
  }
  
  render (){
    return (
      <div>
        <div className='col-xs-12'>
          <Race />
        </div>
        <Prompt name={this.props.prompt.name} description={this.props.prompt.description} />
        <UserInput submitAttempt={this.props.submitAttempt} session={this.props.prompt.session}/>
        <TestResults output={this.props.attempt.output} reason={this.props.attempt.reason}/>
      </div>
    )  
  } 
}

function mapStateToProps(state) {
  return { prompt: state.game.prompt,
           attempt: state.game.attempt };
}

export default connect(mapStateToProps, { fetchPrompt, submitAttempt })(Game);