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
      <section>
        <h1 className="h5">Spec Output</h1>
        <OutputComponent output={output} />
      </section>
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
  const formatted = JSON.stringify(output.payload, true, 2);
  return (
    <div className="Output output-success">
      <pre>{ formatted }</pre>
    </div>
  );
}

export default Output;
