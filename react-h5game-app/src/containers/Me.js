import React, { Component } from 'react';
import Login from '../constants/Login';

class Me extends Component {
    componentWillMount(){
        Login();
    }
    render() {
        return (
            <div>登陆</div>
        );
    }
}

export default Me;