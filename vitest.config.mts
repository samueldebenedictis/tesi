import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    dir: "tests/vitest",
    environment: "jsdom",
    coverage: {
      all: false,
      provider: "istanbul",
      reporter: ["text", "json", "html", "json-summary"],
    },
  },
});
