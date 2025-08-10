import type { Preview } from '@storybook/angular'

(window as any).process = { env: { NODE_ENV: 'development' } };
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;