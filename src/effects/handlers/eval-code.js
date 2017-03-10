import ead from 'effects-as-data';
import R from 'ramda';

export function evalCode ({ src }) {
  const { run, isFailure } = ead; //  eslint-disable-line
  const handlers = require('./local-storage'); //  eslint-disable-line
  const merge = R.merge; //  eslint-disable-line

  function getProfile (username) { //  eslint-disable-line
    return {
      type: 'getLocal',
      key: `profile:${username}`
    }
  }

  function setProfile (username, payload) { //  eslint-disable-line
    return {
      type: 'setLocal',
      key: `profile:${username}`,
      payload
    }
  }

  function addFullNameToProfile (profile) { //  eslint-disable-line
    return merge(profile, {
      fullName: `${profile.firstName} ${profile.lastName}`
    });
  }

  return eval(`(function() { return ${src} })()`); //  eslint-disable-line
}
