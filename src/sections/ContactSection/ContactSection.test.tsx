import React from 'react';
import { shallow, mount } from 'enzyme';
import ContactSection from './ContactSection';

describe('ContactSection default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the ContactSection component correctly', () => {
        const wrapper = shallow(<ContactSection></ContactSection>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<ContactSection {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
