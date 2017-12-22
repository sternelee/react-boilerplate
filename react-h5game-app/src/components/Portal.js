import React from 'react';
import ReactDOM from 'react-dom';

const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

class parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    }
}