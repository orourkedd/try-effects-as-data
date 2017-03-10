import { testIt } from 'effects-as-data/test';
import { success } from 'effects-as-data';

const key = 'five';

const description = "Let's do some refactoring.  The code below does exactly the same thing but is using pure function helpers instead of creating inline JSON objects.  The spec should pass without an additional work; it is here to demonstate a best-practice for working with actions.";

const code = `function * challengeFive ({ username }) {
  const profile1 = yield getProfile(username);
  const profile2 = addFullNameToProfile(profile1.payload);
  yield setProfile(username, profile2);
  return profile2;
}`;

const answer = `function * challengeFive ({ username }) {
  const profile1 = yield getProfile(username);
  const profile2 = addFullNameToProfile(profile1.payload);
  yield setProfile(username, profile2);
  return profile2;
}`;

const suiteDisplay = `test('It should add a fullName field to the profile, write it to local storage, and return it', testIt(challengeFive, () => {
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
    [null, expectedProfile]
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
      [null, expectedProfile]
    ];
  });
  const t1 = ['It should add a fullName field to the profile, write it to local storage, and return it', s1];

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
