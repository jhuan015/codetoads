const React = require('react')
const { IndexLink, Link } = require('react-router')
const {Navbar, Nav} = require('react-bootstrap');

const Navigation = (props) => (
   <Navbar fixedTop={true} fluid={true}>
    <Navbar.Header>
      <Link className="navbar-brand" to="/">CodeToads</Link>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><IndexLink to="/lobby" activeClassName="active">Lobby</IndexLink></li>
        <li><IndexLink to={`/${props.status}`} activeClassName="active">{props.status}</IndexLink></li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)

module.exports = Navigation
