import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeContent from './home/homeContent';
import Signup from './auth/home';
import Lobby from './lobby/lobby';
import Layout from './layout';
import Auth from './auth/auth';
import Game from './game/game';
import LoggedIn from './auth/loggedin';

export default (
    <Route path='/' component={Layout}>
      <IndexRoute component={HomeContent} />
      <Route path='/signup' component={Auth} />
      <Route path='/lobby' component={Lobby} />
      <Route path='/play' component={Game} />
      <Route path="/loggedin" component={LoggedIn}/>
      <Route path="*" component={HomeContent}/>
    </Route>
)
