const path = require("path");
const DIST_PATH = path.resolve(__dirname, "../dist");
module.exports = {
  entry: {
    app: "./app/index.js",
  },
  output: {
    filename: "js/bundle.js",
    path: DIST_PATH,
  },
};
