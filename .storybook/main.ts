import { dirname, join } from 'path'
import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    '@chromatic-com/storybook',
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  
  docs: {
    autodocs: true,
  },
  viteFinal: config => {
    config.build = config.build || {}
    config.build.sourcemap = false
    config.optimizeDeps = {
      include: ['**/*.js', '**/*.ts', '**/*.tsx'],
    }
    return config
  },
}
export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}


