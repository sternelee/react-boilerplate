import React, { Component } from 'react';
import logo from './logo.svg';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

class AppModal extends Component {
  componentWillUnmount = () => {
    console.log(1)
  }
  render() {
    return (
      <div>
        哈哈哈哈
      </div>
    )
  }
}

class App extends Component {
  state = {
    visible: false
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    console.log('点击了确定');
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log('关闭')
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary" onClick={this.showModal}>显示对话框</Button>
        <Modal title="第一个 Modal" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          {this.state.visible ? <AppModal /> : null}
        </Modal>
      </div>
    );
  }
}

export default App;
