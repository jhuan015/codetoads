import React from 'react';
import { connect } from 'react-redux';
import { fetchPrompts, submitAttempt, closeAlert, nextPrompt, cheatMe, incrementGames, updateSoloStats, closeAndFinish } from '../actions/actions';
import Race from './race';
import Prompt from './prompt';
import UserInputSolo from './userInputSolo';
import TestResults from './testResults';
import  { Tabs, Tab } from 'react-bootstrap';
import SweetAlert from 'sweetalert-react';
import Timer from './timer'

class Game extends React.Component {
  componentWillMount() {
    this.props.fetchPrompts(this.props.difficulty);
    this.props.incrementGames();
  }

  render (){
    if(this.props.prompts.statusCode === 500){
      console.log('calling again');
      this.props.fetchPrompts(this.props.difficulty);
    }
    return (
      <div className='game'>
        <SweetAlert
          show={this.props.alert && this.props.index+1 !== this.props.amount && this.props.passed}
          imageUrl= "app/img/ironfrog.gif"
          imageSize= '250x250'
          title="Success!"
          text="You got that answer right, toad."
          onConfirm={() => this.props.closeAlert()}
        />
        <SweetAlert
          show={this.props.alert && this.props.index+1 === this.props.amount && this.props.passed}
          imageUrl= "app/img/jumping_frog.gif"
          imageSize= '250x250'
          title="Great job!"
          text="You've finished all the prompts."
          onConfirm={() => this.props.closeAndFinish()}
        />
        <SweetAlert
          show={this.props.alert && !this.props.passed}
          imageUrl= "app/img/wrongtoad.jpg"
          imageSize= '250x250'
          title="Wrong Answer!"
          text="Sorry! Try again."
          onConfirm={() => this.props.closeAlert()}
        />
        <div className='prompt-panel col-sm-4'>
          <Tabs defaultActiveKey={1} id='detailsSelection'>
            <Tab eventKey={1} title="Prompt">
              { this.props.prompts[this.props.index] &&
                <Prompt name={this.props.prompts[this.props.index].name} description={this.props.prompts[this.props.index].description} />}
            </Tab>
            <Tab eventKey={2} title="Test Results">
              <TestResults output={this.props.attempt.output} reason={this.props.attempt.reason} />
            </Tab>
          </Tabs>
        </div>
        <div className='input-panel col-sm-8'>
          <Timer updateSoloStats={this.props.updateSoloStats} done={this.props.done} />
          { this.props.prompts[this.props.index] &&
            <UserInputSolo
            fetchPrompts={this.props.fetchPrompts}
            submitAttempt={this.props.submitAttempt}
            nextPrompt={this.props.nextPrompt}
            cheatMe={this.props.cheatMe}
            closeAndFinish={this.props.closeAndFinish}
            session={this.props.prompts[this.props.index].session}
            passed={this.props.passed}
            index={this.props.index}
            amount={this.props.amount}
            complete={this.props.index+1 === this.props.amount}/>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { prompts: state.game.prompts,
           attempt: state.game.attempt,
           passed: state.game.passed,
           index: state.game.index,
           amount: state.selection.amount,
           difficulty: state.selection.difficulty,
           alert: state.game.alert,
           done: state.game.done
          };
}

export default connect(mapStateToProps, { fetchPrompts, submitAttempt, nextPrompt, cheatMe, closeAlert, incrementGames, updateSoloStats, closeAndFinish })(Game);
