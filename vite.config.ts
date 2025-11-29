import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    Checker({ typescript: true }) // shows TS errors in browser overlay
  ]
})