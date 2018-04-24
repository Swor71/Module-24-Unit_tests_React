import React, { Component } from 'react';
import './App.css';
import PlayerList from './components/PlayerList/PlayerList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: 'Player one',
          score: 21
        },
        {
          name: 'Player two',
          score: 12
        },
        {
          name: 'Player three',
          score: 32
        }
      ]
    }
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return {...player, score: player.score + scoreChange}
        }
        return player;
      })
    })
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }

  onPlayerDelete = (playerIndex) => {
    this.setState({
      players: this.state.players.filter((player, index) => {
        return playerIndex !== index
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayerList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerDelete={this.onPlayerDelete} />
      </div>
    );
  }
}

export default App;
