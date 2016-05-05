 import { FETCH_PROMPT, SUBMIT_ATTEMPT } from '../actions/actions';

const INITIAL_STATE = { prompt: {}, attempt: { ouput: [], reason: ''} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PROMPT:
    return { prompt: action.payload.data, attempt: state.attempt };
  case SUBMIT_ATTEMPT:
    return { prompt: state.prompt, attempt: action.payload.data };
  default:
    return state;
  }
}