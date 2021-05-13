import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as ContactSection, ContactSectionProps } from './ContactSection';

export default {
    title: 'Catalog/ContactSection',
    component: ContactSection,
    argTypes: {},
} as Meta;

const Component: Story<ContactSectionProps> = args => <ContactSection {...args}></ContactSection>;

export const Default = args => <Component {...args} />;
