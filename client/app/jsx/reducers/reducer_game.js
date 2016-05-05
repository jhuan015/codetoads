 import { FETCH_PROMPT, SUBMIT_ATTEMPT } from '../actions/actions';

const INITIAL_STATE = { prompt: {}, attempt: { ouput: [], reason: ''} , setup: "" };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PROMPT:
    return { prompt: action.payload.data, attempt: state.attempt, setup: action.payload.data.session.setup };
  case SUBMIT_ATTEMPT:
    return { prompt: state.prompt, attempt: JSON.parse(action.payload.data.response), setup: action.payload.data.setup };
  default:
    return state;
  }
}