export function evalCode (src) {
  return {
    type: 'evalCode',
    src
  }
}

export function getLocal (key) {
  return {
    type: 'getLocal',
    key
  }
}

export function reduxDispatch (reduxAction) {
  return {
    type: 'reduxDispatch',
    reduxAction
  }
}
