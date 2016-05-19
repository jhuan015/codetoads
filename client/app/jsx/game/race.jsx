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
    socket.on('getGame', this._updateGame.bind(this));
    socket.emit('getGame', {});
  }
  _winner(data) {
    console.log(data.winner + ' WON!');
  }
  _completed(){
    console.log(data.completed + 'Completed the game!!!!!!!!!!!');
  }  
  _updateGame(data) {
    console.log('current game');
    console.log(data);
    this.setState({game:data});
    this.props.saveGame(this.state.game);
  }


  render (){
    return (
      <div className='race'>
      {/*<Timer/>*/}
      <div className='grass-wrap'>
        <div className='grass'></div>
      </div>
      <div className='race-path'></div>
      <div className='finishLine'></div>
      {this.state.game.player && <div className='race-path-wrap'>
            {this.state.game.player.map((user, i) => {
              return (
                <div key={i} className={'frog frog' + (i+1) + ' path' +(user.progress * 20)}>                
                </div>
              );
            })}</div>
          }
      </div>
    )
  }
}

module.exports = Race
