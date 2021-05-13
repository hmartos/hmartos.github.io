import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as Icon, IconProps } from './Icon';

export default {
    title: 'Catalog/Icon',
    component: Icon,
    argTypes: {},
} as Meta;

const Component: Story<IconProps> = args => <Icon {...args}></Icon>;

export const Default = args => <Component {...args} />;
