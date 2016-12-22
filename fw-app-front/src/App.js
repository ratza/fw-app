import React, { Component } from 'react';
// import LoginPage from './login/login_page';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        It's home page
        <Link to='/login'>go login</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
