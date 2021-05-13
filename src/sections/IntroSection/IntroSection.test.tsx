import React from 'react';
import { shallow, mount } from 'enzyme';
import IntroSection from './IntroSection';

describe('IntroSection default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the IntroSection component correctly', () => {
        const wrapper = shallow(<IntroSection></IntroSection>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<IntroSection {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
