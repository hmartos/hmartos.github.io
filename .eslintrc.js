module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['react-app'],
    rules: {
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'el'] }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-anonymous-default-export': 'off',
        'linebreak-style': 'off',
        'no-tabs': 'off',
        'object-curly-spacing': ['error', 'always'],
        'max-len': [
            'error',
            {
                comments: 180,
                code: 180,
            },
        ],
        'comma-dangle': ['error', 'only-multiline'],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            files: [
                '**/*.spec.js',
                'src/utils/tests/*.js',
                'src/api/mock/endpoints/__mocks__/*.js',
                'src/lang/__mocks__/*.js',
            ],
            rules: { 'import/no-extraneous-dependencies': 'off', 'no-debugger': 'off', 'no-console': 'off' },
            env: { jest: true },
        },
    ],
};
