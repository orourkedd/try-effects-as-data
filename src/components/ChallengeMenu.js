import React, { Component } from 'react';
import './ChallengeMenu.css';

class ChallengeMenu extends Component {
  render() {
    const { actions, challenges } = this.props;
    const { challenge } = challenges;

    const list = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

    return (
      <nav className="ChallengeMenu row navbar navbar-light bg-faded navbar-toggleable-md mb-4">
        <ul className="navbar-nav">
          <li className="nav-item">
            <span className="nav-link">Challenges:</span>
          </li>
          {list.map((name) => {
            return (
              <li key={name} className="nav-item">
                <a className={`nav-link ${challenge.key === name ? 'active' : ''}`} onClick={() => actions.loadChallenge(name)}>{ name }</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default ChallengeMenu;
