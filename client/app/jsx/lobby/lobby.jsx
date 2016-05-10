import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import GameMode from "./gameMode";
import ChatApp from "./pond";

class Lobby extends React.Component {

  render () {
    return (
      <div className='lobby row'>
        <div className='col-sm-4 profile-panel'>
          {this.props.isAuthenticated && <Profile />}
          {this.props.isAuthenticated && <ChatApp />}
          {!this.props.isAuthenticated && <div>Sign in for more fun!</div>}
        </div>
        <div className='col-sm-8 selection-panel'>
          <GameMode />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { isAuthenticated: state.auth.isAuthenticated,
           errorMessage: state.auth.errorMessage
          };
}

export default connect(mapStateToProps)(Lobby);