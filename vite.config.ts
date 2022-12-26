import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { createHtmlPlugin } from 'vite-plugin-html'
import { imagetools } from 'vite-imagetools'
import svgr from 'vite-plugin-svgr'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import { manifest } from './manifest'

export default defineConfig({
  server: {
    open: true,
  },
  build: {
    outDir: './dist',
    sourcemap: false,
    minify: 'esbuild',
  },
  preview: {
    open: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: manifest,
      },
    }),
    imagetools(),
    svgr(),
    chunkSplitPlugin({
      strategy: 'single-vendor',
    }),
  ],
})
