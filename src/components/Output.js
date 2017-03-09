import React, { Component } from 'react';
import Code from './Code';
import './Output.css';
import { isFailure } from 'effects-as-data';

class Output extends Component {
  render() {
    const { code } = this.props;
    const { output } = code;
    const OutputComponent = isFailure(output) ? OutputFailure : OutputSuccess;

    return (
      <div>
        <h1>Output</h1>
        <OutputComponent output={output} />
      </div>
    );
  }
}

function OutputFailure ({ output }) {
  return (
    <div className="Output output-failure">
      <pre>
      { output.error.message }
      </pre>
    </div>
  );
}

function OutputSuccess ({ output }) {
  console.log(output)
  const formatted = JSON.stringify(output.payload, true, 2);
  return (
    <div className="Output output-success">
      <pre>{ formatted }</pre>
    </div>
  );
}

export default Output;
