import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import StaticCode from './StaticCode';
import './Code.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

class Code extends Component {
  runOnCmdEnter (e) {
    const { runCode } = this.props.actions;
    const { code } = this.props;

    if (e.which === 13 && e.metaKey) {
      this.props.actions.runCode(code.src);
    }
  }

  render() {
    const { runCode, setCode } = this.props.actions;
    const { challenges, code } = this.props;
    const { challenge } = challenges;

    return (
      <div className="Code" onKeyDown={this.runOnCmdEnter.bind(this)}>
        {/*<StaticCode />*/}
        <p>{challenge.description}</p>
        <CodeMirror value={code.src} onChange={setCode} />
        <CodeMirror value={challenge.suiteDisplay} />
        <a onClick={() => runCode(challenge.code)}>Run</a>
        <a onClick={() => setCode(challenge.answer)}>Show Answer</a>
      </div>
    );
  }
}

export default Code;
