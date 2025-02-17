import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build"
  },
  server: {
    proxy: {
      "/api": {
        target: "https://ukraine.bellingcat.com/ukraine-server",
        changeOrigin: true,
      }
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.js",
    passWithNoTests: true
  },
});
