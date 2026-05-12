import { defineConfig } from "vite";
import path from 'path'

export default defineConfig({
  // Show a full-screen error overlay in the browser whenever
  // there is a JavaScript error — students see problems immediately.
  server: {
    overlay: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
