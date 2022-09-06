module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    'test.ts?$': 'ts-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
}
