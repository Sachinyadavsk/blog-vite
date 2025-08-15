import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Change `repo-name` to your repo when deploying to GitHub Pages
export default defineConfig({
plugins: [react()],
base: process.env.NODE_ENV === 'production' ? '/blog-vite/' : '/',
})