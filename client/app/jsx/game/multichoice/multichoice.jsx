import React from 'react';
import { Button } from 'react-bootstrap';
import SweetAlert from 'sweetalert-react';
import { Link } from 'react-router';

class MultiChoice extends React.Component {
  constructor() {
    super()

    this.state = {
      selected: '',
      show: false,
      passed: false
    };
  }

  _submit () {
    if (this.state.selected === this.props.session.answer) {
      console.log('true');
      this.setState({
        show: true,
        passed: true
      })
    } else {
      console.log('false');
      this.setState({
        show: true
      })
    }
  }

  _selected (answer) {
    console.log('inside answer');
    console.log(answer);
    this.setState({
      selected: answer
    });
  }

  _getNextPrompt () {
    if(this.props.index+1 === this.props.amount){
      socket.emit('person:won', {
        test: 'you have won.'
      });
    } else {
      socket.emit('person:passed', {
        name: JSON.parse(window.localStorage.profile).nickname
      });
    }
    this.props.nextPrompt(this.props.index+1);
  }

  render () {
    return (
      <div>
         <SweetAlert
          show={this.state.show && !this.props.complete}
          imageUrl= "app/img/ironfrog.gif"
          imageSize= '250x250'
          title="Success!"
          text={this.props.session.explanation}
          onConfirm={() => this.setState({show: false})}
        />
        <SweetAlert
          show={this.state.show && !this.state.passed}
          imageUrl= "app/img/wrongtoad.jpg"
          imageSize= '250x250'
          title="Wrong Answer!"
          text="Sorry! Try again."
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
        <p>{this.props.session.question}</p>
        <ul className="answers">
        <input className='with-gap' type="radio" name="q1" value="a" id="a1" onClick={this._selected.bind(this, 'a')} />
          <label htmlFor="a1">{this.props.session.choices[0]}</label><br />
        <input className='with-gap' type="radio" name="q1" value="b" id="a2" onClick={this._selected.bind(this, 'b')} />
          <label htmlFor="a2">{this.props.session.choices[1]}</label><br />
        <input className='with-gap' type="radio" name="q1" value="c" id="a3" onClick={this._selected.bind(this, 'c')} />
          <label htmlFor="a3">{this.props.session.choices[2]}</label><br />
        <input className='with-gap' type="radio" name="q1" value="d" id="a4" onClick={this._selected.bind(this, 'd')} />
          <label htmlFor="a4">{this.props.session.choices[3]}</label><br />
        </ul>
        {!this.state.passed && <Button bsStyle='primary' bsSize='large' onClick={this._submit.bind(this)}>Submit</Button>}
        {this.state.passed && !this.props.complete && <Button bsStyle='primary' className='pull-left' bsSize='large' onClick={this._getNextPrompt.bind(this)}>Next Prompt</Button>}
        {this.state.passed && this.props.complete && <Link to="/lobby" className='btn btn-primary pull-left'>Lobby</Link>}
      </div>
    )
  }
}

export default MultiChoice;
