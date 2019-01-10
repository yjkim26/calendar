module.exports = {
  presets: ["next/babel", "@zeit/next-typescript/babel"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        rootPathPrefix: "@"
      }
    ]
  ]
};
