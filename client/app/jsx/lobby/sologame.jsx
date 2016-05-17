const React = require('react');
const {Button} = require('react-bootstrap');
const DiffButton = require('./difficultybutton');
const {connect} = require('react-redux')
const {createDifficulty} = require('../actions/actions')


class Sologame extends React.Component {
  render(){    
    return (
      <div className='text-center'>
        <div className='clearfix solo-dropdown'>
          <DiffButton difficulty={this.props.difficulty} createDifficulty={this.props.createDifficulty}/>
        </div>
        <Button href='#/play' bsStyle='primary' bsSize='large'>Start</Button>
     </div>
      );
  }
}
function mapGame(state) {
  return {
    amount: state.selection.amount,
    difficulty: state.selection.difficulty
  };
}
module.exports = connect(mapGame, {createDifficulty})(Sologame);