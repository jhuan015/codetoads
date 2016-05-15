import React from 'react';
import { Button } from 'react-bootstrap';

class MultiChoice extends React.Component {
  constructor() {
    super()

    this.state = {
      name: 'Multiple Choice Challenge!',
      description: 'Answer the question by submitting the correct answer.',
      session: {
        question: 'What kind of scoping does JavaScript use?',
        choices: ['Literal', 'Lexical', 'Segmental', 'Sequential'],
        answer: 'b',
        explanation: 'Like most modern programming languages, JavaScript uses lexical scoping. This means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked.',
        type: 'multichoice'
      },
      selected: ''
    };
  }

  _submit () {
    if (this.state.selected === this.state.session.answer) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }

  _selected (answer) {
    console.log('inside answer');
    console.log(answer);
    this.setState({
      selected: answer
    });
  }

  render () {
    return (
      <div>
      <p>{this.state.session.description}</p>
      <ul className="answers">
      <input className='with-gap' type="radio" name="q1" value="a" id="a1" onClick={this._selected.bind(this, 'a')} />
        <label htmlFor="a1">{this.state.session.choices[0]}</label><br />
      <input className='with-gap' type="radio" name="q1" value="b" id="a2" onClick={this._selected.bind(this, 'b')} />
        <label htmlFor="a2">{this.state.session.choices[1]}</label><br />
      <input className='with-gap' type="radio" name="q1" value="c" id="a3" onClick={this._selected.bind(this, 'c')} />
        <label htmlFor="a3">{this.state.session.choices[2]}</label><br />
      <input className='with-gap' type="radio" name="q1" value="d" id="a4" onClick={this._selected.bind(this, 'd')} />
        <label htmlFor="a4">{this.state.session.choices[3]}</label><br />
      </ul>
      <Button bsStyle='primary' bsSize='large' onClick={this._submit.bind(this)}>Submit</Button>
      </div>
    )
  }
}

export default MultiChoice;
