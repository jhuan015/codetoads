import { GET_USER_INFO } from '../actions/actions';

const INIT_STATE = {
  id: '',
  user_id: '',
  username: 'Batman',
  firstname: 'Bruce',
  lastname: 'Wayne',
  winStreak: 0,
  lostTo: 'Superman',
  gamesPlayed: 0,
  quits: 0,
  fastest: 0,
  email: '',
  picture: ''
};

export default function (state = INIT_STATE, action){
  console.log(action.payload)
  switch (action.type){
    case GET_USER_INFO:
      return {
        id: action.payload.id || '',
        user_id: action.payload.user_id || '',
        username: action.payload.username || '',
        firstname: action.payload.firstname || '',
        lastname: action.payload.lastname || '',
        winStreak: action.payload.winStreak || 0,
        lostTo: action.payload.lostTo || '',
        gamesPlayed: action.payload.gamesPlayed || 0,
        quits: action.payload.quits || 0,
        fastest: action.payload.fastest || 0,
        email: action.payload.email || '',
        picture: action.payload.picture || ''
      };
    default:
    return state;
  }
}
