import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //! Configuration des alias de chemin
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  //! Configuration du proxy
  server: {
    proxy: {
      '/path': {
        target: 'https://api.github.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/path/, '')
      },

      '/api1': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api1/, '')
      }
    }
  }
})
