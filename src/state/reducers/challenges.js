const { merge } = require('ramda');

const initialState = {
  challenge: {}
};

function challenges (state = initialState, action = {}) {
  switch (action.type) {
    case 'setChallenge':
      return merge(state, { challenge: action.challenge });

    default:
      return state;
  }
}

export default challenges;
