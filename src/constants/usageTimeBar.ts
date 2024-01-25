export const usageTimeBarData = (labels: Array<number>) => {
  return {
    labels,
    datasets: [
      {
        label: '',
        display: false,
        data: [65, 59, 80, 81, 56, 55, 40, 23, 42, 32, 67, 46],
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
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
