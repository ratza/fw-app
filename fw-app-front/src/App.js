import React, { Component } from 'react'
import './App.css'
import Header from './layout/header/Header'


class App extends Component {
  render() {
    return (
      <div className="App-container" id="App">
        <Header/>

        <div className="main-content-block">
          <div className="container">
            {this.props.children}
          </div>
        </div>

        <footer>
          Copyright © 2016 FusionWorks
        </footer>
      </div>
    );
  }
}

export default App;
