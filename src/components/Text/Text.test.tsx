import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

describe('Text default tests', () => {
    it('Should render the Text Component correctly', () => {
        const wrapper = shallow(
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil facere rem ipsa.</Text>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('It renders in tag', () => {
        (['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span', 'label', 'small'] as Array<any>).forEach(tag => {
            const wrapper = shallow(<Text tag={tag} />);
            expect(wrapper.find(tag).exists()).toBeTruthy();
        });
    });

    it('It renders in typo', () => {
        (['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span', 'label', 'xxl', 'xl', 'small', 'small-xs'] as Array<any>).forEach(
            typo => {
                const wrapper = shallow(<Text typo={typo} />);
                expect(wrapper.prop('className')).toContain(typo);
            }
        );
    });

    it('It renders in color', () => {
        (['white', 'black', 'gray-light'] as Array<any>).forEach(color => {
            const wrapper = shallow(<Text color={color} />);
            expect(wrapper.prop('className')).toContain(color);
        });
    });

    it('It renders in align', () => {
        (['left', 'center', 'right'] as Array<any>).forEach(align => {
            const wrapper = shallow(<Text align={align} />);
            expect(wrapper.prop('className')).toContain(align);
        });
    });

    it('it renders the size correctly', () => {
        const fontSizes = [8, 10, 12, 14, 16, 20, 24, 30, 36, 40, 48, 60];
        fontSizes.forEach(size => {
            const wrapper = shallow(<Text size={size} />);
            expect(wrapper.prop('className')).toContain(`fs${size}`);
        });
    });

    it('It renders in capitalize', () => {
        const wrapper = shallow(<Text capitalize />);
        expect(wrapper.prop('className')).toContain('capitalize');
    });

    it('It renders in uppercase', () => {
        const wrapper = shallow(<Text uppercase />);
        expect(wrapper.prop('className')).toContain('uppercase');
    });

    it('It renders in underline', () => {
        const wrapper = shallow(<Text underline />);
        expect(wrapper.prop('className')).toContain('underline');
    });

    it('It renders in italic', () => {
        const wrapper = shallow(<Text italic />);
        expect(wrapper.prop('className')).toContain('italic');
    });

    it('It renders in ellipsis', () => {
        const wrapper = shallow(<Text ellipsis />);
        expect(wrapper.prop('className')).toContain('ellipsis');
    });
});
