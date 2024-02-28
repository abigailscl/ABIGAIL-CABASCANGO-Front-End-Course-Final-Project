/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  setupFilesAfterEnv: ['./test/setupTests.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  modulePaths: ['ecuaphotos-market/src'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
};
