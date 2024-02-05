module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@next/next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.project.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint', 'prettier', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/adjacent-overload-signatures': 'warn',
        '@typescript-eslint/array-type': [
          'warn',
          {
            default: 'array-simple',
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'all',
            ignoreRestSiblings: false,
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: true,
            variables: false,
            typedefs: true,
          },
        ],
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': [
          'error',
          {
            ignoreConditionalTests: false,
            ignoreMixedLogicalExpressions: false,
          },
        ],
        eqeqeq: ['error', 'always'],
      },
    },
    {
      files: ['**/*.stories.ts', '**/*.stories.tsx'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'next',
                importNames: ['GetStaticProps', 'GetStaticPropsContext'],
                message: 'Use `@lib/next/getStaticProps` instead.',
              },
              {
                name: 'next',
                importNames: ['GetServerSideProps', 'GetServerSidePropsContext'],
                message: 'Use `@lib/next/getServerSideProps` instead.',
              },
              {
                name: 'next/dist/client/router',
                message: 'Use `next/router` instead.',
              },
              {
                name: 'next-i18next/serverSideTranslations',
                importNames: ['serverSideTranslations'],
                message: 'Use `@core/i18n/serverSideTranslations`',
              },
              {
                name: 'next-i18next',
                importNames: ['useTranslation'],
                message: 'Use `@core/i18n/useTranslation`',
              },
              {
                name: 'next/image',
                importNames: ['Image', 'NextImage'],
                message: 'Use `@core/common/components/NextImage/NextImage` instead',
              },
              {
                name: 'next/image',
                importNames: ['ImageProps', 'NextImageProps'],
                message:
                  'Use NextImageProps from `@core/common/components/NextImage/NextImage` instead',
              },
              {
                name: 'next/image',
                importNames: ['ImageLoader', 'NextImageLoader'],
                message:
                  'Use NextImage component from `@core/common/components/NextImage/NextImage` instead',
              },
              {
                name: 'next/error',
                importNames: ['default'],
                message: 'Use custom Error in pages/_error.tsx instead',
              },
            ],
            patterns: ['next/dist/*'],
          },
        ],
      },
    },
  ],
}
