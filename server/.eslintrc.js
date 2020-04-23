// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {},
  env: {
    node: true
  },
  extends: [
    'eslint-config-egg',
    'standard'
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  ],
  // required to lint *.vue files
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'spaced-comment': ['error', 'always'],
    'comma-dangle': ["error", "never"],
    'semi': ["error", "never"],
    'no-return-await': 'off',

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}