module.exports = {
    testEnvironment: 'jsdom', // For React testing (browser-like environment)
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['./jest.setup.js'], // Optional: for additional setup (e.g., Enzyme)
  };
  