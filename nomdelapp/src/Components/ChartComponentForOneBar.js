import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function ChartComponentForOneBar(props) {
  const chartRef = useRef();

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');
    const sortedLabels = props.labels.slice().sort(); // Sort the labels array

    const myChart = new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: sortedLabels, // Use the sorted labels
        datasets: [
          {
            label: props.name,
            backgroundColor: 'rgba(161, 198, 247, 1)',
            borderColor: 'rgb(47, 128, 237)',
            data: props.data,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy(); // Clean up the chart instance when the component unmounts
    };
  }, [props.data, props.name, props.labels]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
