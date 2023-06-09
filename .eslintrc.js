module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error','single'],
    semi: ['error','always'],
    'quote-props': ['error', 'as-needed'],
    'react/prop-types': 'off'
  }
};
