const React = require('react');

class Question extends React.Component {
  constructor () {
    super()
  }
  render (){
    return (
      <div>
        {this.props.question}
      </div>
    )  
  } 
}

module.exports = Question