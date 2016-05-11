import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/ext/language_tools'
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';

class UserInput extends React.Component {
  constructor (){
    super()

    this.state = {
      term: '',
      projID: ''
    };
  }

  componentWillMount () {
    this.setState({
      term: this.props.session.setup,
      projID: this.props.session.projectId
    });
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.session.projectId !== this.state.projID) {
      this.setState({
        term: nextProps.session.setup,
        projID: nextProps.session.projectId
      });
    }
  }

  _onInputChange(term) {
    this.setState({term});
  }

  _submitHandler(){

    var ans = {}

    ans.code = this.state.term;
    ans.project_id = this.props.session.projectId;
    ans.solution_id = this.props.session.solutionId;

    this.props.submitAttempt(ans);
  }

  _getNextPrompt () {
    this.props.nextPrompt(this.props.index+1)
  }

  render (){
    if (this.props.passed) {
      if(this.props.index+1 === this.props.amount){
        return (
          <div>
            <p>YOU WIN!</p>
            <Link to="/lobby">Go back to lobby</Link>
          </div>
          )
      }
      return (
        <div>
          <p>Success!</p>
          <Button bsStyle='primary' bsSize='large' onClick={this._getNextPrompt.bind(this)}>Next Prompt</Button>
        </div>
        )
    }
    return (
      <div>
      <h2>Your Solution Below</h2>
         <AceEditor
          className='input-panel__textarea'
          mode="javascript"
          theme="tomorrow"
          tabSize={2}
          width="800px"
          showGutter={false}
          onChange={this._onInputChange.bind(this)}
          value={this.state.term}
          editorProps={{$blockScrolling: true}}
        />
        <Button bsStyle='primary' className='pull-right' bsSize='large' onClick={this.props.cheatMe}>Cheat!</Button>
        <Button bsStyle='primary' className='pull-right' bsSize='large' onClick={this._submitHandler.bind(this)}>Submit</Button>
      </div>
    )
  }
}

module.exports = UserInput
