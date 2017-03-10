import { testIt } from 'effects-as-data/test';
import { success } from 'effects-as-data';

const key = 'two';

const description = `Let's doing something more challenging: read a user profile from local storage and return it.
With effects-as-data your code never actually touches localStorage or any other side-effect producing thing.  Your code creates an action, sends it to effects-as-data using the \`yield\` keyword, and effects-as-data routes it to a handler.  Handlers do the dirty work of interacting with localStorage, http, etc, for you and sends the result back to effects-as-data, which then sends the result back to your function.

Actions are required to have one field: \`type\`.  The \`type\` corresponds to the name of the handler.  Look at this example action:

\`\`\`
{
  type: 'httpGet',
  url: 'http://www.example.com/api/v1/users'
}
\`\`\`

Before effects-as-data sends the result back from the handler, it will normalize the value.  If the handler is successful, you will get an object shaped like this:

\`\`\`
{
  success: true,
  payload: 'the reponse from the handler.  For example, the value from local storage.'
}
\`\`\`

It it fails, you'll get this:

\`\`\`
{
  success: false,
  error: {
    message: 'the error message',
    stack: '...'
  }
}
\`\`\`

Your task here is to create an action for the \`getLocal\` handler (see the spec), get the user profile, and return it.
`;

const code = `function * challengeTwo ({ username }) {
  return null;
}`;

const answer = `function * challengeTwo ({ username }) {
  const profile = yield {
    type: 'getLocal',
    key: \`profile:\${username}\`
  };
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
