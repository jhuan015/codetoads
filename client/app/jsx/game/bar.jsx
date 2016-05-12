const React = require('react');

class Bar extends React.Component {

  componentWillMount() {
    var temp = [];
    for (var a = 0; a < this.props.amount; a++){
      temp.push(a);
    }
    this.setState({bars:temp});
  }

  componentWillReceiveProps(nextProps) {
    var temp = [];
    for (var a = 0; a < nextProps.amount; a++){
      temp.push(a);
    }
    this.setState({bars:temp});
  }

  render () {
    return (
      <div>
      {this.state.bars && this.state.bars.map((user, i) => {
        if (i !== (this.props.amount - 1) ){
          return (
            <div key={i} className='distBlock'></div>
            );
        } else {
          return (
            <div key={i} className='distBlockFinal'></div>
            );
        }
      })
      }
      </div>
    );
  }
}


module.exports = Bar;
