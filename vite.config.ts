import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // base: '/Lebo-Kharafu/',
  base: '/',
  plugins: [vue(),vueDevTools(),],
  define: {
    __VUE_PROD_DEVTOOLS__: false,
  },
})
