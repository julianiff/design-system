import { build, buildSync } from "esbuild";

build({
  entryPoints: ["./src/index.ts"],
  outdir: "./lib",
  bundle: true,
  minify: true,
  sourcemap: true,
  color: true,
  format: "esm",
});
