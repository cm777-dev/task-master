import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/taskmaster/',  // Replace with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
