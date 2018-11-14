import React from 'react';
import Login from './Login';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import reducer from '../../reducers';

const store = createStore(reducer);

it('renders correctly', () => {
    const tree = renderer
        .create(<Login store={store} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});