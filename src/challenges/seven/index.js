import { testIt } from 'effects-as-data/test';
import { failure } from 'effects-as-data';

const key = 'seven';

const description = "Let's also handle the failure from `setProfile`:";

const code = `function * challengeSeven ({ username }) {
  const profile1 = yield getProfile(username);
  if (isFailure(profile1)) return profile1;
  const profile2 = addFullNameToProfile(profile1.payload);
  yield setProfile(username, profile2);
  return profile2;
}`;

const answer = `function * challengeSeven ({ username }) {
  const profile1 = yield getProfile(username);
  if (isFailure(profile1)) return profile1;
  const profile2 = addFullNameToProfile(profile1.payload);
  const setResult = yield setProfile(username, profile2);
  if (isFailure(setResult)) return setResult;
  return profile2;
}`;

const suiteDisplay = `test('It should return a setProfile failure', testIt(challengeSeven, () => {
  const profileFromLocalStorage = {
    username: 'foo',
    age: 30,
    email: 'foo@bar.com',
    firstName: 'Foo',
    lastName: 'Bar'
  };

  const expectedProfile = {
    username: 'foo',
    age: 30,
    email: 'foo@bar.com',
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  };

  return [
    [{ username: 'foo' }, { type: 'getLocal', key: 'profile:foo' }],
    [profileFromLocalStorage, { type: 'setLocal', key: 'profile:foo', payload: expectedProfile }],
    [failure('Failed to write to local storage.'), failure('Failed to write to local storage.')]
  ];
});`;

const suite = (fn) => {
  const s1 = testIt(fn, () => {
    const profileFromLocalStorage = {
      username: 'foo',
      age: 30,
      email: 'foo@bar.com',
      firstName: 'Foo',
      lastName: 'Bar'
    };

    const expectedProfile = {
      username: 'foo',
      age: 30,
      email: 'foo@bar.com',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
    };

    return [
      [{ username: 'foo' }, { type: 'getLocal', key: 'profile:foo' }],
      [profileFromLocalStorage, { type: 'setLocal', key: 'profile:foo', payload: expectedProfile }],
      [failure('Failed to write to local storage.'), failure('Failed to write to local storage.')]
    ];
  });
  const t1 = ['It should return a setProfile failure', s1];

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
