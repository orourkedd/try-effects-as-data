import { testIt } from 'effects-as-data/test';

const key = 'four';

const description = "Write the updated profile back to local storage and then return the updated profile.  Use the `setLocal` action (see the spec).";

const code = `function * challengeFour ({ username }) {
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

const answer = `function * challengeFour ({ username }) {
  const profileResult = yield {
    type: 'getLocal',
    key: \`profile:\${username}\`
  };
  const profile = profileResult.payload;
  const profile2 = merge(profile, {
    fullName: \`\${profile.firstName} \${profile.lastName}\`
  });
  yield {
    type: 'setLocal',
    key: \`profile:\${username}\`,
    payload: profile2
  };
  return profile2;
}`;

const suiteDisplay = `test('It should add a fullName field to the profile, write it to local storage, and return it', testIt(challengeFour, () => {
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
