import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  // 'core': {
  //   'builder': '@storybook/builder-webpack5'
  // },
};

export default config;