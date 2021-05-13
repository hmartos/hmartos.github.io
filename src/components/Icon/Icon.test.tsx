import React from 'react';
import { shallow, mount } from 'enzyme';
import Icon from './Icon';

describe('Icon default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the Icon component correctly', () => {
        const wrapper = shallow(<Icon></Icon>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<Icon {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
