const { merge } = require('ramda');

const initialState = {
  src: '',
  spec: '',
  output: {}
};

function code (state = initialState, action = {}) {
  switch (action.type) {
    case 'setCode':
      return merge(state, { src: action.src });

    case 'setSpec':
      return merge(state, { spec: action.src });

    case 'setAnswer':
      return merge(state, { answer: action.src });

    case 'setOutput':
      return merge(state, { output: action.output });
  }
  return state;
}

export default code;
