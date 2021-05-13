import React from 'react';
import { shallow, mount } from 'enzyme';
import Projects from './Projects';

describe('Projects default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the Projects component correctly', () => {
        const wrapper = shallow(<Projects></Projects>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<Projects {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
