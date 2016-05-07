import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './navbar';
const { Link } = require('react-router');
const Footer = require('./footer');

class Layout extends React.Component {

  render () {
    const { dispatch, isAuthenticated, errorMessage } = this.props;
    console.log(this.props);
    console.log(dispatch);
    console.log(isAuthenticated);
    return (
      <div className="clearfix">
      <Nav
        isAuthenticated={isAuthenticated}
        errorMessage={errorMessage}
        dispatch={dispatch}
      />
        <div className="body-wrap">
          {this.props.children}
        </div>
        <Footer/>
      </div>
      );
    };
}

module.exports = Layout