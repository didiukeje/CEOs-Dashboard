import { TopIndicator } from '../components/TopIndicator';
import FiscalYear from '../components/FiscalYear';
import Group from '../assets/Group.png';
import TablerRibbonHealth from '../assets/tableribbonhealth.png';
import Microscope from '../assets/uitmicroscope.png';

function FirstSection() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full"> {/* Adjusted grid layout */}
      <FiscalYear />
      <TopIndicator 
        value="0" 
        title="TX_CURR" 
        difference={(-249716).toLocaleString()}
        gapText="TREATMENT GAP" 
        icon={Group}
        valueStyle="text-xl font-bold text-black-800" // Larger value
      />
      <TopIndicator 
        value={(1009).toLocaleString()} 
        title="TOTAL HTS_POS" 
        difference={(-10635).toLocaleString()}
        gapText="CASE FINDING GAP" 
        icon={TablerRibbonHealth}
        valueStyle="text-lg font-bold text-black-100" // Larger value
      />
      <TopIndicator 
        value={(677152).toLocaleString()}
        title="TOTAL HTS_TST" 
        difference={(-186350).toLocaleString()}
        gapText="TESTING GAP" 
        icon={Microscope}
        valueStyle="text-xl font-bold black-gray-800" // Larger value
      />
    </div>
  );
}

export default FirstSection;
