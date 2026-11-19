import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Fixed ports, separate from OpportunityHub (5173 dev, 4173 preview) and Calendar,
  // so their service workers on those localhost ports never take over this site.
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 4300,
    strictPort: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
})
