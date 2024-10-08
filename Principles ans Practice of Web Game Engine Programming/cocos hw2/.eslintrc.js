module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'airbnb-base', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-underscore-dangle': 'off',
        'no-shadow': 'off',
        'no-console': 'off',
        'no-unused-vars': 'off',
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        'no-await-in-loop': 'off',
        'no-constant-condition': 'off',
        'no-continue': 'off',
        'no-loop-func': 'off',
        'no-dupe-class-members': 'off',
        'no-unused-expressions': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'no-promise-executor-return': 'off',
        'no-empty-function': 'off',
        'import/no-unresolved': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'prefer-destructuring': ['error', { object: true, array: false }],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    },
    globals: {
        cc: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts'],
            },
        },
    },
};
