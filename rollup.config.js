import buble from 'rollup-plugin-buble';

export default {
  dest: './dist/api-log.js',
  entry: 'index.js',
  format: 'cjs',
  plugins: [
    buble()
  ]
};
