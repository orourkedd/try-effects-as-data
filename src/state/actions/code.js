export function setCode (src) {
  return {
    type: 'setCode',
    src
  }
}

export function setOutput (output) {
  return {
    type: 'setOutput',
    output
  }
}
