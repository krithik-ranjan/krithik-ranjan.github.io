import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'pages/projects.html'),
        publications: resolve(__dirname, 'pages/publications.html'),
        photos: resolve(__dirname, 'pages/photos.html'),
        comp: resolve(__dirname, 'pages/comp.html'),
        defense: resolve(__dirname, 'pages/defense.html'),
        cartoonimator: resolve(__dirname, 'pages/cartoonimator.html'),
        orbitsim: resolve(__dirname, 'pages/orbitsim.html'),
        rigadoodle: resolve(__dirname, 'pages/rigadoodle.html'),
        physcomp: resolve(__dirname, 'pages/physcomp.html'),
        aipuppet: resolve(__dirname, 'pages/aipuppet.html')
      }
    }
  }
})
