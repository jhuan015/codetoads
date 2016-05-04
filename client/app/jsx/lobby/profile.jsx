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
        <h2>{username}</h2>
        <ProfileRow title='Total Games Played' value={gamesPlayed}/>
        <ProfileRow title='Highest Win Streak' value={winStreak}/>
        <ProfileRow title='Last Wrecked By' value={lostTo}/>
        <ProfileRow title='Rage Quits' value={quits}/>
        <ProfileRow title='Fastest Time' value={fastest}/>        
      </div>
    )  
  } 
}

module.exports = Profile;