import { testIt } from 'effects-as-data/test';
import { success } from 'effects-as-data';

const key = 'three';

const description = "Add a `fullName` field to the profile before it is returned.  The `fullName` field should be a value composed of `firstName` and `lastName` with a space between.  You have access to ramda's `merge()` function for this challenge so you don't have to mutate `profile`.";

const code = `function * challengeThree ({ username }) {
  const profile = yield {
    type: 'getLocal',
    key: \`profile:\${username}\`
  };
  return profile.payload;
}`;

const answer = `function * challengeThree ({ username }) {
  const profileResult = yield {
    type: 'getLocal',
    key: \`profile:\${username}\`
  };
  const profile = profileResult.payload;
  const profile2 = merge(profile, {
    fullName: \`\${profile.firstName} \${profile.lastName}\`
  });
  return profile2;
}`;

const suiteDisplay = `test('It should add a fullName field to the profile and return it', testIt(challengeThree, () => {
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
    [profileFromLocalStorage, expectedProfile]
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
      [profileFromLocalStorage, expectedProfile]
    ];
  });
  const t1 = ['It should add a fullName field to the profile and return it', s1];

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
