import React from 'react';
import Dashboard from './Dashboard';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import reducer from '../../reducers';

const store = createStore(reducer);

it('renders correctly', () => {
    const tree = renderer
        .create(<Dashboard store={store} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
