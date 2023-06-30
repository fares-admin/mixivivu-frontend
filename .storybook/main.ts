import type { StorybookConfig } from '@storybook/nextjs'
const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  typescript: {
    reactDocgen: false,
    check: false,
  },
  refs: {
    'design-system': {
      // The title of your Storybook
      title: 'Mixivivu Design System',
      // The url provided by Chromatic when it was published
      url: 'https://develop--649db13292e6d12d827ac6e2.chromatic.com',
    },
  },
}
export default config
