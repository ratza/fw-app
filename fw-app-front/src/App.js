import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

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
