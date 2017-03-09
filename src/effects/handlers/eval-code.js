import { run as eRun } from 'effects-as-data';

export function evalCode ({ src }) {
  const run = eRun;
  const handlers = require('./local-storage');
  return eval(src);
}
