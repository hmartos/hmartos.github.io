import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as CybersecuritySection, CybersecuritySectionProps } from './CybersecuritySection';

export default {
    title: 'Catalog/CybersecuritySection',
    component: CybersecuritySection,
    argTypes: {},
} as Meta;

const Component: Story<CybersecuritySectionProps> = args => <CybersecuritySection {...args}></CybersecuritySection>;

export const Default = args => <Component {...args} />;
