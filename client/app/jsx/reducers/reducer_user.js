import { GET_USER_INFO, INCREMENT_GAME, UPDATE_SOLO } from '../actions/actions';

const INIT_STATE = {
  id: '',
  user_id: '',
  username: '',
  firstname: '',
  lastname: '',
  winStreak: 0,
  lostTo: '',
  gamesPlayed: 0,
  quits: 0,
  completed: 0,
  fastest: 0,
  email: '',
  picture: '',
  error: false
};

export default function (state = INIT_STATE, action){
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
        completed: action.payload.data.completed || 0,
        fastest: action.payload.data.fastest || 0,
        email: action.payload.data.email || '',
        picture: action.payload.data.picture || '',
        error: action.error || false
      };
    case INCREMENT_GAME:
      return {
        id: state.id,
        user_id: state.user_id,
        username: state.username,
        firstname: state.firstname,
        lastname: state.lastname,
        winStreak: state.winStreak,
        lostTo: state.lostTo,
        gamesPlayed: action.payload.data.gamesPlayed,
        quits: state.quits,
        completed: action.payload.data.completed,
        fastest: state.fastest,
        email: state.email,
        picture: state.picture,
        error: state.error || false
      };
      case UPDATE_SOLO:
        return {
          id: state.id,
          user_id: state.user_id,
          username: state.username,
          firstname: state.firstname,
          lastname: state.lastname,
          winStreak: state.winStreak,
          lostTo: state.lostTo,
          gamesPlayed: action.payload.data.gamesPlayed,
          quits: state.quits,
          completed: state.completed,
          fastest: state.fastest,
          email: state.email,
          picture: state.picture,
          error: state.error || false
      };
    default:
    return state;
  }
}
