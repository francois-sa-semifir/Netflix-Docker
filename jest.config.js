const { createCjsPreset } = require('jest-preset-angular');

const jestPreset = createCjsPreset();

module.exports = {
    ...jestPreset,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    collectCoverageFrom: [
        'src/app/**/*.ts',
        '!src/app/**/*.module.ts',
        '!src/main.ts'
    ]
};
