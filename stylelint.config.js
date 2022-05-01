module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss'
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'indentation': 2,
    'max-empty-lines': 2,
    'block-no-empty': null,
    'selector-type-no-unknown': null,
    'selector-pseudo-element-no-unknown': null,
    'rule-empty-line-before': [
      'always-multi-line', {
        'except': ['first-nested'],
        'ignore': ['after-comment', 'inside-block']
      }
    ],
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': [
      'always', {
        ignoreAtRules: ['if', 'else']
      }
    ],
    'at-rule-empty-line-before': null,
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',
    'color-named': [
      'never', {
        ignore: ['inside-function']
      }
    ],
    'font-weight-notation': 'numeric',
    'order/properties-alphabetical-order': true,
    'declaration-empty-line-before': 'never',
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'function-comma-newline-after': null,
    'value-keyword-case': null,
    'no-invalid-position-at-import-rule': null,
    'selector-id-pattern': null,
    'property-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,
    'scss/at-rule-no-unknown': null,
    'scss/no-global-function-names': null,
    'selector-class-pattern': null,
    'function-no-unknown': null
  }
}
