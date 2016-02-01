module.exports = {
  entry: { index: require.resolve("./") },
  output: { filename: "[name].built.js" },
  resolve: { alias: { "toaster": "underscore" } }
}
