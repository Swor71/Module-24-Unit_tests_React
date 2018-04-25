import React from 'react';
import './Player.css';

const Player = (props) => {
    return <li className="Player">
        <div className='Player__details'>
          <span className="Player__name">Name: {props.name}</span>
          <span className="Player__score">Score: {props.score}</span>
        </div>
        <div className="Buttons">
          <button className="Player__button_plus" id='btn' onClick={() => props.onPlayerScoreChange(1)}>
            +
          </button>
          <button className="Player__button_minus" id='btn' onClick={() => props.onPlayerScoreChange(-1)}>
            -
          </button>
          <button className='Player__button_delete' id='btn' onClick={() => props.onPlayerDelete()}>Delete</button>
        </div>
      </li>;
}

export default Player;