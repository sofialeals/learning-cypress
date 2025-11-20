import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      Object.assign(config.env, process.env);

      return config;
    },
  },
});