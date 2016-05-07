const Profile = require('./profile')
const GameMode = require("./gameMode")
const ChatApp = require("./pond")

class Lobby extends React.Component {

  render () {
    return (
      <div className='lobby row'>
        <div className='col-sm-4 profile-panel'>
          <Profile />
          <ChatApp />
        </div>
        <div className='col-sm-8 selection-panel'>
          <GameMode />
        </div>
      </div>
    )
  }
}

module.exports = Lobby;
