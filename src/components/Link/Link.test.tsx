import React from 'react';
import { shallow, mount } from 'enzyme';
import Link from './Link';

describe('Link default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the Link component correctly', () => {
        const wrapper = shallow(<Link></Link>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<Link {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
