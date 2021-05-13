import React from 'react';
import { shallow, mount } from 'enzyme';
import Avatar from './Avatar';

describe('Avatar default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the Avatar component correctly', () => {
        const wrapper = shallow(<Avatar></Avatar>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<Avatar {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
