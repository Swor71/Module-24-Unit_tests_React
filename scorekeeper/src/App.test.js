import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import PlayerList from './components/PlayerList/PlayerList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import Player from './components/Player/Player';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player\'s score', () => {
  const appComponent = shallow(<App />);

  const players = [
    {
      name: 'Roberto',
      score: 3
    }
  ];

  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayerList).prop('onScoreUpdate');

  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state().players;

  playersAfterUpdate[0].score
});

it('adds a player', () => {
  const appComponent = shallow(<App />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Tom');

  const players = appComponent.state('players');

  expect(players.length).toEqual(4);
  expect(players[3].name).toEqual('Tom');
  expect(players[3].score).toEqual(0);
});

it("should delete player from app state", () => {
  const app = mount(<App />);
  const player = app.find(Player).first();
  const onPlayerDelete = player.find(".Player__button_delete");
  onPlayerDelete.simulate("click");

  const players = app.state("players");

  expect(players.length).toEqual(2);
  console.log(players);
});