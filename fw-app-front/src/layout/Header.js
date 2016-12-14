import React, { Component, PropTypes } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Vasea', count: 0 };

    this.addToCounter = this.addToCounter.bind(this);
  }

  addToCounter() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  render() {
    return (
      <header className="container">
        Welcome {this.state.name}! You clicked {this.state.count} times!
        { this.props.children }
        <button onClick={this.addToCounter}>Count</button>
        <img src={this.props.logo} alt="Logo"/>
      </header>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

Header.defaultProps = {
  logo: 'test'
};

export default Header;