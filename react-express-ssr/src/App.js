import React, { Component } from 'react';
import Loadable from 'react-loadable';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setMessage } from './store/appReducer';

const AsyncComponent = Loadable({
  loader: () => import(/* webpackChunkName: "myNamedChunk" */ './SomeComponent'),
  loading: () => <div>loading...</div>,
  modules: ['myNamedChunk']
});

class App extends Component {
  componentDidMount() {
    if(!this.props.message) {
        this.props.updateMessage("Hi, I'm from client!");
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AsyncComponent/>
        <p>
          Redux: { this.props.message }
        </p>
      </div>
    );
  }
}

export default connect(
  ({ app }) => ({
      message: app.message,
  }),
  dispatch => ({
      updateMessage: (txt) => dispatch(setMessage(txt)),
  })
)(App);
