const path = require('path');

module.exports = {
  preset: 'jest-puppeteer',
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  testTimeout: 60000,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    __DEV__: true,
    'ts-jest': {
      diagnostics: false,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    },
  },
};
