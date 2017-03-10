import { testIt } from 'effects-as-data/test';

const key = 'one';

const description = `The spec below is logic-less (notice there are no assertions).  Each effects-as-data spec tests a complete code path through the function.

The first element in the array \`[0, 0]\` represents the first input to the function, the function arguments.  The second element \`[0, 1]\` represents the first output.  This function has only 1 input output pair and, therefore, has only 1 \`[input, output]\` tuple.

Note that most functions have a series of \`[input, ouput]\` tuples.

Let\'s start with something easy.  Return the username from the function.`;

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
