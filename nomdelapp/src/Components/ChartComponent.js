import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function ChartComponent(props) {
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
          {
            label: props.name2,
            backgroundColor: 'rgba(22, 15, 247, 1)',
            borderColor: 'rgb(47, 128, 237)',
            data: props.data2,
          },
          {
            label: props.name3,
            backgroundColor: 'rgba(245, 0, 0, 1)',
            borderColor: 'rgb(47, 128, 237)',
            data: props.data3,
          },
          {
            label: props.name4,
            backgroundColor: 'rgba(248, 15, 247, 1)',
            borderColor: 'rgb(47, 128, 237)',
            data: props.data4,
          },
          {
            label: props.name5,
            backgroundColor: 'rgba(245, 63, 0, 1)',
            borderColor: 'rgb(47, 128, 237)',
            data: props.data5,
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
  }, [
    props.data,
    props.data2,
    props.data3,
    props.data4,
    props.data5,
    props.name,
    props.name2,
    props.name3,
    props.name4,
    props.name5,
    props.labels,
  ]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
