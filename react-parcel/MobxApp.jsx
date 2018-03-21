import React, { Component } from 'react';
import { toJS } from 'mobx';
import { Button, Table } from 'antd';
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
    state = {
        dataSource:[{
            key: '0',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '1',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }]
    }
    addCow() {
        const { dataSource } = this.state;
        this.setState({
            dataSource: [...dataSource, { key: dataSource.length.toString(), name: 'sterne', age: 30, address: 'Xunlei'}]
        })
    }
    render() {
        const { todos } = store;
        const _todos = toJS(todos);
        console.log(_.isArray(_todos), _todos);
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            }];
        return (
            <div>
                <ul>
                    {store.todos.map((v, i) => <li key={i} className={v.done ? 'on' : ''}><span  onClick={() => store.toggle(i)}>{v.title}</span><Button onClick={() => store.remove(i)}>x</Button></li>)}
                </ul>
                <input type="text" value={store.newTodo} onChange={e => store.UpdateTodo(e.target.value) } /><Button onClick={() => store.add()}>Add</Button>

                <p/>
                <Table dataSource={this.state.dataSource} columns={columns} />
                <Button type="primary" onClick={() => this.addCow()}>Add加一条记录</Button>
            </div>
        )
    }
}

export default MobxApp;