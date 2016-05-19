import { FETCH_PROMPTS, SUBMIT_ATTEMPT, CLOSE_ALERT, NEXT_PROMPT, CHEAT, UPDATE_PROMPTS, START_GAME, SAVE_GAME, UPDATE_USERS, CLOSE_FINISH, RESET_GAME, RECONNECT } from '../actions/actions';


const INITIAL_STATE = { prompts: [], attempt: { ouput: [], reason: ''}, passed: false, index: 0, alert: false, started:false, users: [], done: false};

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
      users: state.users,
      done: false
    };
  case SUBMIT_ATTEMPT:
    return {
      prompts: state.prompts.slice(),
      attempt: JSON.parse(action.payload.data.response),
      passed: (JSON.parse(action.payload.data.response)).passed,
      index: state.index,
      alert: true,
      started: state.started,
      users: state.users,
      done: state.done
    };
  case CLOSE_ALERT:
    return {
      prompts: state.prompts.slice(),
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: false,
      started: state.started,
      users: state.users,
      done: state.done
    }
  case NEXT_PROMPT:
    return {
      prompts: state.prompts.slice(),
      attempt: { ouput: [], reason: ''},
      passed: false,
      index: action.index,
      alert: state.alert,
      started: state.started,
      users: state.users,
      done: state.done
    }
  case CHEAT:
    return {
      prompts: state.prompts.slice(),
      attempt: state.attempt,
      passed: true,
      index: state.index,
      alert: true,
      started: state.started,
      users: state.users,
      done: state.done
    }
  case UPDATE_PROMPTS:
    return {
      prompts: action.payload.prompts,
      attempt: state.attempt,
      passed: state.passed,
      index: action.payload.index,
      alert: state.alert,
      started: action.payload.started,
      users: state.users,
      done: state.done
    }
  case START_GAME:
    return {
      prompts: state.prompts,
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: state.alert,
      started: true,
      users: state.users,
      done: state.done
    }
  case SAVE_GAME:
    return {
      prompts: state.prompts,
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: state.alert,
      started: state.started,
      users: state.users,
      done: state.done
    }
  case UPDATE_USERS:
    return {
      prompts: state.prompts,
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: state.alert,
      users: action.users,
      done: state.done
    }
  case CLOSE_FINISH:
    return {
      prompts: state.prompts.slice(),
      attempt: state.attempt,
      passed: state.passed,
      index: state.index,
      alert: false,
      started: state.started,
      users: state.users,
      done: true
    }
  case RESET_GAME:
    return { 
      prompts: [],
      attempt: { ouput: [], reason: ''},
      passed: false,
      index: 0,
      alert: false,
      started:false,
      users: [],
      done: false
    }
  case RECONNECT:
  console.log('payload for reconnect');
  console.log(action.payload);
    return {
      prompts: action.payload.prompts,
      attempt: state.attempt,
      passed: state.passed,
      index: action.payload.index,
      alert: state.alert,
      started: action.payload.started,
      users: action.payload.players,
      done:state.done
    }
  default:
    return state;
  }
}
