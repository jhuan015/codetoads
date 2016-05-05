const React = require('react');

class TestResults extends React.Component {
  constructor () {
    super()
  }
  render (){
    if(!this.props.output || !this.props.reason){
      return (
        <div>Make an attempt!</div>  
      )
    }
    return (
      <div>
        <p>{this.props.output}</p>
        <p>{this.props.reason}</p>
      </div>
    )  
  } 
}

module.exports = TestResults