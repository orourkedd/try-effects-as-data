import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './state/containers/App';
import localStore from 'store';
import users from './seed/users';
import actions from './state/actions';
import createStore from './state/store';

const store = createStore();

//  Set seed data
localStore.set('users', users);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

const code = `//  Start Editing Here
function * learning1 ({ username }) {
  const s1 = yield { type: 'getLocal', key: 'users' };
  return s1;
}

//  Run the effects as data function with the argument 'orourkedd'
run(handlers, learning1, { username: 'orourkedd' });`

store.dispatch(actions.setCode(code));
