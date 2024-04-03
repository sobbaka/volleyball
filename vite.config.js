import { defineConfig } from 'vite'
import { resolve } from 'path'

const outDir = resolve(__dirname, 'docs')
const root = resolve(__dirname, 'src')
const publicFolder = resolve(__dirname, 'public')

// https://vitejs.dev/config/
export default defineConfig({
  root: root,
  base: './',
  publicDir: publicFolder,
  assetsInclude: ["**/*.php"],
  server: {
    watch: {
      usePolling: true
    },
    open: true
  },
  build: {
    outDir: outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        english: resolve(__dirname, 'src/english.html'),
        georgian: resolve(__dirname, 'src/georgian.html'),
      },
    }
  },
})
