const React = require('react');
const ProfileRow = require('./profilerow');

class Profile extends React.Component {
  componentWillMount(){
    this.props.getUserInfo();
  }

  render (){
    return (
      <div>
        {this.props.firstname && this.props.lastname && <h2>{this.props.firstname} {this.props.lastname}</h2>}
        {!this.props.firstname && !this.props.lastname && <h2>{this.props.username}</h2>}
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
