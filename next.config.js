const path = require("path");
const withPWA = require("next-pwa");

module.exports = {
  target: "serverless",
  pwa: {
    dest: "public",
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  
};
