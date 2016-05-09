 import { FETCH_PROMPTS, SUBMIT_ATTEMPT, NEXT_PROMPT, CHEAT } from '../actions/actions';

const INITIAL_STATE = { prompts: [], attempt: { ouput: [], reason: ''}, passed: false, index: 0};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PROMPTS:
    return { 
      prompts: action.payload.data, 
      attempt: state.attempt,
      passed: false,
      index: 0
    };
  case SUBMIT_ATTEMPT:
    return {
      prompts: state.prompts.slice(),
      attempt: JSON.parse(action.payload.data.response),
      passed: (JSON.parse(action.payload.data.response)).passed,
      index: state.index
    };
  case NEXT_PROMPT:
    return {
      prompts: state.prompts.slice(),
      attempt: state.attempt,
      passed: false,
      index: action.index
    }
  case CHEAT:
    return {
      prompts: state.prompts.slice(),
      attempt: state.attempt,
      passed: true,
      index: state.index
    }
  default:
    return state;
  }
}