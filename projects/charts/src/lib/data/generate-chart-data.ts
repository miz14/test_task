export const generateChartData = (
    line_count: number,
    start_date: Date,
    end_date: Date,
    point_count: number
) => {
    let current_value = Math.random() * 100;

    const update_value = () => {
        current_value += (Math.random() - 0.5) * Math.random() * 50;
        if (current_value > 100) {
            current_value = 100;
        } else if (current_value < 0) {
            current_value = 0;
        }
        return current_value;
    };

    const date_step = Math.ceil(
        (end_date.getTime() - start_date.getTime()) / point_count
    );
    return Array.from({ length: line_count }, (_, i) => ({
        name: `Data-${i + 1}`,
        data: Array.from({ length: point_count }, (_, j) => ({
            time: new Date(start_date.getTime() + j * date_step),
            value: update_value(),
        })),
    }));
};