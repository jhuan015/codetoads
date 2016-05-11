import { combineReducers } from 'redux';
import Authreducer from './reducer_auth';
import GameReducer from './reducer_game';
import SoloGame from './solo_selection';
import MultiGame from './multi_selection';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  game: GameReducer,
  auth: Authreducer,
  soloSelection: SoloGame,
  multiSelection: MultiGame,
});

export default rootReducer;
