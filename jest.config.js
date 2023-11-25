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
  transformIgnorePatterns: [
    "/node_modules/(?!(@mdx-js/mdx|vfile|vfile-message|unist-util-stringify-position|markdown-extensions|devlop|remark-mdx|mdast-util-mdx|mdast-util-mdx-expression|mdast-util-mdx-jsx)/)",
  ],

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
