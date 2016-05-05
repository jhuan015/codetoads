const React = require('react');

class TestResults extends React.Component {
  constructor () {
    super()
  }
  /*rawMarkup() {   
   return {__html: this.props.reason};
 }*/
  render (){
    if(!this.props.output || !this.props.reason){
      return (
        <div className='testInitial'>Make an attempt!</div>  
      )
    }
    return (
      <div className='testResults'>
        <div dangerouslySetInnerHTML={{__html:this.props.output}} className='testResults__title'></div>
        <div className='testResults__body'>{this.props.reason}</div>
      </div>
    )  
  } 
}

module.exports = TestResults