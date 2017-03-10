import './App.css';
import React, { Component } from 'react';
import Code from './Code';
import Output from './Output';
import ChallengeMenu from './ChallengeMenu';

class App extends Component {
  render() {
    const { actions, code, challenges } = this.props;

    return (
      <div className="App container-fluid">
        <ChallengeMenu actions={actions} challenges={challenges} />
        <div className="container-fluid">
          <div className="row">
            <Code actions={actions} code={code} challenges={challenges} />
          </div>
          <div className="row">
            <div className="col-12">
              <Output code={code} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
