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
  
  componentWillReceiveProps (nextProps) {
    console.log(nextProps.setup)
    this.setState({
      term: nextProps.setup,
      projID: nextProps.session.projectId,
      slnID: nextProps.session.solutionId
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
    
    //console.log(ans);
    
    this.props.submitAttempt(ans);
  }
  //project_id
  //solution_id
  //code
  
  render (){
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