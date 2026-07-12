import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Three.js core (~600KB)
          three: ["three"],
          // React Three Fiber + Drei (~300KB)
          "r3f-core": ["@react-three/fiber", "@react-three/drei"],
          // Rapier physics engine - includes WASM (~1.5MB)
          "r3f-rapier": ["@react-three/rapier"],
          // Postprocessing effects
          "r3f-postprocessing": ["@react-three/postprocessing"],
          // GSAP animation library
          gsap: ["gsap"],
          // React core
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
});
