import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeContent from './home/homeContent';
import Signup from './home';
import Lobby from './lobby/lobby';
import Layout from './layout';
import Auth from './auth';
import Game from './game/game';


export default (
    <Route path='/' component={Layout}>
      <IndexRoute component={HomeContent} />
      <Route path='/signup' component={Auth} />
      <Route path='/lobby' component={Lobby} />
      <Route path='/play' component={Game} />
      <Route path="*" component={HomeContent}/>
    </Route>
)
