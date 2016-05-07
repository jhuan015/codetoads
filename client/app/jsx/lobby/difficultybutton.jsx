const React = require('react');
const {SplitButton, MenuItem} = require('react-bootstrap');
class DiffButton extends React.Component {   
  constructor(){
    super();    
    this.state={title:'easy'};
  }
  componentWillReceiveProps (nextProps){
    const diff = {
      'easy':'Tadpole',
      'medium':'Toadlet',
      'hard':'Toad',
      'insane':'Toad Legend'
    };
    this.setState({title:diff[nextProps.difficulty]});
  }
  render (){
    return (
      <div className='clearfix multi-btn-select text-center'>
        <h5>Select Difficulty</h5>
        <SplitButton title={this.state.title} pullRight id="split-button-pull-right" onSelect={this._changeSelection.bind(this)} >
        <MenuItem eventKey="easy">Tadpole</MenuItem>
        <MenuItem eventKey="medium" >Toadlet</MenuItem>
        <MenuItem eventKey="hard">Toad</MenuItem>
        <MenuItem eventKey="insane">Toad Legend</MenuItem>
        </SplitButton>
      </div>
      );
  }
  _changeSelection (val){
    this.props.createDifficulty(val); 
  }
}

module.exports = DiffButton;
