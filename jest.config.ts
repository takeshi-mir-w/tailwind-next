import { defaults } from "jest-config";
import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tests/tsconfig.json",
    },
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  testEnvironment: "jsdom",
  verbose: true,
};

export default config;
