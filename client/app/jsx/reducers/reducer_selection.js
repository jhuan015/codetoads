import { CREATE_DIFFICULTY, CREATE_GAME, SET_CREATE, SET_JOIN, SET_ROOM } from '../actions/actions';

const INIT_STATE = {amount: 2, difficulty: 'easy', roomname: '', password: '', create: false, join: false};

export default function (state = INIT_STATE, action){
  switch (action.type){
    case CREATE_DIFFICULTY:
      return {
        amount: state.amount,
        difficulty: action.difficulty,
        roomname: state.roomname,
        password: state.password,
        create: state.create,
        join: state.join
      };
    case SET_CREATE:
      return {
        amount: state.amount,
        difficulty: state.difficulty,
        roomname: state.roomname,
        password: state.password,
        create: true,
        join: false
      };
    case SET_JOIN:
      return {
        amount: state.amount,
        difficulty: state.difficulty,
        roomname: state.roomname,
        password: state.password,
        create: false,
        join: true
      };
    case SET_ROOM:
      return {
        amount: state.amount,
        difficulty: state.difficulty,
        roomname: action.roomname,
        password: action.password,
        create: state.create,
        join: state.join
      }
    case CREATE_GAME:
      return {
        amount: state.amount,
        difficulty: action.payload.difficulty,
        roomname: action.payload.roomname,
        password: action.payload.password,
        create: state.create,
        join: state.join
      };
    default:
    return state;
  }
}
