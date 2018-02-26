import { observable } from "mobx";

export default class TodoModel {
    id = Math.random();
    @observable text;
    @observable completed = false;

    constructor(text) {
      this.text = text;
    }
}