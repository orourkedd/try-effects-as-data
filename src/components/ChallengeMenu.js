import React, { Component } from 'react';
import './ChallengeMenu.css';

class ChallengeMenu extends Component {
  render() {
    const { actions } = this.props;

    return (
      <div className="ChallengeMenu">
        <a onClick={() => actions.loadChallenge('one')}>One</a>
        <a onClick={() => actions.loadChallenge('two')}>Two</a>
        <a onClick={() => actions.loadChallenge('three')}>Three</a>
        <a onClick={() => actions.loadChallenge('four')}>Four</a>
        <a onClick={() => actions.loadChallenge('five')}>Five</a>
        <a onClick={() => actions.loadChallenge('six')}>Six</a>
        <a onClick={() => actions.loadChallenge('seven')}>Seven</a>
      </div>
    );
  }
}

export default ChallengeMenu;
