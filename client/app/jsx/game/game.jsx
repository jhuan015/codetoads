const React = require('react');
const Race = require('./race');
const Question = require('./question');
const Answer = require('./answer');

class Game extends React.Component {
  render (){
    return (
      <div>
        <div className='col-xs-12'>
          <Race />
        </div>
        <Question />
        <Answer />
      </div>
    )  
  } 
}

module.exports = Game