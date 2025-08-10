import { Meta, StoryObj } from '@storybook/angular';
import { ChartEchartsComponent } from '../../public-api';
import { generateChartData } from '../data/generate-chart-data';

const meta: Meta<ChartEchartsComponent> = {
    title: 'Echarts/Chart',
    component: ChartEchartsComponent,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        chartData: {
            control: {
                type: 'object',
                description: 'Точки графика',
            },
        },
    },
};
export default meta;
type Story = StoryObj<ChartEchartsComponent>;

export const Default: Story = {
    args: {
        chartData: generateChartData(
            3,
            new Date('2025-07-10'),
            new Date('2025-07-15'),
            100
        ),
    },
    render: (args) => ({
        props: {
            chartData: args.chartData,
        },
    }),
};
