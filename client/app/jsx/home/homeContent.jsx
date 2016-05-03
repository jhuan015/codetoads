const LandingSections = require('./landingSections')

class HomeContent extends React.Component{
  constructor (){
    super();
    this.state = {};
  }
  render (){
   return (
      <LandingSections />      
    );
  };

}  

module.exports = HomeContent;