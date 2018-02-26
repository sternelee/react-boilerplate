import {
    observable,
    computed,
    action
} from "mobx";

import TodoModel from "./TodoModel";

export default class TodoListModel {
    @observable todos = [];

    @computed
    get unfinishedTodoCount() {
      return this.todos.filter(todo => !todo.finished).length;
    }

    @action
    addTodo(text) {
      this.todos.push(new TodoModel(text));
    }

    toggleTodo(index) {
      this.todos[index].finished = !this.todos[index].finished;
    }
}