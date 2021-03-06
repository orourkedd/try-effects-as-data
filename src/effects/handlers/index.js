import { mergeAll } from 'ramda';
import * as localStorageHandlers from './local-storage';
import * as evalCodeHandlers from './eval-code';
import * as specHandlers from './run-specs';
import buildReduxHandlers from './redux';

export default (store) => {
  const reduxHandlers = buildReduxHandlers(store);
  return mergeAll([
    localStorageHandlers,
    evalCodeHandlers,
    reduxHandlers,
    specHandlers
  ]);
}
