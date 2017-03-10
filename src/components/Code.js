import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import StaticCode from './StaticCode';
import './Code.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import marked from 'marked';

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

    const description = marked(challenge.description || '');

    return (
      <div className="Code col-12 mb-2" onKeyDown={this.runOnCmdEnter.bind(this)}>
      { /*<StaticCode /> */ }
        <div className="row">
          <p className="col-12" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="row mb-2">
          <div className="col-5">
            <h2 className="h5">Code</h2>
            <CodeMirror value={code.src} onChange={setCode} />
          </div>
          <div className="col-7">
            <h2 className="h5">Spec</h2>
            <CodeMirror value={challenge.suiteDisplay} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a onClick={() => runCode(code.src)} className="btn btn-outline-success mr-1 my-2 my-sm-0">Run Code</a>
            <a onClick={() => setCode(challenge.answer)} className="btn btn-outline-danger my-2 my-sm-0">See Answer</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Code;
