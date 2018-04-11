import React from 'react';
import Player from './Player';
import { shallow } from 'enzyme';

it('renders w/o crashing', () => {
    shallow(<Player />);
});

it('renders correct name', () => {
    const playerNamePassed = 'Tomek';
    const playerComponent = shallow(<Player name={playerNamePassed} />);

    const playerNameRendered = playerComponent.find('.Player__name').text();

    expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
    const playerScorePassed = 21;
    const playerComponent = shallow(<Player score={playerScorePassed} />);

    const playerScoreRendered = Number(playerComponent.find('.Player__score').text());

    expect(playerScoreRendered).toEqual(playerScorePassed);
});

it('renders a callback on plus button', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
    
    const plusButton = playerComponent.find('.Player__button_plus');
    plusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('renders a callback on minus button', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    const plusButton = playerComponent.find('.Player__button_minus');
    plusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});