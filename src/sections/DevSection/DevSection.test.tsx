import React from 'react';
import { shallow, mount } from 'enzyme';
import DevSection from './DevSection';

describe('DevSection default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the DevSection component correctly', () => {
        const wrapper = shallow(<DevSection></DevSection>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<DevSection {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
