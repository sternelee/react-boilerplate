import React, { Component } from 'react';
import { toJS } from 'mobx';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import { types as t, onSnapshot } from 'mobx-state-tree';
import shortid from 'shortid';
import _ from 'lodash';
import 'antd/dist/antd.css';

const Todo = t.model("Todo", {
    title: t.string,
    done: false
}).actions(self => ({
    toggle() {
        self.done = !self.done
    }
}))
 
const Store = t.model("Store", {
    todos: t.array(Todo),
    newTodo: t.string,
}).actions(self => ({
    toggle(i) {
        self.todos[i].toggle()
    },
    UpdateTodo(val) {
        self.newTodo = val
    },
    add() {
        self.todos.push({title: self.newTodo});
        self.newTodo = ''
    },
    remove(i) {
        self.todos.splice(i, 1);
    }
}))
 
// create an instance from a snapshot
const store = Store.create({ 
    todos: [{
        title: "Get coffee"
    }],
    newTodo: ''
})
 
// listen to new snapshots
onSnapshot(store, (snapshot) => {
    console.dir(snapshot)
})
 

// invoke action that modifies the tree
store.todos[0].toggle()
// prints: `{ todos: [{ title: "Get coffee", done: true }]}`

// store.name = "Mobx-State-Tree";

// console.log(a);

console.log(shortid.seed(12))
@observer
class MobxApp extends Component {
    render() {
        const { todos } = store;
        const _todos = toJS(todos);
        // console.log(_.isArray(_todos), _todos);
        return (
            <div>
            <ul>
            {store.todos.map((v, i) => <li key={i} className={v.done ? 'on' : ''}><span  onClick={() => store.toggle(i)}>{v.title}</span><Button onClick={() => store.remove(i)}>x</Button></li>)}
        </ul>
        <input type="text" value={store.newTodo} onChange={e => store.UpdateTodo(e.target.value) } /><Button onClick={() => store.add()}>Add</Button>
            </div>
        )
    }
}

export default MobxApp;