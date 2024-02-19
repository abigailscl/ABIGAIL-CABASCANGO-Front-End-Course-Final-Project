/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: ['ecuaphotos-market/src'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  ransform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['ecuaphotos-market/src'],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: 'jsdom',
};
