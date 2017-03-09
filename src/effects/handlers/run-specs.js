import { map } from 'ramda';
import { failure, success } from 'effects-as-data';
import { testIt } from 'effects-as-data/test';
import challenges from '../../challenges';

export function runSpecs ({ suite, fn }) {
  const suiteFn = challenges[suite].suite(fn);
  const wrapped = map(wrapSpec, suiteFn);
  const results = map(w => w(), wrapped);
  return results;
}

function wrapSpec ([desc, f]) {
  return function () {
    try {
      f();
      return [desc, success()];
    } catch (e) {
      return [desc, failure(e)];
    }
  }
}
