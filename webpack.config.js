import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("Redish101 Blog Build");
export default {
  entry: "./sw.js",
  mode: "production",

  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "sw.js",
  }
};
