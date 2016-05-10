import { CREATE_GAME } from '../actions/actions';

const INIT_STATE = {roomname: '', password: '', difficulty:'easy', amount: 2};

export default function (state = INIT_STATE, action){
  switch (action.type){
    case CREATE_GAME:
      return {roomname: action.payload.roomname, password: action.payload.password, difficulty:action.payload.difficulty, amount:action.payload.amount};
    default:
    return state;
  }
}
