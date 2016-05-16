import React from 'react';
import { Button } from 'react-bootstrap';
import SweetAlert from 'sweetalert-react';
import { Link } from 'react-router';

class MultiChoiceSolo extends React.Component {
  constructor() {
    super()

    this.state = {
      selected: '',
      show: false,
      passed: false,
      choices: [],
      shuffled: []
    };
  }
  
  componentDidMount () {
    if(this.props.session.choices !== this.state.choices){
      var _choices = [['a'], ['b'], ['c'], ['d']];
      for (var i = 0; i < _choices.length; i++) {
        _choices[i].push(this.props.session.choices[i])
      }
      var shuffled = this._shuffle(_choices);
      this.setState({
        choices: this.props.session.choices,
        shuffled: shuffled
      });
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.session.choices !== this.state.choices){
      var _choices = [['a'], ['b'], ['c'], ['d']];
      for (var i = 0; i < _choices.length; i++) {
        _choices[i].push(nextProps.session.choices[i])
      }
      var shuffled = this._shuffle(_choices);
      this.setState({
        choices: nextProps.session.choices,
        shuffled: shuffled
      });
    }
  }
  
  _submit () {
    if (this.state.selected === this.props.session.answer) {
      this.setState({
        show: true,
        passed: true
      })
    } else {
      this.setState({
        show: true
      })
    }
  }

  _selected (answer) {
    this.setState({
      selected: answer
    });
  }

  _getNextPrompt () {
    this.setState({
      selected: '',
      passed: false
    });
    this.props.nextPrompt(this.props.index+1);
  }

  _shuffle(array) {
    var arr = Array.prototype.slice(array);

    array.forEach(function(value, index){
      //generates random whole number with range 0 to array length
      var random = Math.max(0,(Math.floor(Math.random() * arr.length)));
      //swaps current index/value with random index/value
      arr[index] = arr[random];
      arr[random] = value;
    });

    return arr;
  };
  
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
        { this.state.shuffled.length !== 0 &&
          <div>
            <input className='with-gap' type="radio" name="q1" value={this.state.shuffled[0][0]} id="a1" onClick={this._selected.bind(this, this.state.shuffled[0][0])} />
              <label htmlFor="a1">{this.state.shuffled[0][1]}</label><br />
            <input className='with-gap' type="radio" name="q1" value={this.state.shuffled[1][0]} id="a2" onClick={this._selected.bind(this, this.state.shuffled[1][0])} />
              <label htmlFor="a2">{this.state.shuffled[1][1]}</label><br />
            <input className='with-gap' type="radio" name="q1" value={this.state.shuffled[2][0]} id="a3" onClick={this._selected.bind(this, this.state.shuffled[2][0])} />
              <label htmlFor="a3">{this.state.shuffled[2][1]}</label><br />
            <input className='with-gap' type="radio" name="q1" value={this.state.shuffled[3][0]} id="a4" onClick={this._selected.bind(this, this.state.shuffled[3][0])} />
              <label htmlFor="a4">{this.state.shuffled[3][1]}</label><br />
          </div>}
        {!this.state.passed && <Button bsStyle='primary' bsSize='large' onClick={this._submit.bind(this)}>Submit</Button>}
        {this.state.passed && !this.props.complete && <Button bsStyle='primary' className='pull-left' bsSize='large' onClick={this._getNextPrompt.bind(this)}>Next Prompt</Button>}
        {this.state.passed && this.props.complete && <Link to="/lobby" className='btn btn-primary pull-left'>Lobby</Link>}
      </div>
    )
  }
}

export default MultiChoiceSolo;
