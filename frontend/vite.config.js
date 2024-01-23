/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const api = process.env.VITE_API_URL;
const port = 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: port,
    proxy: {
      "/api": {
        target: api,
        changeOrigin: true,
      },
    },
  },
});
