const React = require('react');
import Bar from './bar';
import Timer from './timer';

class Race extends React.Component {
  constructor (){
    super();
    this.state= {
      game:{}
    }
  }

  componentDidMount() {
    socket.on('update:game', this._updateGame.bind(this));
    socket.on('winner', this._winner.bind(this));
    socket.on('completed', this._completed.bind(this));
  }

  _winner(data) {
    console.log(data.winner + ' WON!');
  }
  _completed(){
    console.log(data.completed + 'Completed the game!!!!!!!!!!!');
  }
  _updateGame(data) {
    this.setState({game:data});
    this.props.saveGame(this.state.game);
  }


  render (){
    return (
      <div className='race'>
      <Timer/>
      {this.state.game.player &&
            this.state.game.player.map((user, i) => {
              return (
                <div key={i} className="clearfix player">
                  <div className="col-sm-2">
                  {user.name}
                  </div>
                  <div className="col-sm-10">
                    <div className={'player'+i}>
                     <Bar amount={user.progress} />
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
