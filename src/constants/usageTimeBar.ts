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
