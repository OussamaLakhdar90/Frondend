import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, CategoryScale } from 'chart.js';

Chart.register(ArcElement, Tooltip, CategoryScale);

function PieComponent(props) {
  const chartRef = useRef(null); // Reference to the chart instance

  useEffect(() => {
    let chartInstance = null;

    if (
      chartRef.current &&
      Array.isArray(props.data) &&
      props.data.length > 0
    ) {
      const data = props.data.map((item) => item.data);
      const labels = props.data.map((item) => item.labels);

      // Create a new chart instance
      chartInstance = new Chart(chartRef.current, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: getBackgroundColor(),
              borderColor: 'rgb(47, 128, 237,50,51)',
              weight: getWeights(data),
            },
          ],
        },
        options: {
          // Define your chart options here
        },
      });
    }

    return () => {
      // Clean up the chart when the component unmounts
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [props.data]);

  const getBackgroundColor = () => {
    // Define your color mapping logic here
    // Return the appropriate background color array based on the labels
    // Example implementation:
    const colors = ['orange', 'purple', 'yellow', 'red', 'green', 'blue'];
    return props.data.map((item, index) => colors[index % colors.length]);
  };

  const getWeights = (data) => {
    // Calculate the sum of data values
    const sum = data.reduce((acc, value) => acc + value, 0);

    // Calculate the weight for each data value
    return data.map((value) => (value / sum) * 100);
  };

  return <canvas ref={chartRef} />;
}

export default PieComponent;
