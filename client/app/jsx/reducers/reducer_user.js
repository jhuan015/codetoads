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
  switch (action.type){
    case GET_USER_INFO:
      return {
        id: '',
        user_id: '',
        username: '',
        firstname: '',
        lastname: '',
        winStreak: 0,
        lostTo: '',
        gamesPlayed: 0,
        quits: 0,
        fastest: 0,
        email: '',
        picture: ''
      };
    default:
    return state;
  }
}
