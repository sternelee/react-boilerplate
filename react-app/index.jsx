import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hammer from 'react-hammerjs';

class App extends Component {
    handleTap(e) {
        console.log(e)
    }
    handleSwipe(e) {
        console.log(e)
    }
    render() {
        return (
            <div className="app">
                <Hammer onTap={this.handleTap.bind(this)} onSwipe={this.handleSwipe.bind(this)}><h1>哈哈</h1></Hammer>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))