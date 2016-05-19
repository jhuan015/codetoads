const React = require('react');
const ProfileRow = require('./profilerow');

class Profile extends React.Component {
  componentWillMount(){
    this.props.getUserInfo();
  }

  pad (d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }

  render (){
    if (this.props.fastest !== 0) {
      var min = this.pad(Math.floor(this.props.fastest/60));
      var seconds = this.pad(Math.floor(this.props.fastest%60));
      var formatted = `${min}:${seconds}`;
    } else {
      var formatted = 'No games played!';
    }
    return (
      <div>
        {this.props.firstname && this.props.lastname && <h2>{this.props.firstname} {this.props.lastname}</h2>}
        {!this.props.firstname && !this.props.lastname && <h2>{this.props.username}</h2>}
        <ProfileRow title='Total Games Played' value={this.props.gamesPlayed}/>
        <ProfileRow title='Highest Win Streak' value={this.props.winStreak}/>
        <ProfileRow title='Last Wrecked By' value={this.props.lostTo}/>
        <ProfileRow title='Rage Quits' value={this.props.quits}/>
        <ProfileRow title='Fastest Time' value={formatted}/>
      </div>
    )
  }
}

module.exports = Profile;
