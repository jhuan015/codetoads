const React = require('react');
import Bar from './bar';

class Race extends React.Component {
  constructor (){
    super();
    this.state= {game:{}};
  }

  componentDidMount() {
    socket.on('update:game', this._updateGame.bind(this));
  }

  _updateGame(data) {
    this.setState({game:data});
    console.log('got data son');
    console.log(data);
    /*
    {
    player:
     [
     test: { name: 'test', current: 0 },
     jonathanshenhuang: { name: 'jonathanshenhuang', current: 0}
     ],
    goal: 0,
    started: false
    }
    */
    /*
    for (var user in data.player) {
      user.name;
      user.current;
    }
    */
    // console.log('game was updated');
    // console.log(data.name + ' completed a prompt');
    // console.log('completed ' + data.goal);
  }


  render (){
    return (
      <div className='race'>
      {this.state.game.player &&
            this.state.game.player.map((user, i) => {
              return (
                <div key={i} className="clearfix">
                  <div className="col-sm-2">
                  {user.name}
                  </div>
                  <div className="col-sm-10">
                      <Bar amount={user.current} />
                    <div className={'player'+i}></div>
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
