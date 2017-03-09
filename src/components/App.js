import React, { Component } from 'react';
import Code from './Code';
import Output from './Output';
import './App.css';

class App extends Component {
  render() {
    const { actions, code } = this.props;

    return (
      <div className="App">
        <Code actions={actions} code={code} />
        <Output code={code} />
      </div>
    );
  }
}

export default App;
