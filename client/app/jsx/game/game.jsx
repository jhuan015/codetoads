import React from 'react';
import { connect } from 'react-redux';
import { fetchPrompt, submitAttempt } from '../actions/actions';
import Race from './race';
import Question from './question';
import Answer from './answer';

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
        <Question name={this.props.prompt.name} description={this.props.prompt.description} />
        <Answer session={this.props.prompt.session}/>
      </div>
    )  
  } 
}

function mapStateToProps(state) {
  return { prompt: state.game.prompt };
}

export default connect(mapStateToProps, { fetchPrompt })(Game);