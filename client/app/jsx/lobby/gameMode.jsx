const React = require('react');
const {Tabs,Tab} = require('react-bootstrap');
const Solo = require('./sologame');
const Multi = require('./multigame');

class GameMode extends React.Component {
  render (){
    return (
      <div>
        <h2>Toad Mode</h2>
        <Tabs defaultActiveKey={1} id='ModeSelection'>
          <Tab eventKey={1} title="Solo Toad">
            <Solo/>
          </Tab>
          {this.props.isAuthenticated && <Tab eventKey={2} title="Multi Toad">
            <Multi/>
          </Tab>}
        </Tabs>
      </div>
    )
  }
}

module.exports = GameMode
