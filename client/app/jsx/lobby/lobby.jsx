const Profile = require('./profile')
const GameMode = require("./gameMode")

const ChatApp = require("./pond")

class Lobby extends React.Component {

  render () {
    return (
      <div>
        <div>
          YAY!
        </div>
        <section className='pond'>
          <div className='container'>
            <div className='col-sm-3'>
              <Profile />
            </div>
            <div className='col-sm-9'>
              <GameMode />
            </div>
          </div>
        </section>
        <div>
          <ChatApp />
        </div>
      </div>

    )
  }
}

module.exports = Lobby;
