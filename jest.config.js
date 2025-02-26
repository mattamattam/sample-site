export default {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transform: {
      "^.+\\.(ts|tsx)$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
  };
  