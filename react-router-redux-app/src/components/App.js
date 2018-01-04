import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js   <b>{this.props.count}</b>   </code> and save to reload.
        </p>
        <p><Link to="/foo">去Foo那里加1</Link></p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
      count: state.counter
  }
}
export default connect(mapStateToProps)(App);
