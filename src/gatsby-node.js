exports.onCreateNode = require("./onCreateNode");
exports.createPages = require("./createPages");
exports.sourceNodes = require("./sourceNodes");

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `@babel/plugin-transform-regenerator`
  });
};
