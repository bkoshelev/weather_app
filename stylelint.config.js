module.exports = {
  plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features', 'stylelint-a11y'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-a11y/recommended',
    'stylelint-config-recommended',
    'stylelint-config-css-modules',
  ],
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
};
