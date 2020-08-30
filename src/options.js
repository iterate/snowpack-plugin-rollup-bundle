const path = require("path");
// plugins
import alias from "@rollup/plugin-alias";
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";

export function defaultInputOptions(buildDirectory) {
  return {
    plugins: [
      postcss({
        extract: true,
        modules: true,
        use: ["sass"]
      }),
      alias({
        entries: [
          {
            find: "/__snowpack__",
            replacement: path.relative(buildDirectory, "__snowpack__"),
          },
          {
            find: "/web_modules",
            replacement: path.relative(buildDirectory, "web_modules"),
          },
        ],
      }),
    ],
  };
}

export function defaultOutputOptions(buildDirectory) {
  return {
    format: "es",
    plugins: [terser()],
    assetFileName: "assets/[name].[hash][ext]",
    chunkFileNames: "chunks/[name].[hash].js",
    compact: true,
    entryFileNames: "entrypoints/[name].[hash].js",
    dir: buildDirectory,
  };
}
