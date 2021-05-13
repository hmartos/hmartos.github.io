import React from 'react';
import { shallow, mount } from 'enzyme';
import ProjectsSection from './ProjectsSection';

describe('ProjectsSection default tests', () => {
    const componentProps = {
        className: 'testClass',
        style: { margin: '16px' },
    };
    it('Should render the ProjectsSection component correctly', () => {
        const wrapper = shallow(<ProjectsSection></ProjectsSection>);
        expect(wrapper).toMatchSnapshot();
    });

    const wrapped = mount(<ProjectsSection {...componentProps} />);
    Object.keys(componentProps).forEach(prop => {
        it(`Should receive ${prop} prop`, () => {
            if (prop === 'className') expect(wrapped.prop(prop)).toContain(componentProps[prop]);
            else expect(wrapped.prop(prop)).toEqual(componentProps[prop]);
        });
    });
});
