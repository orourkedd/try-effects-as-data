import challenges from '../../challenges';
import { reduxDispatch } from '../actions';
import redux from '../../state/actions';

export function * loadChallenge (challengeName) {
  const challenge = challenges[challengeName];
  const setChallengeReduxAction = redux.setChallenge(challenge);
  yield reduxDispatch(setChallengeReduxAction);
  const setCodeReduxAction = redux.setCode(challenge.code);
  yield reduxDispatch(setCodeReduxAction);
}
