import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // server: {
  //   //open: '/docs/index.html',
  //   // proxy: {
  //   //   // string shorthand
  //   //   '/foo': 'http://localhost:5173',
  //   //   // with options
  //   //   // '/api': {
  //   //   //   target: 'http://jsonplaceholder.typicode.com',
  //   //   //   changeOrigin: true,
  //   //   //   rewrite: (path) => path.replace(/^\/api/, '')
  //   //   },
  // }
})
