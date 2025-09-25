import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'react_host',
      filename: 'remoteEntry.js',
      remotes: {
        vue_remote: 'http://localhost:5001/assets/remoteEntry.js' 
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 5000,
    cors: true
  },
  build: {
    target: 'esnext'
  }
})