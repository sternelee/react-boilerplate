import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import {MobxRouter, RouterStore, startRouter} from 'mobx-router';
import views from './appstore/views';

import './appstore/styles/main.styl';

//example mobx store
const store = {
	app: {
		title: 'MobX Router Example App',
		user: null
	},
	//here's how we can plug the routerStore into our store
	router: new RouterStore()
};
  
startRouter(views, store);

ReactDOM.render(
  <Provider store={store}>
  	<MobxRouter/>
  </Provider>, document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}