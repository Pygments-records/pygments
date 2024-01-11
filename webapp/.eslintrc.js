module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.project.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'prettier', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // Add your own project-specific rules here, or override the rules from the extended configs
    'prettier/prettier': 'off',
    'react/react-in-jsx-scope': 'off',
    // 'react/prop-types': 'off', // Disable prop-types check as we're using TypeScript
    // '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types
    // 'unused-imports/no-unused-imports': 'error', // Enable detection of unused imports
    // 'unused-imports/no-unused-vars': 'error', // Enable detection of unused variables
  },
  overrides: [
    {
      files: ['**/*.stories.tsx'], // Apply specific rules to Storybook files
      rules: {
        'react/prop-types': 'off', // Disable prop-types check in Storybook stories
      },
    },
  ],
}
