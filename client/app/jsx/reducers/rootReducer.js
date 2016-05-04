import { combineReducers } from 'redux';
import GameReducer from './reducer_game';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  game: GameReducer
  // form: formReducer
});

export default rootReducer;
