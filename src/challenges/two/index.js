import { testIt } from 'effects-as-data/test';
import { success } from 'effects-as-data';

const key = 'two';

const description = "Read the profile from local storage and return it.";

const code = `function * challengeTwo ({ username }) {
  return null;
}`;

const answer = `function * challengeTwo ({ username }) {
  const profile = yield { type: 'getLocal', key: \`profile:\${username}\` };
  return profile.payload;
}`;

const suiteDisplay = `test('It should return the users profile cached in local storage', testIt(challengeOne, () => {
  const profile = {
    username: 'foo',
    age: 30,
    email: 'foo@bar.com',
    firstName: 'Foo',
    lastName: 'Bar'
  };
  return [
    [{ username: 'foo' }, { type: 'getLocal', key: 'profile:foo' }],
    [profile, profile]
  ];
});`;

const suite = (fn) => {
  const s1 = testIt(fn, () => {
    const profile = {
      username: 'foo',
      age: 30,
      email: 'foo@bar.com',
      firstName: 'Foo',
      lastName: 'Bar'
    };
    return [
      [{ username: 'foo' }, { type: 'getLocal', key: 'profile:foo' }],
      [profile, profile]
    ];
  });
  const t1 = ['It should return the users profile cached in local storage', s1];

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
