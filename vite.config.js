import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Fallback về index.html cho mọi route (SPA mode)
    historyApiFallback: true,
  },
})
