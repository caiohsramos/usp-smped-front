import React from 'react';
import NewForm from './NewForm';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import reducer from '../../reducers';
import { mount, shallow, simulate } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const store = createStore(reducer);
Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const tree = renderer
        .create(<NewForm store={store} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render one form field when click new field button', () => {
    // To understand the next line, see this:
    // https://github.com/airbnb/enzyme/issues/431
    const wrapper = mount(shallow(<NewForm store={store} />).get(0));
    let createItemBtn = wrapper.find('#novo-btn').hostNodes();
    createItemBtn.simulate('click');
    createItemBtn.simulate('click');
    let fieldsSize = wrapper.state().fields.length
    expect(fieldsSize).toBe(2);
})
