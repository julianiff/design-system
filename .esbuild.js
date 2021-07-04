import {build} from 'esbuild';
import {litCssPlugin} from 'esbuild-plugin-lit-css';

build({
  entryPoints: ['./src/index.ts'],
  outdir: './lib',
  bundle: true,
  minify: true,
  sourcemap: true,
  color: true,
  format: 'esm',
  plugins: [litCssPlugin({uglify: true})],
});
