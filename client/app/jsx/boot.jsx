const React = require('react')
const ReactDOM = require('react-dom')
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/rootReducer';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, promise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('App'))
