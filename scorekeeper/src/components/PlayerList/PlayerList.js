import React from 'react';
import Player from '../Player/Player';
import './PlayerList.css';

const PlayerList = (props) => {
    return (
        <ul className='PlayerList'>
            {props.players.map((player, i) => (
                <Player
                    key={i}
                    name={player.name}
                    score={player.score}
                    onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
                    onPlayerDelete={() => props.onPlayerDelete(i)}
                />)
            )}
        </ul>
    )
};

export default PlayerList;