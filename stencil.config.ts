import { Config } from "@stencil/core";
import blog from "./src/helpers/blog.js";

import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";

// https://stenciljs.com/docs/config

export const config: Config = {
  outputTargets: [{ type: "www" }],
  globalScript: "src/global/app.ts",
  globalStyle: "src/global/app.css",
  plugins: [builtins(), globals(), blog()],
  copy: [{ src: "data" }]
};
