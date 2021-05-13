import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as DevSection, DevSectionProps } from './DevSection';

export default {
    title: 'Catalog/DevSection',
    component: DevSection,
    argTypes: {},
} as Meta;

const Component: Story<DevSectionProps> = args => <DevSection {...args}></DevSection>;

export const Default = args => <Component {...args} />;
