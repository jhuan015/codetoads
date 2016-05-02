const Profile = require('./profile')
const GameMode = require("./gameMode")

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
      </div>
    )
  }
}

module.exports = Lobby;