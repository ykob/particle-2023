import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        nested: resolve(__dirname, "src/nested/index.html"),
      },
    },
  },
  publicDir: "../public/",
  root: "src",
  server: {
    host: true,
  },
});
