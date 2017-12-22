import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import './index.css';
import './App.css';

// import Routers from './containers/Routers';

// import Reducers from './reducers';
// const store = createStore(Reducers);

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
    document.getElementById('root'));
registerServiceWorker();
