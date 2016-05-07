import { combineReducers } from 'redux';
import GameReducer from './reducer_game';
import SoloGame from './solo_selection';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  game: GameReducer,
  soloSelection: SoloGame
  /*multiSelection: MultiGame*/
  // form: formReducer
});

export default rootReducer;
