import BulletChart from '../assets/bulleted-chart.png';
import DonutPieChart from './DonutPieChart';

const Pvls = () => {
  return (
    <div className="w-[350px] h-[250px] bg-white rounded-md shadow-md p-2 flex flex-col justify-start items-start space-y-4">
      {/* 3rd 95 Primary Indicator */}
      <p className="text-sm text-gray-600">3rd 95 Primary Indicator</p>
      <h2 className="text-xl font-bold text-gray-800">PVLS</h2>

      {/* Monthly PVLS Trend */}
      <p className="text-sm font-semibold text-gray-800">MONTHLY PVLS TREND</p>

      {/* Bullet Chart and Donut Pie Chart side by side */}
      <div className="flex items-end gap-12">
        {/* <img src={BulletChart} alt="Bulleted Chart" className="w-[180px] h-[70px]" />*/}
        <DonutPieChart />
      </div>

      {/* Target and Achievement indicators below the BulletChart */}
      <div className="flex justify-start items-center gap-3">
        {/* Target with blue indicator */}
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-[#29AFFF] mr-1"></div>
          <span className="text-sm text-gray-800">Target</span>
        </div>

        {/* Achievement with purple indicator */}
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-[#7390E2] mr-1"></div>
          <span className="text-sm text-gray-800">Achievement</span>
        </div>
      </div>
    </div>
  );
};

export default Pvls;
