import React, { Component } from 'react';
import Header from './layout/Header'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo}>
          <h1>Hello lady!</h1>
        </Header>
      </div>
    );
  }
}

export default App;
