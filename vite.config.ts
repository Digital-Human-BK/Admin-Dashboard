import { defineConfig } from 'vite'
import { Buffer } from 'buffer'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/

export default defineConfig({
  define: {
    'process.env': {},
    'window.Buffer': { Buffer }
  },

  plugins: [alias(), react(), tsconfigPaths(), svgr()],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      output: {}
    }
  }
})
