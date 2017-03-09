export function setCode (src) {
  return {
    type: 'setCode',
    src
  }
}

export function setSpec (src) {
  return {
    type: 'setSpec',
    src
  }
}

export function setAnswer (src) {
  return {
    type: 'setAnswer',
    src
  }
}

export function setOutput (output) {
  return {
    type: 'setOutput',
    output
  }
}
