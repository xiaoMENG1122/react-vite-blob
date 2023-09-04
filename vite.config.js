import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import config from "./src/config/config"

let proxy = {};
for (let key in config.proxySource) {
  proxy[key] = {
    target: config.proxySource[key],
    changeOrigin: true,
    secure: true,
    rewrite: (path) => path.replace(key, '')
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@': '/src', // 你需要确保这个别名正确映射到你的项目的根目录
  //   },
  // },
  server: {
    hmr: true,
    proxy: {
      // 代理所有 /api 的请求，该求情将被代理到 target 中
      '/devapi': {
        // 代理请求之后的请求地址（你的真实接口地址)
        target: 'http://localhost:3000/',
        // 跨域
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/devapi/, '') // api标志替换为''
      }
    }
  }
})
