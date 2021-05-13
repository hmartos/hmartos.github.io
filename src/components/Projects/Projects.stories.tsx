import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as Projects, ProjectsProps } from './Projects';

export default {
    title: 'Catalog/Projects',
    component: Projects,
    argTypes: {},
} as Meta;

const Component: Story<ProjectsProps> = args => <Projects {...args}></Projects>;

export const Default = args => <Component {...args} />;
