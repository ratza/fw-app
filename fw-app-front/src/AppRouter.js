import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';
import LoginPage from './login/LoginPage';
import App from './App';

class AppRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginPage}/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;