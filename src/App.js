import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import PlayerTable from './components/table/PlayerTable';
import { connect } from 'react-redux';
import AddPlayer from './components/forms/AddPlayer';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    players: PropTypes.object.isRequired
  }

  render() {
    let { players } = this.props;
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddPlayer />
          <hr/>
          <br/>
          <PlayerTable
            tableHeading="ALL-TIME TOURNAMENT EARNINGS"
            rowHeadings={['#', 'Player', 'Winnings', 'Native Of']}
            players={players}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps)(App);
