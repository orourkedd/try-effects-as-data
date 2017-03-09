import {
  evalCode,
  runSpecs,
  reduxDispatch,
  reduxGetState
} from '../actions';
import redux from '../../state/actions';

export function * runCode (src) {
  const s1 = yield evalCode(src);
  const fn = s1.payload;
  const state = yield reduxGetState();
  const s2 = yield runSpecs(state.payload.challenges.challenge.key, fn);
  const reduxAction = redux.setOutput(s2);
  yield reduxDispatch(reduxAction);
  return s1;
}
