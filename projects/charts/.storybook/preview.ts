import { applicationConfig, type Preview } from '@storybook/angular'
import { provideEcharts } from 'ngx-echarts'

// (window as any).process = { env: { NODE_ENV: 'development' } };
const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideEcharts()
      ],
    })
  ],
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