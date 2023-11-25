module.exports = {
  // The root of your project directory
  rootDir: ".",

  // A list of file extensions your modules use
  moduleFileExtensions: ["js", "jsx", "json", "node"],

  // Setup Babel to handle JavaScript files
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  // Ignore specific modules in node_modules from Babel transformations
  transformIgnorePatterns: ["/node_modules/(?!(my-es6-module)/)"],

  // Enable ES6 modules support
  testEnvironment: "node",
  globals: {
    NODE_ENV: "test",
  },

  // Optional: Configure Jest to run specific test files or folders
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',

  // Optional: Set up Jest coverage reporting
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.js'],
  // coverageReporters: ['lcov', 'text'],
};
