import React from 'react';
import { shallow, mount } from 'enzyme';
import FeaturedStories from './FeaturedStories';

describe('FeaturedStories default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the FeaturedStories component correctly', () => {
        const wrapper = shallow(<FeaturedStories></FeaturedStories>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<FeaturedStories {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
