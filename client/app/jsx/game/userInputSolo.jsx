import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import brace from 'brace';
import AceEditor from 'react-ace';
import TypingTestSolo from './typing/typingSolo.jsx'

import 'brace/ext/language_tools'
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';

class UserInputSolo extends React.Component {
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
    console.log(nextProps)
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
    this.props.nextPrompt(this.props.index+1);
  }

  render () {
    if(this.props.session.type === 'typing'){
      return (
        <div>
        <TypingTestSolo expression={this.props.session.expression}
          index={this.props.index}
          complete={this.props.complete}
          nextPrompt={this.props.nextPrompt}
        />
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
          width="100%"
          showGutter={false}
          onChange={this._onInputChange.bind(this)}
          value={this.state.term}
          editorProps={{$blockScrolling: true}}
        />
        {!this.props.passed && <Button bsStyle='primary' bsSize='large' onClick={this.props.cheatMe}>Cheat!</Button>}
        {!this.props.passed && <Button bsStyle='primary' className='pull-right' bsSize='large' onClick={this._submitHandler.bind(this)}>Submit</Button>}
        {this.props.passed && !this.props.complete && <Button bsStyle='primary' className='pull-right' bsSize='large' onClick={this._getNextPrompt.bind(this)}>Next Prompt</Button>}
        {this.props.passed && this.props.complete && <Link to="/lobby" className='btn btn-primary pull-right'>Lobby</Link>}
      </div>
    )
  }
}

module.exports = UserInputSolo
