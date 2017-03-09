import store from 'store';

export function getLocal({ key }) {
  return store.get(key);
}
