module.exports = {
  roots: [
    "<rootDir>/src",
  ],
  testRegex: "((\\.|/)(spec))\\.(t|j)sx?$",
  moduleDirectories: [
    "node_modules",
  ],
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
  ],
  reporters: [
    'default',
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.json$": "<rootDir>/jest/jsonTransform.js",
    "^.+\\.scss$": "<rootDir>/jest/cssTransform.js",
    "^.+\\.css$": "<rootDir>/jest/cssTransform.js",
    "^.+\\.sass$": "<rootDir>/jest/cssTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
  ],
  moduleNameMapper: {
    "\\.scss": "<rootDir>/jest/fileMock.js",
    "\\.css": "<rootDir>/jest/fileMock.js",
    "\\.sass": "<rootDir>/jest/fileMock.js",
    "\\.svg": "<rootDir>/jest/fileMock.js",
    "^~([^\/]+.*)": "<rootDir>/src/modules/$1",
    "^~\/(.*)": "<rootDir>/src/$1",
  },
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
  ],
};
