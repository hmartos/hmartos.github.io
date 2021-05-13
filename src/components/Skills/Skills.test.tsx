import React from 'react';
import { shallow, mount } from 'enzyme';
import Skills from './Skills';

describe('Skills default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the Skills component correctly', () => {
        const wrapper = shallow(<Skills></Skills>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<Skills {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
