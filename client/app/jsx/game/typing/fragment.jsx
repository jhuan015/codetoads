import React from 'react';

class Frag extends React.Component {
  
  _renderExpression() {
    return this.props.expression.map((letter, index) => {
      var classes = 'fragment-letter';
      if(letter === this.props.term[index]){
        classes = 'fragment-letter-green';
      }
      return (
        <span
          key={index}
          id={index}
          className={classes}>
          {letter}
        </span>
      );
    });
  }
  
  render (){
    return (
      <div id='expression' class='container'>
        {this._renderExpression()}
      </div>
    )
  }
}

export default Frag;
