const React = require('react');

class Prompt extends React.Component {
  constructor () {
    super()
  }
  render (){
    return (
      <div>
        <h5>{this.props.name}</h5>
        <p>{this.props.description}</p>
      </div>
    )  
  } 
}

module.exports = Prompt