import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );
    }
}

Button.contextTypes = {
    color: PropTypes.string
};

class Message extends Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class MessageList extends Component {
    getChildContext() {
        return {color: "purple"};
    }

    render() {
        const children = this.props.messages.map((message) => 
            <Message text={message.text} />
        );
        return <div>{children}</div>
    }
}

MessageList.childContextTypes = {
    color: PropTypes.string
};