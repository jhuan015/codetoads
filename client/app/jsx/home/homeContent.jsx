const LandingSections = require('./landingSections')

class HomeContent extends React.Component{
  constructor (){
    super();
    this.state = {
      disease:'Aids'
    };
  }
  render (){
   return (
      <div>
        <LandingSections />  
      </div>
    );
  };
  _arth (){
    this.setState({disease:'Arthritis'})
  };
  _cancer (){
    this.setState({disease:'Cancer'})
  };

}  

module.exports = HomeContent;