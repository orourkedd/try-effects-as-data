import { evalCode, reduxDispatch } from '../actions';
import redux from '../../state/actions';

export function * runCode (src) {
  const s1 = yield evalCode(src);
  const reduxAction = redux.setOutput(s1);
  yield reduxDispatch(reduxAction);
  return s1;
}
