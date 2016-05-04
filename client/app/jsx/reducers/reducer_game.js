 import { FETCH_PROMPT } from '../actions/actions';

const INITIAL_STATE = {prompt: ''};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PROMPT:
    return { prompt: action.payload.data };
  default:
    return state;
  }
}