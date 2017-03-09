import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './state/containers/App';
import localStore from 'store';
import users from './seed/users';
import actions from './state/actions';
import createStore from './state/store';
import buildFunctions from './effects';

const store = createStore();

const functions = buildFunctions(store);

//  Set seed data
localStore.set('users', users);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

functions.loadChallenge('one');
