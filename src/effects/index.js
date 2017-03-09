import { toPairs, fromPairs, map, pipe } from 'ramda';
import buildHandlers from './handlers';
import functions from './functions';
import { run } from 'effects-as-data';

export default (store) => {
  const handlers = buildHandlers(store);
  
  const promisifyPair = ([name, fn]) => {
    const pFn = function (payload) {
      return run(handlers, fn, payload, { name, onFailure: console.error });
    };

    return [name, pFn];
  };

  const promisifyPairs = map(promisifyPair);
  const promisifiedFunctions = pipe(toPairs, promisifyPairs, fromPairs)(functions);

  return promisifiedFunctions;
};
