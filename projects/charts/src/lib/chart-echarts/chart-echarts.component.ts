import { Component, Input, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartData } from '../data/chart-data';

@Component({
    selector: 'echarts-chart',
    standalone: true,
    imports: [NgxEchartsModule],
    templateUrl: './chart-echarts.component.html',
    styleUrl: './chart-echarts.component.css',
})
export class ChartEchartsComponent {
    @Input() chartData: ChartData[] = [];
    option: EChartsOption = {};

    private updateChart() {
        this.option = {
            grid: {
                left: '1%',
                right: '1%',
                borderColor: 'rgba(0, 0,  0, 0.2)',
                borderWidth: 1,
                bottom: '80',
            },
            xAxis: {
                type: 'time',
                axisLabel: {
                    formatter: '{HH}:{mm}\n{dd}.{MM}.{yyyy}',
                },
            },
            yAxis: {
                type: 'value',
            },

            legend: {
                data: this.chartData.map((data) => data.name),
                orient: 'vertical',
                left: 50,
                top: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 5,
                padding: [10, 15],
                textStyle: {
                    color: '#333',
                    fontWeight: 'bold',
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                },
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 100,
                },
                {
                    type: 'slider',
                    bottom: '10',
                    left: 'center',
                    right: 1,
                    labelFormatter: (val) => new Date(val).toLocaleString(),
                    start: 0,
                    end: 100,
                },
            ],
            series: this.chartData.map((data) => ({
                name: data.name,
                data: data.data.map((point) => [new Date(point.time), point.value]),
                type: 'line',
                showSymbol: false,
            })),
        };
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes['chartData']) {
            this.updateChart();
        }
    }
    ngAfterViewInit() {
        this.updateChart();
    }
}
