const React = require('react');
import Bar from './bar';
import Timer from './timer';
import { Tooltip } from 'react-bootstrap';

class Race extends React.Component {
  constructor (){
    super();
    this.state= {
      game:{},
      done: false
    }
  }

  componentDidMount() {
    socket.on('update:game', this._updateGame.bind(this));
    socket.on('winner', this._winner.bind(this));
    socket.on('getGame', this._updateGame.bind(this));
    socket.emit('getGame', {});
  }
  _winner(data) {
    console.log(data.winner + ' WON!');
  }
  // _completed(data){
  //   console.log(data.name + 'Completed the game!!!!!!!!!!!');
  // }
  _updateGame(data) {
    //mounting error happens here
    this.setState({game:data});
    this.props.saveGame(this.state.game);
  }


  render (){
    return (
      <div className='race'>
      {/*<Timer solo={false}/>*/}
      <div className='grass-wrap'>
        <div className='grass'></div>
      </div>
      <div className='race-path'></div>
      {this.state.game.player && <div className='race-path-wrap'><div className='finishLine-wrap'><div className='finishLine'></div></div>
            {this.state.game.player.map((user, i) => {
              return (
                <div key={i} className={'frog frog' + (i+1) + ' path' +(user.progress * 20)}><Tooltip id={user.name} placement='left' className='in frog-tooltip'>
                {user.name}</Tooltip></div>
                );
            })}</div>
          }
      </div>
    )
  }
}

module.exports = Race
