const React = require('react');
var ReactMarkdown = require('react-markdown');

class Prompt extends React.Component {
  constructor () {
    super()
  }
  render (){
    return (
      <div className='prompt'>
        <h5 className='prompt__title'>{this.props.name}</h5>
        <ReactMarkdown className='prompt__body' source={this.props.description} />
      </div>
    )
  }
}

module.exports = Prompt
