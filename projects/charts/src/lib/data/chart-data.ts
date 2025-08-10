interface DataPoint {
    time: Date;
    value: number;
}
export interface ChartData {
    name: string;
    data: DataPoint[];
    color?: string;
}