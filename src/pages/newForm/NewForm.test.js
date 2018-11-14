import React from 'react';
import NewForm from './NewForm';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import reducer from '../../reducers';
import { mount } from 'enzyme';
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
    // const tree = renderer
    //     .create(<NewForm store={store} />);
    const wrapper = mount(<NewForm store={store} />);


    let createItemBtn = wrapper.find('#novo-btn')

    console.log(createItemBtn);
    createItemBtn.simulate('click');
    expect(wrapper.state().fields.length).to.equal(1)

    /* expect(wrapper.find('.clicks-0').length).to.equal(1);
    wrapper.find('a').simulate('click');
    expect(wrapper.find('.clicks-1').length).to.equal(1);
 */
    // console.log(tree.toJSON().props)
})


