import React from 'react';

import CamperList from './CamperList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: 'recent',
    };
  }

  getList() {
    if (this.state.currentList === 'recent') {
      return this.props.recent;
    }
    return this.props.alltime;
  }

  render() {
    return (
      <div>
        <header>
          <h1>FCC Leaderboard</h1>
        </header>
        <main>
          <CamperList
            list = { this.getList() }
          />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  alltime: React.PropTypes.array,
  recent: React.PropTypes.array,
};
