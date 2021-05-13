import React from 'react';
import { shallow, mount } from 'enzyme';
import CybersecuritySection from './CybersecuritySection';

describe('CybersecuritySection default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the CybersecuritySection component correctly', () => {
        const wrapper = shallow(<CybersecuritySection></CybersecuritySection>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<CybersecuritySection {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
