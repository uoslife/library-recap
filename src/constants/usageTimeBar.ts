export const usageTimeBarData = (data: Array<number>) => {
  return {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        label: '',
        display: false,
        data,
        backgroundColor: '#4686FF',
        borderRadius: 100,
      },
    ],
  };
};
export const usageTimeBarOptions = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: true,
      grid: {
        display: true,
      },
      border: { display: false },
      ticks: {
        display: true,
        // @ts-expect-error: value: string; index: number;
        callback: function (value, index) {
          if (index % 2 === 0) return value;
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: 'end',
      align: 'top',
      formatter: Math.round,
      font: {
        weight: 'bold',
      },
    },
  },
};
