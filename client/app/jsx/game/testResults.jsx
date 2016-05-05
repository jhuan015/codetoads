const React = require('react');

class TestResults extends React.Component {
  constructor () {
    super()
  }
  render (){
    if(!this.props.output || !this.props.reason){
      return (
        <div className='testResults'>Make an attempt!</div>  
      )
    }
    return (
      <div className='testResults'>
        <div className='testResults__title'>{this.props.output}</div>
        <div className='testResults__body'>{this.props.reason}</div>
      </div>
    )  
  } 
}

module.exports = TestResults