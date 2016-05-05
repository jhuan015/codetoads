const React = require('react');

class Prompt extends React.Component {
  constructor () {
    super()
  }
  render (){
    return (
      <div className='prompt'>        
        <h5 className='prompt__title'>{this.props.name}</h5>
        <div className='prompt__body'>{this.props.description}</div>
      </div>
    )  
  } 
}

module.exports = Prompt