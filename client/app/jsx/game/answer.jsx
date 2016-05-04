const React = require('react');
const {Button} = require('react-bootstrap')

class Answer extends React.Component {
  constructor (){
    super()
    this.state = { 
      term: '',
      projID: '',
      slnID: ''
    };
  }
  
  componentWillReceiveProps (nextProps) {
    this.setState({
      term: nextProps.session.setup,
      projID: nextProps.session.projectId,
      slnID: nextProps.session.solutionId
    });
  }
  
  _onInputChange(term) {
    this.setState({term});
  }
  
  render (){
    return (
      <div>
        <textArea
          value={this.state.term}
          onChange={event => this._onInputChange(event.target.value)}
         />
        <Button onClick={this._submitHandler.bind(this)}>Submit</Button>
      </div>
    )  
  } 
}

module.exports = Answer