import React from 'react';

class Timer extends React.Component {
  constructor () {
    super()
    this.state = {
      start: Date.now(),
      elapsed: 0
    };
  }
  componentWillReceiveProps (nextProps) {
    if(nextProps.solo && nextProps.done){
      console.log('time to update solo stats');
      //calculate time in seconds
      var time = Math.round(this.state.elapsed / 100)/10;
      nextProps.updateSoloStats(time);
      clearInterval(this.timer);
    }
  }
  componentDidMount () {
    this.timer = setInterval(this.tick.bind(this), 50);
  }
  componentWillUnmount () {
    clearInterval(this.timer);
  }
  tick () {
    this.setState({elapsed: new Date() - this.state.start});
  }
  pad (d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }
  render () {
    var elapsed = Math.round(this.state.elapsed / 100)/10;
    var min = this.pad(Math.floor(elapsed/60));
    var seconds = this.pad(Math.floor(elapsed%60));
    return <div className="timer">{min}:{seconds}</div>
  }
}

export default Timer;
