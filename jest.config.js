module.exports = {
    preset: 'jest-preset-angular',
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
