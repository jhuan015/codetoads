import React from 'react';
import { connect } from 'react-redux';
import { fetchPrompt } from '../actions/actions';
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
        <Question question={this.props.prompt.description} />
        <Answer />
      </div>
    )  
  } 
}

function mapStateToProps(state) {
  return { prompt: state.game.prompt };
}

export default connect(mapStateToProps, { fetchPrompt })(Game);