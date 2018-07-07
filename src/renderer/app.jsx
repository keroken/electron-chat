import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Login from './Login';
import Signup from './Signup';
import Rooms from './Rooms';
import Room from './Room';

// Routing の定義
const appRouting = (
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="login" commponent={Login} />
        <Route path="signup" commponent={Signup} />
        <Route path="rooms" commponent={Rooms} >
          <Route path=":roomId" commponent={Room} />
        </Route>
      </Route>
    </Router>
);

// Routingの初期化
if (!location.hash.length) {
    location.hash = "#/login";
}

// Applicationの描画
render(appRouting, document.getElementById('app'));