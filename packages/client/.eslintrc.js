module.exports = {
  root: false,
  extends: [
    '../../.eslintrc.js',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error','single'],
    semi: ['error','always'],
    'quote-props': ['error', 'as-needed'],
    'react/prop-types': 'off'
  },
  ignorePatterns: ['dist'],
};
