import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import SignIn from './components/SignIn';
import App from './components/App';

export default (
  <Router history={browserHistory} >
    <Route path='/' component={SignIn}>
    	<Route path='app/:user' component={App}></Route>
    </Route>
  </Router>
)