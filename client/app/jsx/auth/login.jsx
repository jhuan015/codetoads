import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  render() {
    const { errorMessage } = this.props;

    return (
      <a className="login-btn" onClick={(e) => this.handleClick(e)}>
        Login
      </a>
    );
  }

  handleClick(e) {
    this.props.onLoginClick();
  }
};

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};
