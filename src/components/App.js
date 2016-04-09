import React from 'react';
import autobind from 'autobind-decorator';

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

  @autobind;
  switchList() {
    if (this.state.currentList === 'recent') {
      this.setState({
        currentList: 'alltime'
      });
    } else {
      this.setState({
        currentList: 'recent'
      });
    }
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
            switchList = { this.switchList }
            currentList = { this.state.currentList }
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
