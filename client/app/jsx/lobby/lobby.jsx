import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import GameMode from "./gameMode";
import ChatApp from "./pond";
import { getUserInfo } from "../actions/actions"

class Lobby extends React.Component {
  
  componentWillMount(){
    console.log('mounting?')
    this.props.getUserInfo();
  }

  render () {
    return (
      <div className='lobby row'>
        <div className='col-sm-4 profile-panel'>
          {this.props.isAuthenticated &&
            <Profile firstname={this.props.firstname}
              lastname={this.props.lastname}
              winStreak={this.props.winStreak}
              lostTo={this.props.lostTo}
              gamesPlayed={this.props.gamesPlayed}
              quits={this.props.quits}
              fastest={this.props.fastest} />}
          {this.props.isAuthenticated && <ChatApp />}
          {!this.props.isAuthenticated && <div>Sign in for more fun!</div>}
        </div>
        <div className='col-sm-8 selection-panel'>
          <GameMode isAuthenticated={this.props.isAuthenticated} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { isAuthenticated: state.auth.isAuthenticated,
           errorMessage: state.auth.errorMessage,
           username: state.user.username,
           firstname: state.user.firstname,
           lastname: state.user.lastname,
           winStreak: state.user.winStreak,
           lostTo: state.user.lostTo,
           gamesPlayed: state.user.gamesPlayed,
           quits: state.user.quits,
           fastest: state.user.fastest
          };
}

export default connect(mapStateToProps, { getUserInfo })(Lobby);
