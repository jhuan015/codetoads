const React = require('react');

class Answer extends React.Component {
  constructor (){
    super()
    this.state = { term: '' };
  }
  
  componentWillReceiveProps (nextProps) {
    this.setState({
      term: nextProps.session.setup
    });
  }
  
  _onInputChange(term) {
    this.setState({term});
  }
  
  render (){
    return (
      <div>
        <p>{JSON.stringify(this.props.session)}</p>
        <textArea
          value={this.state.term}
          onChange={event => this._onInputChange(event.target.value)}
         />
        <button>Submit</button>
      </div>
    )  
  } 
}

module.exports = Answer