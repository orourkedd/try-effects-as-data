import { testIt } from 'effects-as-data/test';
import { failure } from 'effects-as-data';

const key = 'six';

const description = "Handling failure.";

const code = `function * challengeSix ({ username }) {
  const profile1 = yield getProfile(username);
  const profile2 = addFullNameToProfile(profile1.payload);
  yield setProfile(username, profile2);
  return profile2;
}`;

const answer = `function * challengeSix ({ username }) {
  const profile1 = yield getProfile(username);
  if (isFailure(profile1)) return profile1;
  const profile2 = addFullNameToProfile(profile1.payload);
  yield setProfile(username, profile2);
  return profile2;
}`;

const suiteDisplay = `test('It should return a getProfile failure', testIt(challengeSix, () => {
  return [
    [{ username: 'foo' }, { type: 'getLocal', key: 'profile:foo' }],
    [failure('Failed to read from local storage.'), failure('Failed to read from local storage.')]
  ];
});`;

const suite = (fn) => {
  const s1 = testIt(fn, () => {
    return [
      [{ username: 'foo' }, { type: 'getLocal', key: 'profile:foo' }],
      [failure('Failed to read from local storage.'), failure('Failed to read from local storage.')]
    ];
  });
  const t1 = ['It should return a getProfile failure', s1];

  return [t1];
}

export default {
  key,
  description,
  code,
  answer,
  suiteDisplay,
  suite
}
