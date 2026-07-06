import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative paths so the build works at any URL (GitHub Pages subpath, Vercel, local file server).
  base: "./",
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      // Keep Vite's defaults and block the source resume PDF from ever being served.
      deny: [".env", ".env.*", "*.{crt,pem}", "**/*.pdf"],
    },
  },
});
