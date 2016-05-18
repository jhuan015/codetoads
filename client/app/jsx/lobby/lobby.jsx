import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import GameMode from "./gameMode";
import ChatApp from "./pond";
import { getUserInfo } from "../actions/actions";
import { logoutUser } from '../actions/authActions'

class Lobby extends React.Component {
  render () {
    if(this.props.error){
      this.props.logoutUser();
      window.location.reload;
    }
    return (
      <div className='lobby row'>
        <div className='col-sm-4 profile-panel'>
          {this.props.isAuthenticated &&
            <Profile firstname={this.props.firstname}
              lastname={this.props.lastname}
              username={this.props.username}
              winStreak={this.props.winStreak}
              lostTo={this.props.lostTo}
              gamesPlayed={this.props.gamesPlayed}
              quits={this.props.quits}
              fastest={this.props.fastest}
              getUserInfo={this.props.getUserInfo} />}
          {this.props.isAuthenticated && <ChatApp />}
          {!this.props.isAuthenticated && <div>Sign in for more fun!</div>}
        </div>
        <div className='col-sm-8 selection-panel'>
          <GameMode isAuthenticated={this.props.isAuthenticated} user_id={this.props.user_id}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { isAuthenticated: state.auth.isAuthenticated,
           errorMessage: state.auth.errorMessage,
           username: state.user.username,
           firstname: state.user.firstname,
           lastname: state.user.lastname,
           winStreak: state.user.winStreak,
           lostTo: state.user.lostTo,
           gamesPlayed: state.user.gamesPlayed,
           quits: state.user.quits,
           fastest: state.user.fastest,
           user_id:state.user.user_id,
           error: state.user.error
          };
}

export default connect(mapStateToProps, { getUserInfo, logoutUser })(Lobby);
