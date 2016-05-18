import React from 'react';
import ReactDOM from 'react-dom';
import Keyboard from './keyboard';
import Frag from './fragment';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import SweetAlert from 'sweetalert-react';


class TypingSolo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      term: '',
      passed: false,
      show: false
    };
  }
  
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.nameInput).focus(); 
  }

  _handlePress (event) {
    this.setState({
      current: event.keyCode
    });
  }

  _onInputChange(term) {
    this.setState({term});
    if (term === this.props.expression) {
      this.setState({passed: true})
      this.setState({show: true})
    }
  }
  
  _getNextPrompt () {
    this.props.nextPrompt(this.props.index+1);
  }
  
  _cheatTyping () {
    this.setState({passed: true});
    this.setState({show: true})
  }

  render (){
    return (
      <div id='typing'>
         <SweetAlert
          show={this.state.show && !this.props.complete}
          imageUrl= "app/img/ironfrog.gif"
          imageSize= '250x250'
          title="Success!"
          text="You got that answer right, toad."
          onConfirm={() => this.setState({show: false})}
        />
        <SweetAlert
          show={this.state.show && this.props.complete}
          imageUrl= "app/img/jumping_frog.gif"
          imageSize= '250x250'
          title="Great job!"
          text="You've finished all the prompts."
          onConfirm={() => this.setState({show: false})}
        />
        <Frag expression={this.props.expression.split("")}
          term={this.state.term.split("")}
        />
        <textarea id="write" rows="6" cols="40"
          ref='nameInput'
          value={this.state.term}
          onChange={event => this._onInputChange(event.target.value)}
          onKeyDown={this._handlePress.bind(this)}></textarea>
        <Keyboard current={this.state.current} />
        {!this.state.passed && <Button bsStyle='primary' bsSize='large' onClick={this._cheatTyping.bind(this)}>Cheat!</Button>}
        {this.state.passed && !this.props.complete && <Button bsStyle='primary' className='pull-right' bsSize='large' onClick={this._getNextPrompt.bind(this)}>Next Prompt</Button>}
        {this.state.passed && this.props.complete && <Link to="/lobby" className='btn btn-primary pull-right'>Lobby</Link>}
      </div>
    )
  }
}

export default TypingSolo;
