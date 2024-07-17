import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v2': {
        target: 'https://urbandenapi.onrender.com',
        changeOrigin: true,
        pathRewrite: { '^/api/v2': '/api/v2' },
      },
    },
  },
  plugins: [react()],
  build: {
    outDir: 'build',
    proxy: {
      '/api/v2': {
        target: 'https://urbandenapi.onrender.com', // Replace with your API server URL
        changeOrigin: true,
        pathRewrite: { '^/api/v2': '/api/v2' },
      },
    },
  },

})
