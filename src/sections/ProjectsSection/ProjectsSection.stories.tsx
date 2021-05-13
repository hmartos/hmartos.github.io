import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as ProjectsSection, ProjectsSectionProps } from './ProjectsSection';

export default {
    title: 'Catalog/ProjectsSection',
    component: ProjectsSection,
    argTypes: {},
} as Meta;

const Component: Story<ProjectsSectionProps> = args => <ProjectsSection {...args}></ProjectsSection>;

export const Default = args => <Component {...args} />;
