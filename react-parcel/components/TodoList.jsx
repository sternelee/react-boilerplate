import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    const store = this.props.store;
    return (
      <ul>
        {store.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onClick={() => store.toggleTodo(index)} />
        )}
      </ul>
    )
  }
}
