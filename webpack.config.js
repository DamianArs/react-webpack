const { merge } = require("webpack-merge");

const commonConfiguration = require("./webpack/common");

module.exports = (_env, { mode }) => {
  const properlyConfig = require(`./webpack/${mode}`); // czy development czy production
  const mergedConfig = merge(commonConfiguration, properlyConfig);
  return mergedConfig;
};
