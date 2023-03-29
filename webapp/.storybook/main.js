const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-paddings",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
          postcssOptions: {
            config: path.resolve(__dirname, "../.postcssrc.json"),
          },
        },
      },
    },
    path.resolve(__dirname, "./presets/i18next"),
        
    path.resolve(__dirname, "./presets/css-modules"),
        
  ],
  typescript: {
    check: true,
    checkOptions: {
      tsconfig: require.resolve("../tsconfig.project.json"),
    },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...(config.resolve || {}),
        alias: {
          ...(config.resolve.alias || {}),
          "@ui-kit": path.resolve(__dirname, "../src/ui-kit/"),
          "@lib": path.resolve(__dirname, "../src/lib/"),
          "@core": path.resolve(__dirname, "../src/core/"),
          "@domains": path.resolve(__dirname, "../src/domains/"),
        },
      },
      node: {
        fs: "empty",
        tls: "empty",
        net: "empty",
        module: "empty",
        console: true,
      },
    };
  },
};
