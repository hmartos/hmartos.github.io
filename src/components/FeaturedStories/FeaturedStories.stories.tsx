import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as FeaturedStories, FeaturedStoriesProps } from './FeaturedStories';

export default {
    title: 'Catalog/FeaturedStories',
    component: FeaturedStories,
    argTypes: {},
} as Meta;

const Component: Story<FeaturedStoriesProps> = args => <FeaturedStories {...args}></FeaturedStories>;

export const Default = args => <Component {...args} />;
