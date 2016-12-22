import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import LoginPage from './login/login_page';
import { Router, Route, browserHistory } from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={LoginPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
