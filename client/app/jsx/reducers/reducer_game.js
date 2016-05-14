 import { FETCH_PROMPTS, SUBMIT_ATTEMPT, CLOSE_ALERT, NEXT_PROMPT, CHEAT } from '../actions/actions';

const INITIAL_STATE = { prompts: [], attempt: { ouput: [], reason: ''}, passed: false, index: 0, alert: false};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PROMPTS:
    return {
      prompts: action.payload.data,
      attempt: state.attempt,
      passed: false,
      index: 0,
      alert: state.alert
    };
  case SUBMIT_ATTEMPT:
    return {
      prompts: state.prompts.slice(),
      attempt: JSON.parse(action.payload.data.response),
      passed: (JSON.parse(action.payload.data.response)).passed,
      index: state.index,
      alert: (JSON.parse(action.payload.data.response)).passed,
    };
  case CLOSE_ALERT:
    return {
      prompts: state.prompts.slice(),
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: false
    }
  case NEXT_PROMPT:
    return {
      prompts: state.prompts.slice(),
      attempt: { ouput: [], reason: ''},
      passed: false,
      index: action.index,
      alert: state.alert
    }
  case CHEAT:
    return {
      prompts: state.prompts.slice(),
      attempt: state.attempt,
      passed: true,
      index: state.index,
      alert: true
    }
  default:
    return state;
  }
}
