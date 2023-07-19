module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'], // enforce semicolons
        'max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true,
                ignoreStrings: true,
            },
        ],
        'no-unused-vars': 'off', // this should be on but it has too many errors
        'function-call-argument-newline': ['error', 'consistent'],
        'no-undef': 'off', // this should be on but it has too many errors
        'prefer-const': 'off', // this should be on but it has too many errors
        'space-infix-ops': 'error',
        indent: [
            'error',
            4,
            {
                SwitchCase: 0,
            },
        ],
        'eol-last': ['error', 'always'],
    },
};
