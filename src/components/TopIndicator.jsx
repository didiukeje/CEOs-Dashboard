import PropTypes from 'prop-types';
import IconOrderBg from '../assets/iconorderbg.png'; // Background image import

export function TopIndicator({ value, title, difference, gapText, icon }) {
  return (
    <div className="bg-white rounded-lg h-[90px] w-[160px] shadow-md p-2 flex items-center">
      {/* Icon Section */}
      <div className="relative h-10 w-10 bg-cover bg-center rounded-full mr-2">
        <img src={icon} alt={title} className="absolute inset-0 h-8 w-8 m-auto" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-sm">{title}</h2>
        <p className="text-xs text-gray-500">{value}</p>
        <p className="text-[10px] text-red-500">
        {difference} <br />
        {gapText} 
        </p>
      </div>
    </div>
  );
}




// Define prop types for validation
TopIndicator.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  difference: PropTypes.number.isRequired,
  gapText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired, // Ensures it's a valid image path or URL
};
