const React = require('react');
const {Button} = require('react-bootstrap')

class UserInput extends React.Component {
  constructor (){
    super()
    
    this.state = { 
      term: '',
      projID: '',
      slnID: ''
    };
  }
  
  componentWillMount () {
    this.setState({
      term: this.props.session.setup,
      projID: this.props.session.projectId,
      slnID: this.props.session.solutionId
    });
  }
  
  _onInputChange(term) {
    this.setState({term});
  }
  
  _submitHandler(){
    
    var ans = {}
    
    ans.code = this.state.term;
    ans.project_id = this.state.projID;
    ans.solution_id = this.state.slnID;
    
    this.props.submitAttempt(ans);
  }
  
  render (){
    if (this.props.passed) {
      return (
        <div>
          <p>Success!</p>
          <Button bsStyle='primary' bsSize='large' onClick={this.props.fetchPrompts}>Next Prompt</Button>
        </div>
        )
    }
    return (
      <div>
      <h2>Your Solution Below</h2>
        <textArea rows={25} className='input-panel__textarea'
          value={this.state.term}
          onChange={event => this._onInputChange(event.target.value)}
         />
        <Button bsStyle='primary' className='pull-right' bsSize='large' onClick={this._submitHandler.bind(this)}>Submit</Button>
      </div>
    )  
  } 
}

module.exports = UserInput