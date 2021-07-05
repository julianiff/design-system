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

build({
  entryPoints: ['./src/styling/design.css'],
  outfile: './lib/index.css',
  bundle: true,
  minify: true,
  color: true,
});
