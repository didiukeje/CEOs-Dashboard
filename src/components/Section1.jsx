import GoogleMapComponent from './map'; // Use your map component
import FirstSection from './FirstSection';
import ApinHeader from './ApinHeader';

const Section1 = () => {
  return (
    <div className="flex w-full px-8 py-6 space-x-6 height=">
      {/* Apin Header on the left */}
      <div className="flex-shrink-0">
        <ApinHeader />
      </div>

      {/* FirstSection on the right */}
      <div className="flex flex-1">
        <FirstSection />
      </div>

      {/* Map positioned separately with a little shift to the left */}
      <div className="ml-[-30px] flex-shrink-0"> {/* Shift map left with negative margin */}
        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default Section1;
