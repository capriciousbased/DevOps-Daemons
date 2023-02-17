module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/src"],
    testMatch: ["**/__tests__/**/*.test.{js,jsx,ts,tsx}"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov", "html"],
    reporters: [
        "default",
        ["jest-junit", { outputDirectory: "test-reports/jest", outputName: "junit.xml" }],
      ],
  };
  