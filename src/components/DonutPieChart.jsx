import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutPieChart = () => {
  const data = {
    datasets: [
      {
        data: [18, 82], // 18% in red, 82% in blue
        backgroundColor: ['#FF0000', '#ADD8E6'], // Red and light blue
        borderWidth: 0, // No border
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%', // Makes it a donut
    plugins: {
      tooltip: { enabled: false }, // Disable tooltip
      legend: { display: false }, // Disable legend
    },
    elements: {
      arc: {
        borderRadius: 5, // Smooth edges
      },
    },
  };

  return (
    <div className="relative w-[80px] h-[80px]">
      <Doughnut data={data} options={options} />

      {/* Percentage in the center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-xl">18%</span>
      </div>

      {/* Tag below the chart */}
      <p className="text-center text-sm font-bold text-gray-800 mt-2 -ml-10 w-[150px]">Percent TX_CURR</p>
    </div>
  );
};

export default DonutPieChart;
