import React, { Component } from 'react';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { types as t, onSnapshot } from 'mobx-state-tree';


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
    name: t.string
})
 
// create an instance from a snapshot
const store = Store.create({ 
    todos: [{
        title: "Get coffee"
    }],
    name: "React"})
 
// listen to new snapshots
onSnapshot(store, (snapshot) => {
    console.dir(snapshot)
})
 
// invoke action that modifies the tree
store.todos[0].toggle()
// prints: `{ todos: [{ title: "Get coffee", done: true }]}`

// store.name = "Mobx-State-Tree";

@observer
class MobxApp extends Component {
    render() {
        const { todos } = store;
        const _todos = toJS(todos);
        console.log(_todos);
        return (
            <div>
                <h2>I Love Mobx</h2>
                <p>{store.name}</p>
                {/* {
                    _todos.map(v => <p>{v}</p>)
                } */}
            </div>
        )
    }
}

export default MobxApp;