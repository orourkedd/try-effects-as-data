import { testIt } from 'effects-as-data/test';
import { failure } from 'effects-as-data';

const key = 'six';

const description = `It is important to handle failure in your application.  Because effects-as-data normalizes all values, *it will never throw an exception*.  It will catch any exception that occurs during the handling of an action, normalize it to a failure object, and return it back to your function:

\`\`\`
{
  success: false,
  error: {
    message: 'the error message',
    stack: '...'
  }
}
\`\`\`

This pattern is similar to how \`golang\` handles errors.  It is helpful because it remove a dimension of complexity from your code, namely, exception-driven control flow.

The spec below tests that when a failure is returned from the handling of the \`getLocal\` action created by \`getProfile()\`, it is returned from the function.
`;

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
