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
})
