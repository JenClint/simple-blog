import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // 插件配置
    plugins: [vue()],

    // 解析配置
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },

    // CSS相关配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variables.scss";`
        }
      }
    },

    // 开发服务器配置
    server: {
      host: '0.0.0.0',
      port: 5173,
      open: true, // 自动打开浏览器
      cors: true, // 允许跨域
      // 代理配置
      proxy: {
        // 假设你的API在/api路径下
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },

    // 构建配置
    build: {
      // 指定输出路径
      outDir: 'dist',
      // 小于此阈值的导入或引用资源将内联为 base64 编码
      assetsInlineLimit: 4096,
      // 启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      // 构建后是否生成 source map 文件
      sourcemap: mode === 'development',
      // chunk 大小警告的限制
      chunkSizeWarningLimit: 500,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
      // 自定义块打包策略
      rollupOptions: {
        output: {
          // 静态资源分类打包
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // 拆分依赖包
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
            elementPlus: ['element-plus'],
          }
        }
      },
      // 启用/禁用 brotli 压缩大小报告
      brotliSize: false
    },

    // 优化依赖
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'pinia',
        'element-plus/es',
        '@element-plus/icons-vue',
        'marked',
        'dayjs'
      ]
    },

    // PWA配置（如需可以在此处配置）
    // pwa: {},

    // 环境变量前缀配置
    envPrefix: 'APP_'
  }
})