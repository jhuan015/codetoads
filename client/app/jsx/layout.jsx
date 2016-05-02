const React = require('react')
const ReactRouter = require('react-router')
const Nav = require('./navbar')
const { Link } = ReactRouter

class Layout extends React.Component {
  constructor (){
    super();
    this.state = {
      status: 'signup'
    };
  }
  render () {
    return (
      <div className="main-container">
        <Nav status={this.state.status} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
      );
    };
}

module.exports = Layout