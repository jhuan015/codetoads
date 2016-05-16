import React from 'react';
import classNames from 'classnames';

class Key extends React.Component {
  constructor(props) {
      super(props);
      this.state = {active: false};
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.current === nextProps.code) {
      this.setState({
        active: true
      });
    }
    this.timeout = setTimeout( this._changeClass.bind(this), 1000);
  }

  _changeClass () {
    this.setState({
      active: false
    })
  }

  render (){
    let classes = classNames(this.props.type, {active: this.state.active} );
    return (
      <li className={classes}>
        <span className="off">{ this.props.char1}</span>
        {this.props.char2 && <span className="off">{ this.props.char2}</span>}
      </li>
    )
  }
}

export default Key;

