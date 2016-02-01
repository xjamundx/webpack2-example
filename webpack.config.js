module.exports = {
  entry: { index: require.resolve("./") },
  output: { filename: "[name].built.js" },
  alias: { "toaster": "underscore" }
}
