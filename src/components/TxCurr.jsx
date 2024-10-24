import BulletChart from '../assets/bulleted-chart.png'
import DonutPieChart from './DonutPieChart';

const TxCurr = () => {
    return (
        <div className="w-[400px] h-[250px] bg-white rounded-md shadow-md p-4 flex flex-col justify-start items-start space-y-2">
        <p className="text-sm text-gray-600">2nd 95 Primary Indicator</p>
        <h2 className="text-xl font-bold text-gray-800">TxCurr</h2>
  
        <div className="flex items-end gap-8">
            {/*  <img src={BulletChart} alt="Bulleted Chart" className="w-[180px] h-[90px] p-4" /> */}
          <DonutPieChart />
        </div>
      </div>
    );
  };
  
export default TxCurr;
