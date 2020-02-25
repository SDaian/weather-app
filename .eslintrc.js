module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true
      }
    ],
    'react/jsx-filename-extension': 'off',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': 'warn',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false }
    ]
  }
};
