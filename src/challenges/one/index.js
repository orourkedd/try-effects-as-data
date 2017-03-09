import { testIt } from 'effects-as-data/test';
import { success } from 'effects-as-data';

const key = 'one';

const description = 'Let\'s start with something easy.  Return the username from the function.';

const code = `function * challengeOne ({ username }) {
  return null;
}`;

const answer = `function * challengeOne ({ username }) {
  return username;
}`;

const suiteDisplay = `test('It should return the username', testIt(challengeOne, () => {
  return [
    [{ username: 'foo' }, 'foo']
  ];
});`;

function suite (fn) {
  const s1 = testIt(fn, () => {
    return [
      [{ username: 'foo' }, 'foo']
    ];
  });
  const t1 = ['It should return the username', s1];

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
