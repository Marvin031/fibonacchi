import React, { useEffect, useRef } from 'react';
import { Chart, LinearScale, CategoryScale, Title, Tooltip, Legend, LineController, PointElement, LineElement } from 'chart.js'; // Import necessary parts from chart.js

const FibonacciChart = ({ count }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Function to generate Fibonacci sequence
    const generateFibonacci = (n) => {
      let fibonacci = [0, 1];
      for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      }
      return fibonacci;
    };

    // Generate Fibonacci sequence
    const fibonacciSequence = generateFibonacci(count);

    // Get canvas context
    const ctx = chartRef.current.getContext('2d');

    // Destroy previous chart instance if exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Register necessary elements, scales, and controllers
    Chart.register(LinearScale, CategoryScale, Title, Tooltip, Legend, LineController, PointElement, LineElement);

    // Create new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: fibonacciSequence.map((num, index) => `F${index + 1}`),
        datasets: [{
          label: 'Fibonacci Sequence',
          data: fibonacciSequence,
          borderColor: 'blue',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            type: 'linear', // Ensure linear scale is specified here
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [count]);

  return <canvas ref={chartRef} width="400px" height="300px"></canvas>;
};

export default FibonacciChart;
