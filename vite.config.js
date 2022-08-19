import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@layouts": path.resolve(__dirname, "./src/pages/layouts"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@actions": path.resolve(__dirname, "./src/store/actions"),
      "@slices": path.resolve(__dirname, "./src/store/slices"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
})
