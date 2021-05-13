import { addParameters } from '@storybook/react';
import theme from './theme';

addParameters({
    options: {
        theme,
    },
});

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};
