import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // next.config.ts と .env を読み込むためのパス
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "node",
  moduleNameMapper: {
    // @/* のパスエイリアスと、既存の .js 拡張子つきインポートの両方を解決する
    "^@/(.*)$": "<rootDir>/src/$1",
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};

export default createJestConfig(customJestConfig);
