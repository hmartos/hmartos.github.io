import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as Text, TextProps } from './Text';

const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span', 'label', 'small'];
const colors = ['white', 'black', 'gray-light'];
const aligns = ['left', 'center', 'right'];
const scales = Array.from({ length: 10 }).map((i, n) => 0.5 * (n + 1));

export default {
    title: 'Catalog/Text',
    component: Text,
    argTypes: {
        tag: {
            control: {
                type: 'select',
                options: tags,
            },
        },
        typo: {
            control: {
                type: 'select',
                options: tags,
            },
        },
        color: {
            control: {
                type: 'select',
                options: colors,
            },
        },
        align: {
            control: {
                type: 'select',
                options: aligns,
            },
        },
        capitalize: {
            control: 'boolean',
        },
        uppercase: {
            control: 'boolean',
        },
        underline: {
            control: 'boolean',
        },
        italic: {
            control: 'boolean',
        },
        ellipsis: {
            control: 'boolean',
        },
    },
} as Meta;

const Component: Story<TextProps> = ({ children, ...args }) => <Text {...args}>{children}</Text>;

export const Default = args =>
    tags.map((tag, index) => (
        <>
            <Component {...args} tag={tag} typo={tag} key={`text-${index}`}>
                {tag} - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Component>
            <br />
        </>
    ));

export const Scale = args =>
    scales.map((scale, index) => (
        <Component {...args} scale={scale} key={`text-${index}`}>
            {scale} - Lorem Ipsum is simply
        </Component>
    ));

export const Colors = args =>
    colors.map((color, index) => (
        <Component {...args} color={color} key={`text-${index}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Component>
    ));

export const Aligns = args =>
    aligns.map((align, index) => (
        <Component {...args} align={align} key={`text-${index}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Component>
    ));

export const Capitalize = args => (
    <Component {...args} capitalize>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Component>
);

export const Uppercase = args => (
    <Component {...args} uppercase>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Component>
);

export const Underline = args => (
    <Component {...args} underline>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Component>
);

export const Italic = args => (
    <Component {...args} italic>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Component>
);

export const Ellipsis = args => (
    <Component {...args} ellipsis style={{ width: '200px' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Component>
);
