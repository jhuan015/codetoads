const React = require('react');
const {Button} = require('react-bootstrap');
const DiffButton = require('./difficultybutton');

class Sologame extends React.Component {
  render(){
    return (
      <div className='text-center'>
        <div className='clearfix solo-dropdown'>
          <DiffButton/>
        </div>
        <Button href='#/play' bsStyle='primary' bsSize='large'>Start</Button>        
      </div>
      );
  }
}

module.exports = Sologame;