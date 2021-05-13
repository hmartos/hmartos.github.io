import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as SocialMedia, SocialMediaProps } from './SocialMedia';

export default {
    title: 'Catalog/SocialMedia',
    component: SocialMedia,
    argTypes: {},
} as Meta;

const Component: Story<SocialMediaProps> = args => <SocialMedia {...args}></SocialMedia>;

export const Default = args => <Component {...args} />;
