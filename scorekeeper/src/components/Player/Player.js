import React from 'react';
import './Player.css';

const Player = (props) => {
    return <li className="Player">
        <div className='Player__details'>
          <span className="Player__name">Name: {props.name}</span>
          <span className="Player__score">Score: {props.score}</span>
        </div>
        <div className="Buttons">
          <span className="Player__button_plus" onClick={() => props.onPlayerScoreChange(1)}>
            +
          </span>
          <span className="Player__button_minus" onClick={() => props.onPlayerScoreChange(-1)}>
            -
          </span>
          <button className='Player__button_delete' onClick={() => props.onPlayerDelete()}>Delete</button>
        </div>
      </li>;
}

export default Player;