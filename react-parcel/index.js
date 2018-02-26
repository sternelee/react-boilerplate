import React from 'react';
import ReactDOM from 'react-dom';
import ListCheck from './components/ListCheck';

const App = () => (
  <div className="App">
    <h1 className="App-Title">Hello Parcel React</h1>
    <ListCheck />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}