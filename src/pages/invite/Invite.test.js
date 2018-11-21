import React from 'react';
import Invite from './Invite';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import reducer from '../../reducers';

const store = createStore(reducer);

it('renders correctly', () => {
    const tree = renderer
        .create(<Invite store={store} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});