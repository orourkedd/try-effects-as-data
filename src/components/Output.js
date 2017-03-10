import React, { Component } from 'react';
import './Output.css';
import { isFailure } from 'effects-as-data';

class Output extends Component {
  render() {
    const { code } = this.props;
    const { output } = code;
    const outputList = output.payload || [];
    return (
      <section>
        {outputList.map((output) => {
          const OutputComponent = isFailure(output[1]) ? OutputFailure : OutputSuccess;
          return <OutputComponent key={output[0]} output={output} />;
        })}
      </section>
    );
  }
}

function OutputFailure ({ output }) {
  const [description, theFailure] = output; //  eslint-disable-line

  const message1 = theFailure.error.message;
  const message2 = message1.replace(' deepEqual ', ' does not equal: ');

  return (
    <div className="Output output-failure">
      <p>{ theFailure.error.name }</p>
      <pre>{ message2 }</pre>
    </div>
  );
}

function OutputSuccess ({ output }) {
  const [description, payload] = output; //  eslint-disable-line
  return (
    <div className="Output output-success">
      <p>Success! Use the navigation above to go to the next challenge.</p>
    </div>
  );
}

export default Output;
