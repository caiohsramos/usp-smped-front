import React from 'react';
import Form from './Form';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import reducer from '../../reducers';

const store = createStore(reducer);

it('renders correctly', () => {
    const tree = renderer
        .create(<Form store={store} params={{id: 'mock'}} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});