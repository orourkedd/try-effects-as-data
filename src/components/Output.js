import React, { Component } from 'react';
import Code from './Code';
import './App.css';

class Output extends Component {
  render() {
    const { code } = this.props;

    return (
      <div className="Output">
        { JSON.stringify(code.output) }
      </div>
    );
  }
}

export default Output;
