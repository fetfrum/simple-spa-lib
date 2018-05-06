module.exports = {
  components: "src/components/**/*.{js,jsx}",
  propsParser: require("react-docgen").parse,
  webpackConfig: require("react-scripts/config/webpack.config.dev.js"),
  ignore: [
    "src/setupTests.js",
    "**/*.spec.js",
    "**/*.spec.jsx",
    "**/*.test.js",
    "**/*.test.jsx",
    "**/*.d.js"
  ]
};
