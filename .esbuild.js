import {build} from 'esbuild';
import {litCssPlugin} from 'esbuild-plugin-lit-css';
import fs from 'fs';
import rimraf from 'rimraf';
import chalk from 'chalk';
import {minifyTemplates, writeFiles} from 'esbuild-minify-templates';

const OUTPUT_DIR = './lib';

// Read index.ts and build bundles
const buildAsIndependentBundles = (indexDir = 'src/index.ts') => {
  const data = fs.readFileSync(indexDir, 'UTF-8');
  const lines = data.split(/\r?\n/);
  const entries = lines
    .map((line) => line.split("'"))
    .filter((item) => item != '')
    .map((item) => `./src${item[1].replace('.', '')}`);
  console.log(
    `${chalk.yellow('Building with following Bundles')} ${chalk.green(
      ...entries
    )}`
  );
  return [indexDir, ...entries];
};

// Cleanup Build Dir
rimraf.sync(OUTPUT_DIR);

//Build Independent Bundles
build({
  entryPoints: ['src/index.ts'],
  outdir: OUTPUT_DIR,
  bundle: true,
  minify: true,
  color: true,
  plugins: [litCssPlugin({uglify: true})],
  sourcemap: true,
  write: false,
})
  .then(minifyTemplates)
  .then(writeFiles)
  .catch((e) => {
    throw e;
  });

// Build Styling
build({
  entryPoints: ['./src/styling/design.css'],
  outfile: `${OUTPUT_DIR}/index.css`,
  bundle: false,
  minify: true,
  color: true,
});
