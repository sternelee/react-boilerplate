import React, { Component } from 'react';
// ┳┻|
// ┻┳|
// ┳┻|
// ┻┳|
// ┳┻| _
// ┻┳| •.•) I think ReactJS is the future.
// ┳┻|⊂ﾉ 
// ┻┳|
// LEE

/*\r\n *┳┻| _\r\n * ┻┳| •.•) @Author: {author} \r\n ┳┻|⊂ﾉ * @Date: {createTime} \r\n * ┻┳| @Last Modified by:   {lastModifiedBy} \r\n * @Last Modified time: {updateTime} \r\n */\r\n



/*\r\n * @Author: {author} \r\n * @Date: {createTime} \r\n * @Last Modified by:   {lastModifiedBy} \r\n * @Last Modified time: {updateTime} \r\n */\r\n


"/*\r\n * ┻┳| \r\n * ┳┻| _     @Author: {author} \r\n * ┻┳| •.•)  @Date: {createTime} \r\n * ┳┻|⊂ﾉ     @Last Modified by:   {lastModifiedBy} \r\n * ┻┳|      @Last Modified time: {updateTime} \r\n */\r\n",

class flavorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'cocount'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                
                </label>
            </form>
        )
    }
}