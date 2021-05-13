import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as Link, LinkProps } from './Link';

export default {
    title: 'Catalog/Link',
    component: Link,
    argTypes: {},
} as Meta;

const Component: Story<LinkProps> = args => <Link {...args}></Link>;

export const Default = args => <Component {...args} />;
