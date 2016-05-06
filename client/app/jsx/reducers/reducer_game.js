 import { FETCH_PROMPT, SUBMIT_ATTEMPT } from '../actions/actions';

const INITIAL_STATE = { prompt: {}, attempt: { ouput: [], reason: ''} , setup: "", passed: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PROMPT:
    return { 
      prompt: action.payload.data, 
      attempt: state.attempt, 
      setup: action.payload.data.session.setup,
      passed: false
    };
  case SUBMIT_ATTEMPT:
    return {
      prompt: state.prompt,
      attempt: JSON.parse(action.payload.data.response),
      setup: action.payload.data.setup,
      passed: (JSON.parse(action.payload.data.response)).passed
    };
  default:
    return state;
  }
}