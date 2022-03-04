const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    manifest: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "TestSemanticRelease",
      fileName: (format) => `test-semantic-release.${format}.js`,
    },
  },
});
