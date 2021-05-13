import React from 'react';
import { shallow, mount } from 'enzyme';
import SocialMedia from './SocialMedia';

describe('SocialMedia default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the SocialMedia component correctly', () => {
        const wrapper = shallow(<SocialMedia></SocialMedia>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<SocialMedia {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
