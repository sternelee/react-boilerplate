import { observer } from 'mobx-react';
import { Button } from 'antd';
// import './todo.css';
import { types, onSnapshot } from "mobx-state-tree";

 
const Todo = types.model("Todo", {
    title: types.string,
    done: false
}).actions(self => ({
    toggle() {
        self.done = !self.done
    }
}))
 
const Store = types.model("Store", {
    todos: types.array(Todo),
    newTodo: types.string,
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

export default observer(() => (
    <div>
        <h1>ToDo app</h1>
        <ul>
            {store.todos.map((v, i) => <li key={i} className={v.done ? 'on' : ''}><span  onClick={() => store.toggle(i)}>{v.title}</span><Button onClick={() => store.remove(i)}>x</Button></li>)}
        </ul>
        <input type="text" value={store.newTodo} onChange={e => store.UpdateTodo(e.target.value) } /><Button onClick={() => store.add()}>Add</Button>
        <style jsx>{`
            li.on{color: #e61010}
            li button{margin-left: 10px}
        `}</style>
    </div>
))