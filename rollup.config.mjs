import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'

export default defineConfig({
  input: './src/index.js',
  output: {
    format: 'esm',
    file: 'dist/index.js',
    sourcemap: false,
  },
  external: ['vue'],
  plugins: [
    commonjs(),
    nodeResolve(),
    vue(),
  ],
})