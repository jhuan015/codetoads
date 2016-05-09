import { CREATE_DIFFICULTY } from '../actions/actions';

const INIT_STATE = {amount:2, difficulty:'easy'};

export default function (state = INIT_STATE, action){
  switch (action.type){
    case CREATE_DIFFICULTY:
      return {amount:state.amount, difficulty:action.difficulty};
    default:
    return state;
  }
}
