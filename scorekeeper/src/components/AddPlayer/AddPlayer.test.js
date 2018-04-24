import React from 'react';
import AddPlayer from './AddPlayer';
import { shallow, mount } from 'enzyme';

it('should render correctly', () => {
    shallow(<AddPlayer />);
});

it('should render correct name from onPlayerAdd', () => {
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
    const nameInput = addPlayerComponent.find('input').first().getDOMNode();

    nameInput.value = 'Tom';

    const form = addPlayerComponent.find('form');
    form.simulate('submit');

    expect(onPlayerAdd).toBeCalledWith('Tom');
})