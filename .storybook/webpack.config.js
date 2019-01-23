const path = require('path');

// load the default config generator.
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Add js, json and vue extension support
  config.resolve.extensions.push('.js', '.vue', '.json');

  // Add alias for @ pointing to src
  config.resolve.alias['@'] = path.resolve('src')
  
  config.module.rules.push({
    test: /\.s?css$/,
    loaders: ["vue-style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  })

  return config;
};