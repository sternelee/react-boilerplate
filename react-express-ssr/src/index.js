import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux'
import App from './App';
import configureStore from './store/configureStore';
const store = configureStore();
const AppBundle = (
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
);
window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            AppBundle,
            document.getElementById('root')
        );
    });
};