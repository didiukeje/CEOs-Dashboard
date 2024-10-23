// HtsPos.jsx
// HtsPos.jsx
import BarChartCard from './BarChartCard';

const HtsPos = () => {
  return (
    <div className="w-[400px] h-[250px] bg-white rounded-md shadow-md p-4 flex flex-col justify-start items-start space-y-2">

      <p className="text-sm text-gray-600">1st 95 Primary Indicator</p>
      <h2 className="text-xl font-bold text-gray-800">HTS_POS</h2>



      {/* Bar Chart Card aligned below with left margin */}
      <div className="mt-auto ml-4">
        <BarChartCard />
      </div>
    </div>
  );
};

export default HtsPos;


