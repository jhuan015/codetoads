import React, { Component, PropTypes } from 'react';
import Login from './auth/login';
import Logout from './auth/logout';
import { login, logoutUser } from './actions/authActions';
import { IndexLink, Link } from 'react-router';
const { Navbar, Nav } = require('react-bootstrap');

class Navigation extends Component {
    render() {
     const { dispatch, isAuthenticated, errorMessage } = this.props;

     return (
     <Navbar fixedTop={true} fluid={true}>
      <Navbar.Header>
        <Link className="navbar-brand" to="/">CodeToads</Link>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><IndexLink to="/lobby" activeClassName="active">Lobby</IndexLink></li>
          <li>   {!isAuthenticated &&
                    <Login
                      errorMessage={errorMessage}
                      onLoginClick={() => dispatch(login())}
                    />
                  }

                  {isAuthenticated &&
                    <Logout onLogoutClick={() => dispatch(logoutUser())} />
                  }
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
};

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

module.exports = Navigation;
