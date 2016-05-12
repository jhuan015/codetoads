const React = require('react');
import Bar from './bar';

class Race extends React.Component {
  constructor (){
    super();
    this.state= {game:{}};
  }

  componentDidMount() {
    socket.on('update:game', this._updateGame.bind(this));
    socket.on('winner', this._winner.bind(this));
  }

  _winner(data) {
    console.log(data.winner + ' WON!');
  }

  _updateGame(data) {
    this.setState({game:data});
  }


  render (){
    return (
      <div className='race'>
      {this.state.game.player &&
            this.state.game.player.map((user, i) => {
              return (
                <div key={i} className="clearfix player">
                  <div className="col-sm-2">
                  {user.name}
                  </div>
                  <div className="col-sm-10">                      
                    <div className={'player'+i}>
                     <Bar amount={user.current} />
                    </div>
                  </div>
                </div>
              );
            })
          }
      </div>
    )
  }
}

module.exports = Race
