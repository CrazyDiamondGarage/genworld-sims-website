import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hacker-gpt-website/",
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    //rollupOptions: {
    //  input: 'src/index.html'
    //},
    outDir: "build",
  },
  optimizeDeps: {},
});
