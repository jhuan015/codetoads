const React = require('react');
const {SplitButton, MenuItem} = require('react-bootstrap');
class DiffButton extends React.Component {
  constructor(){
    super();
    this.state={difficulty:'Easy',title:'Tadpole'};
  }
  render (){
    return (
      <div className='clearfix multi-btn-select text-center'>
        <h5>Select Difficulty</h5>
        <SplitButton title={this.state.title} pullRight id="split-button-pull-right" onSelect={this._changeSelection.bind(this)} >
        <MenuItem eventKey="Easy,Tadpole">Tadpole</MenuItem>
        <MenuItem eventKey="Medium,Toadlet" >Toadlet</MenuItem>
        <MenuItem eventKey="Hard,Toad">Toad</MenuItem>
        <MenuItem eventKey="Insane,Toad Legend">Toad Legend</MenuItem>
        </SplitButton>
      </div>
      );
  }
  _changeSelection (val){
    val = val.split(',');
    this.setState({difficulty:val[0],title:val[1]});
  }
}

module.exports = DiffButton;
