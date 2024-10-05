import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: true, // Allows access from local network
  },
  build: {
    outDir: 'dist', // Make sure the build output goes to the correct directory
  },
})
