import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as Skills, SkillsProps } from './Skills';

export default {
    title: 'Catalog/Skills',
    component: Skills,
    argTypes: {},
} as Meta;

const Component: Story<SkillsProps> = args => <Skills {...args}></Skills>;

export const Default = args => <Component {...args} />;
