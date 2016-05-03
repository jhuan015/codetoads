const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;
class LandingSections extends React.Component {
  constructor (){
    super();
    this.state = {};    
  }
  render (){
    return (
      <div className='Landing'>
        <section className='intro text-center'>
          <div>
            <h1>Code Toads</h1>
            <h3>The pond isn't big enough for two</h3>
            <hr className="intro-divider"></hr>
            <div className="text-center">
              <Link to='/Lobby' className='btn btn-primary btn-lg'>Battle Now</Link>              
            </div>
          </div>
        </section>
        <div className="content text-left">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-sm-6">
                      <hr className="content-heading-spacer"></hr>
                      <div className="clearfix"></div>
                      <h2 className="content-heading">Compete against the World</h2>
                      <p className="lead">Tired of arguing who the better engineer is? Look no further. Compete against each other live with problems, compliments of codewars, to see which of you has the quickest wits to solve unknown prompts.</p>
                  </div>
                  <div className="col-lg-5 col-lg-offset-1 col-sm-6">
                      <img className="content-img" src="app/img/codewars.png" alt="Codewars" />
                  </div>
              </div>
          </div>
        </div>
        <div className="content-alt text-left">
          <div className="container">
              <div className="row">
                  <div className="col-lg-5 col-sm-6">
                    <img className="content-img" src="app/img/frogking.jpg" alt="King of the Pong" />                      
                  </div>
                  <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                      <hr className="content-heading-spacer"></hr>
                      <div className="clearfix"></div>
                      <h2 className="content-heading">Reign Surpreme</h2>
                      <p className="lead">Dueling isn't just about competing, it's also a means to become a master at concepts you otherwise may not encounter in your daily life.</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
      );
  }
}

module.exports = LandingSections;