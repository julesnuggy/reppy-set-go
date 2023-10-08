module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['prettier', 'react-refresh'],
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src'
        ],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    },
    react: {
      version: 'detect'
    }
  }
}
