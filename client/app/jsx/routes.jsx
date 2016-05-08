import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeContent from './home/homeContent';
import Lobby from './lobby/lobby';
import Layout from './layout';
import Game from './game/game';
import MultiGame from './game/multiplayer/multiGame';


function checkAuth(nextState, replace) {

  var authenticated = localStorage.getItem('id_token') ? true : false;
  if (!authenticated) {
    replace({
      pathname: '/',
      state: {
        nextPathname: nextState.location.pathname,
      },
    });
  }
}

export default (
    <Route path='/' component={Layout}>
      <IndexRoute component={HomeContent} />
      <Route path='/lobby' component={Lobby} />
      <Route path='/play' component={Game} />
      <Route path='/multiplay/:name' component={MultiGame} />
      <Route path="*" component={HomeContent}/>
    </Route>
)
