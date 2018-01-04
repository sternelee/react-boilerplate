import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers'
import Root from './components/Root'

const initialStore = JSON.parse(localStorage.getItem('reduxStore')) || {
 todos: ['react','react-router','redux'],
 visibilityFilter: 'SHOW_ALL',
 counter: 6
}

let store = createStore(
  todoApp,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('reduxStore', JSON.stringify(state));
})

render(
  <Root store={store} />,
  document.getElementById('root')
)