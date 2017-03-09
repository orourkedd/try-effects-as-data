import './App.css';
import React, { Component } from 'react';
import Code from './Code';
import Output from './Output';
import ChallengeMenu from './ChallengeMenu';

class App extends Component {
  render() {
    const { actions, code, challenges } = this.props;

    return (
      <div className="App">
        <ChallengeMenu actions={actions} />
        <Code actions={actions} code={code} challenges={challenges} />
        <Output code={code} />
      </div>
    );
  }
}

export default App;
