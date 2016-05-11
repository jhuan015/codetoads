const React = require('react');
const ProfileRow = require('./profilerow');

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      auth_id: 1,
      username: 'Batman',
      winStreak: 10,
      lostTo: 'Bane',
      gamesPlayed: 500,
      quits: 322,
      fastest: '4 Minutes 30 Seconds'
    };
  }
  render (){
    var { username, winStreak, lostTo, gamesPlayed, quits, fastest } = this.state;
    return (
      <div>
        <h2>{this.props.firstname} {this.props.lastname}</h2>
        <ProfileRow title='Total Games Played' value={this.props.gamesPlayed}/>
        <ProfileRow title='Highest Win Streak' value={this.props.winStreak}/>
        <ProfileRow title='Last Wrecked By' value={this.props.lostTo}/>
        <ProfileRow title='Rage Quits' value={this.props.quits}/>
        <ProfileRow title='Fastest Time' value={this.props.fastest}/>
      </div>
    )
  }
}

module.exports = Profile;
