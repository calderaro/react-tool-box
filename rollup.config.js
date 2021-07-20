import pkg from './package.json';
import svgr from '@svgr/rollup';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/lib.tsx',
  output: [{ file: pkg.main, format: 'cjs', exports: 'named', sourcemap: true, strict: false, plugins: [terser()] }],
  plugins: [
    url(),
    svgr(),
    postcss({
      plugins: []
    }),
    typescript({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: false
    })
  ],
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    'typestyle',
    'csx',
    'react-datepicker',
    'react-datepicker/dist/react-datepicker.css',
    'lodash'
  ]
};
