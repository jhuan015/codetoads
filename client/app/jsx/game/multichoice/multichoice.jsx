import React from 'react';

class MultiChoice extends React.Component {
  render () {
    return (
      <div>Multiple Choice Test

      <ul className="answers">
      <input className='with-gap' type="radio" name="q1" value="a" id="a1" onClick={console.log('test')} /><label htmlFor="a1">Answer 1</label><br />
      <input className='with-gap' type="radio" name="q1" value="b" id="a2" /><label htmlFor="a2">Answer 2</label><br />
      <input className='with-gap' type="radio" name="q1" value="c" id="a3" /><label htmlFor="a3">Answer 3</label><br />
      <input className='with-gap' type="radio" name="q1" value="d" id="a4" /><label htmlFor="a4">Answer 4</label><br />
      </ul>
      </div>
    )
  }
}

export default MultiChoice;
