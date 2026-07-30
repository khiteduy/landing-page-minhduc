import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  // SPA fallback: mọi 404 đều trả index.html để React Router xử lý
  server: {
    historyApiFallback: true,
  },
})
