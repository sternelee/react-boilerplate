import React from 'react';
import ReactDOM from 'react-dom';
import './index.styl';

// import TimerView from './components/TimerView.js';
// import appState from './appState.js';

import DevTools from "mobx-react-devtools";
import Draggable from 'react-draggable';

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import ListCheck from './ListCheck';
// import MobxApp from './MobxApp';
import makeDrag from './makeDrag';
import Card from './dnd';

const CardDrag = makeDrag(Card)

const store = new TodoListModel();
store.addTodo('new Todo');
const App = () => (
  <div className="App">
    <h2>Hello Parcel</h2>
    {/* <MobxApp /> */}
    <DevTools />
    <TodoList store={store} />
    <input type="text"/>
    <ListCheck />
    <CardDrag defaultPosition={{x: 10, y: 30}} styled={{display: 'inline-block'}} />
    {/* <Draggable><div style={{display: 'inline-block'}}>I can now be moved around!</div></Draggable> */}
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
// if (module.hot) {
//   module.hot.accept();
// }
if (module.hot) {
  module.hot.dispose(function () {
    // 模块即将被替换时
    console.log('模块替换')
  });

  module.hot.accept(function () {
    // 模块或其依赖项之一刚刚更新时
    console.log('模块更新')
  });
}
