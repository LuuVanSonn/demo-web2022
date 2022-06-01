const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detail: resolve(__dirname, 'detail.html'),
        products: resolve(__dirname, 'products.html'),
        signin: resolve(__dirname, 'sign-in.html'),
        signup: resolve(__dirname, 'sign-up.html'),

      }
    }
  }
})