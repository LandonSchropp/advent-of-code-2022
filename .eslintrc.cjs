module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [ "@typescript-eslint" ],
  extends: [ "@landonschropp", "plugin:@typescript-eslint/recommended" ],
  env: {
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "warn"
  }
};
