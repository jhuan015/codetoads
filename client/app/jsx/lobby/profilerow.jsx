const React = require('react');
class ProfileRow extends React.Component {
  /*constructor(){
    super();
    this.state ={};
  };*/  
  render (){
    return (
        <div className="row profile-panel__group">
          <div className='col-sm-6 profile-panel__group__title'>
            {this.props.title}
          </div>
          <div className='col-sm-6'>
            {this.props.value}
          </div>
        </div>
      );
  };
}
module.exports = ProfileRow;