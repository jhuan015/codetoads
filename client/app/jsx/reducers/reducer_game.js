 import { FETCH_PROMPTS, SUBMIT_ATTEMPT } from '../actions/actions';

const INITIAL_STATE = { prompts: [], attempt: { ouput: [], reason: ''} , passed: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PROMPTS:
    return { 
      prompts: action.payload.data, 
      attempt: state.attempt,
      passed: false
    };
  case SUBMIT_ATTEMPT:
    return {
      prompts: state.prompts.slice(),
      attempt: JSON.parse(action.payload.data.response),
      passed: (JSON.parse(action.payload.data.response)).passed
    };
  default:
    return state;
  }
}