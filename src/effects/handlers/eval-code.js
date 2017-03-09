import ead from 'effects-as-data';
import R from 'ramda';

export function evalCode ({ src }) {
  const { run, isFailure } = ead;
  const handlers = require('./local-storage');
  const merge = R.merge;

  function getProfile (username) {
    return {
      type: 'getLocal',
      key: `profile:${username}`
    }
  }

  function setProfile (username, payload) {
    return {
      type: 'setLocal',
      key: `profile:${username}`,
      payload
    }
  }

  function addFullNameToProfile (profile) {
    return merge(profile, {
      fullName: `${profile.firstName} ${profile.lastName}`
    });
  }

  return eval(`(function() { return ${src} })()`);
}
