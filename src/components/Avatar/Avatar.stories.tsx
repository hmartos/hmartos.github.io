import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as Avatar, AvatarProps } from './Avatar';

export default {
    title: 'Catalog/Avatar',
    component: Avatar,
    argTypes: {},
} as Meta;

const Component: Story<AvatarProps> = args => <Avatar {...args}></Avatar>;

export const Default = args => <Component {...args} />;
