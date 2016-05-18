 import { FETCH_PROMPTS, SUBMIT_ATTEMPT, CLOSE_ALERT, NEXT_PROMPT, CHEAT, UPDATE_PROMPTS, START_GAME, SAVE_GAME, UPDATE_USERS } from '../actions/actions';

const INITIAL_STATE = { prompts: [], attempt: { ouput: [], reason: ''}, passed: false, index: 0, alert: false, started:false, users: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PROMPTS:
    return {
      prompts: action.payload.data,
      attempt: state.attempt,
      passed: false,
      index: 0,
      alert: state.alert,
      started: false,
      users: state.users
    };
  case SUBMIT_ATTEMPT:
    return {
      prompts: state.prompts.slice(),
      attempt: JSON.parse(action.payload.data.response),
      passed: (JSON.parse(action.payload.data.response)).passed,
      index: state.index,
      alert: true,
      started: state.started,
      users: state.users
    };
  case CLOSE_ALERT:
    return {
      prompts: state.prompts.slice(),
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: false,
      started: state.started,
      users: state.users
    }
  case NEXT_PROMPT:
    return {
      prompts: state.prompts.slice(),
      attempt: { ouput: [], reason: ''},
      passed: false,
      index: action.index,
      alert: state.alert,
      started: state.started,
      users: state.users
    }
  case CHEAT:
    return {
      prompts: state.prompts.slice(),
      attempt: state.attempt,
      passed: true,
      index: state.index,
      alert: true,
      started: state.started,
      users: state.users
    }
  case UPDATE_PROMPTS:
    return {
      prompts: action.payload.prompts,
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: state.alert,
      started: action.payload.started,
      users: state.users
    }
  case START_GAME:
    return {
      prompts: state.prompts,
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: state.alert,
      started: true,
      users: state.users
    }
  case SAVE_GAME:
    return {
      prompts: state.prompts,
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: state.alert,
      started: state.started,
      users: state.users
    }
  case UPDATE_USERS:
    return {
      prompts: state.prompts,
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: state.alert,
      users: action.users
    }
  default:
    return state;
  }
}
