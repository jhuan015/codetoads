const React = require('react');

class Bar extends React.Component {

  componentWillMount() {
    var temp = [];
    for (var a = 0; a < this.props.amount; a++){
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
            <div key={i} class='distBlock'>Nothing</div>
            );
        } else {
          return (
            <div key={i} class='distBlockFinal'>last</div>
            );
        }
      })
      }
      </div>
    );
  }
}


module.exports = Bar;
