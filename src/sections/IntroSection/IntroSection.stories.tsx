import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as IntroSection, IntroSectionProps } from './IntroSection';

export default {
    title: 'Catalog/IntroSection',
    component: IntroSection,
    argTypes: {},
} as Meta;

const Component: Story<IntroSectionProps> = args => <IntroSection {...args}></IntroSection>;

export const Default = args => <Component {...args} />;
