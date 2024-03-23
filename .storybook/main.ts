import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../assets'],
  previewHead: head => `
    ${head}
    <style>
        #storybook-root, #root-inner { height: 100%; }
        .sb-show-main.sb-main-padded { padding: 0; }
        .code-block {
          background-color: rgb(var(--arc-background-color));
          padding: 5px;
          border-radius: 5px;
        }
    </style>
  `,
};
export default config;
