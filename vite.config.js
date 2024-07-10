import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v2': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        pathRewrite: { '^/api/v2': '/api/v2' },
      },
    },
  },
  plugins: [react()],
})
