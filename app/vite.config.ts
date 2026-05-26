import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 部署在子路径下,本地 file:// 预览用 './'
// 通过环境变量切换:VITE_DEPLOY=gh 时输出 GitHub Pages 路径
const isGhPages = process.env.VITE_DEPLOY === 'gh'

export default defineConfig({
  plugins: [react()],
  base: isGhPages ? '/ai-store-prototype/' : './',
})
