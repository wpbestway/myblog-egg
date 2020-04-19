// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    $: true,
    jQuery: true
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/strongly-recommended',
    'eslint-config-egg',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'spaced-comment': ['error', 'always'],
    'comma-dangle': ["error", "never"],
    'semi': ["error", "never"],

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // vue eslint rules, to see -> https://eslint.vuejs.org/rules/
        // require or disallow a space before tag's closing brackets
        'vue/html-closing-bracket-newline': [
          'error',
          {
            singleline: 'never',
            multiline: 'always'
          }
        ],
        // enforce the maximum number of attributes per line
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: 3
          }
        ],

        // Disallow variable declarations from shadowing variables declared in the outer scope
        'vue/no-template-shadow': 'off',

        'vue/require-prop-types': 'off',

        // Require a line break before and after the contents of a singleline element
        // eslint-plugin-vue version requires at least 5.0.0 or above
        'vue/singleline-html-element-content-newline': [
          'error',
          {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true,
            ignores: ['pre', 'textarea', 'i']
          }
        ],

        // Enforce consistent indentation in <template>
        'vue/html-indent': [
          'error',
          2,
          {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
          }
        ],

        // Enforce self-closing style
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
              normal: 'never',
              component: 'always'
            },
            svg: 'always',
            math: 'always'
          }
        ],

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
      }
    }
  ]
};
