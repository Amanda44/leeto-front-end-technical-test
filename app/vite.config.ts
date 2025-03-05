import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    name: "tests",
    globals: true,
    setupFiles: ["src/utils/tests/vitest-setup.ts"],
    environment: "jsdom",
  },
});
