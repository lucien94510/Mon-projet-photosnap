import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        stories: resolve(__dirname, "src/stories/stories.html"),
        features: resolve(__dirname, "src/features/features.html"),
        pricing: resolve(__dirname, "src/pricing/pricing.html"),
      },
    },
  },
});
