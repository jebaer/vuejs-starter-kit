module.exports = {
    verbose: true,
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '.*\\.(vue)$': 'vue-jest',
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/components/*.{js,vue}',
        'src/views/*.{js,vue}',
        '!**/node_modules/**',
    ],
    coverageReporters: ['html', 'text-summary'],
    globals: {
        'vue-jest': {
            experimentalCSSCompile: true,
        },
    },
    moduleNameMapper: {
        '^Components/(.*)$': '<rootDir>/src/components/$1',
        '^Mixins/(.*)$': '<rootDir>/src/mixins/$1',
        '^Router/(.*)$': '<rootDir>/src/router/$1',
        '^Store/(.*)$': '<rootDir>/src/store/$1',
        '^Views/(.*)$': '<rootDir>/src/views/$1',
    },
};
