import { TopIndicator } from '../components/TopIndicator';
import FiscalYear from '../components/FiscalYear';
import Group from '../assets/Group.png';
import TablerRibbonHealth from '../assets/tableribbonhealth.png';
import Microscope from '../assets/uitmicroscope.png';

function FirstSection() {
  return (
    <div className="grid grid-cols-2 gap-10 w-[400px] h-[200px]"> 
      <FiscalYear />
      <TopIndicator 
        value="0" 
        title="TX_CURR" 
        difference={(-249716).toLocaleString()}
        gapText="TREATMENT GAP" 
        icon={Group} 
      />
      <TopIndicator 
        value={(1009).toLocaleString()} 
        title="TOTAL HTS_POS" 
        difference={(-10635).toLocaleString()}
        gapText="CASE FINDING GAP" 
        icon={TablerRibbonHealth} 
      />
      <TopIndicator 
        value={(677152).toLocaleString()}
        title="TOTAL HTS_TST" 
        difference={(-186350).toLocaleString()}
        gapText="TESTING GAP" 
        icon={Microscope} 
      />
    </div>
  );
}

export default FirstSection;
