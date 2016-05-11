import { combineReducers } from 'redux';
import Authreducer from './reducer_auth';
import GameReducer from './reducer_game';
import SelectionReducer from './reducer_selection';

const rootReducer = combineReducers({
  game: GameReducer,
  auth: Authreducer,
  selection: SelectionReducer
});

export default rootReducer;
