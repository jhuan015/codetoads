import React from 'react';
import Keyboard from './keyboard';
import Frag from './fragment';

class Typing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      term: '',
      expression: "{This to anything! Woo <Div>}"
    };
  }

  _handlePress (event) {
    this.setState({
      current: event.keyCode
    });
  }

  _onInputChange(term) {
    this.setState({term});
  }

  render (){
    return (
      <div id='typing'>
        <Frag expression={this.state.expression.split("")}
          term={this.state.term.split("")}
          match={this.state.expression === this.state.term}/>
        <textarea id="write" rows="6" cols="40"
          value={this.state.term}
          onChange={event => this._onInputChange(event.target.value)}
          onKeyDown={this._handlePress.bind(this)}></textarea>
        <Keyboard current={this.state.current} />
      </div>
    )
  }
}

export default Typing;
