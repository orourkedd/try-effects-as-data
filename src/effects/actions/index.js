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

export function runSpecs (suite, fn) {
  return {
    type: 'runSpecs',
    suite,
    fn
  }
}

export function reduxGetState () {
  return {
    type: 'reduxGetState'
  }
}
