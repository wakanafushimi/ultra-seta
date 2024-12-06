import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      // 只代理以 `/webhook` 开头的请求
      '/webhook': {
        target: 'https://hooks.spline.design',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/webhook/, ''), // 移除路径前缀 `/webhook`
      },
    },
  },
});
