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
        id: action.payload.data.id || '',
        user_id: action.payload.data.user_id || '',
        username: action.payload.data.username || '',
        firstname: action.payload.data.firstname || '',
        lastname: action.payload.data.lastname || '',
        winStreak: action.payload.data.winStreak || 0,
        lostTo: action.payload.data.lostTo || "You haven't lost yet",
        gamesPlayed: action.payload.data.gamesPlayed || 0,
        quits: action.payload.data.quits || 0,
        fastest: action.payload.data.fastest || 0,
        email: action.payload.data.email || '',
        picture: action.payload.data.picture || ''
      };
    default:
    return state;
  }
}
