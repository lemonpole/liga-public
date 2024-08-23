/**
 * Vite configuration file.
 *
 * @see https://vitejs.dev/config/
 * @module
 */
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * Exports this module.
 *
 * @exports
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@liga": path.resolve(__dirname, "./src"),
      "package.json": path.resolve(__dirname, "package.json"),
    },
  },
});
