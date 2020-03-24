import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import pkg from './package.json'

export default {
  input: pkg.main,
  output: {
    file: 'public/bundle.js',
    format: 'es'
  },
  plugins: [
    serve({
      open: true,
      contentBase: 'public'
    }),
    livereload(),
    resolve(),
    commonjs(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    })
  ]
}
