import React from 'react';
import Player from '../Player/Player';
import PlayerList from './PlayerList';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const players = [
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
    ];
    shallow(<PlayerList players={players} />);
});

it('renders the right amount of players', () => {
    const players = [
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
    ];

    const playerComponent = shallow(<PlayerList players={players} />);

    // console.log(playerComponent.debug());
    
    const expectedPlayersNumber = playerComponent.find(Player).length;
    
    expect(expectedPlayersNumber).toEqual(3);
    
});

it('registers clicks', () => {
    const players = [
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

    const mockedOnScoreUpdate = jest.fn();

    const playerComponent = shallow(<PlayerList players={players} onScoreUpdate={mockedOnScoreUpdate} />);

    const firstPlayer = playerComponent.find(Player).first();

    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');

    onPlayerScoreChange(10);

    expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
})