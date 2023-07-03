module.exports = {
  plugins: [
    './node_modules/prettier-plugin-multiline-arrays',
  ],
  multilineArraysWrapThreshold: 3,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 100,
  useTabs: false,
  arrowParens: 'always',
  overrides: [
    {
      files: [
        './.eslintrc.js',
        './tsconfig.json',
        './tsconfig.paths.json',
      ],
      options: {
        multilineArraysWrapThreshold: 2,
      },
    },
  ],
}
