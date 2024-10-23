// Section2.jsx
import HtsPos from './HtsPos';
import TxCurr from './TxCurr';
import Pvls from './Pvls';

const Section2 = () => {
  return (
    <div className="flex mt-2 ml-2 space-x-[30px]">
      {/* HtsPos Card */}
      <HtsPos />
      <TxCurr />
      <Pvls />
    </div>
  );
};

export default Section2;

  