import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  setupFilesAfterEnv: [ "<rootDir>/test/jest.setup.js" ]
};

export default config;
