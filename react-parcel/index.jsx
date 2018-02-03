import React from "react";
import ReactDOM from "react-dom";
import "./index.styl";

// import TimerView from './components/TimerView.js';
// import appState from './appState.js';

import DevTools from "mobx-react-devtools";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";

const store = new TodoListModel();
store.addTodo('new Todo');
const App = () => (
  <div className="App">
    <h2>Hello Parcel</h2>
    <DevTools />
    <TodoList store={store} />
    <input type="text"/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}