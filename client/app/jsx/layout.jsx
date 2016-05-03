const React = require('react')
const ReactRouter = require('react-router')
const Nav = require('./navbar')
const Footer = require('./footer')
const { Link } = ReactRouter

class Layout extends React.Component {
  constructor (){
    super();
    this.state = {
      status: 'Signup'
    };
  }
  render () {
    return (
      <div className="clearfix">
        <Nav status={this.state.status} />
        <div className="body-wrap">
          {this.props.children}
        </div>
        <Footer/>
      </div>
      );
    };
}

module.exports = Layout