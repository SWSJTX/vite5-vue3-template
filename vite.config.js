import { VantResolver } from '@vant/auto-import-resolver'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

const root = process.cwd()
console.log('root', root)
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, '')
  return {
    base: env.VUE_APP_BASE_URL || '/',
    plugins: [
      vue(),
      // 按需引入 vant 组件
      Components({
        resolvers: [VantResolver()]
      }),
      vueSetupExtend(),
      legacy({
        targets: ['chrome 10'], // 需要兼容的目标列表，可以设置多个
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
      }),
      // 压缩资源
      viteCompression({
        threshold: 1024 * 10,
        algorithm: 'gzip',
        deleteOriginFile: false
      }),
      // 打包资源分析
      visualizer({
        open: false
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      hmr: true,
      host: true,
      proxy: {
        '^/dev-api': {
          target: env.VUE_APP_BASE_URL, //代理请求地址
          changeOrigin: true,
          ws: true
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          // 拆包
          manualChunks: {
            vue: ['vue'],
            pinia: ['pinia'],
            'vue-router': ['vue-router']
          }
        }
      }
    }
  }
})
