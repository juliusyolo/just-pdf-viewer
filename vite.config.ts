import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import dts from 'vite-plugin-dts'
export default defineConfig({
  plugins: [vue(),nodeResolve(),commonjs(),dts({
    cleanVueFileName: true,
    outputDir:'types'
  })],
  build: {
    // cssCodeSplit: true,
    lib: {
      entry: 'src/index.ts',
      formats:['es','cjs'],
    },
    copyPublicDir:false,
    rollupOptions: {
      input:'src/index.ts',
      external: ['vue'],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
        },
        {
          format: 'commonjs',
          dir: 'lib',
          entryFileNames: '[name].js',
        },
      ],
    }
  }
})
