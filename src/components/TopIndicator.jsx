import PropTypes from 'prop-types';

export function TopIndicator({
  value,
  title,
  difference,
  gapText,
  icon,
  titleClass = "text-sm font-medium text-gray-700", // Default class for title
  valueClass = "text-xs text-gray-500 font-bold",  // Default class for value
  differenceClass = "text-[10px] text-red-500",    // Default class for difference
  gapTextClass = "text-gray-400 text-[10px]",      // Default class for gap text
}) {
  return (
    <div className="bg-white rounded-lg h-[90px] w-[200px] shadow-md p-2 flex items-center">
      {/* Icon Section */}
      <div className="relative h-10 w-10 bg-cover bg-center rounded-full mr-2">
        <img src={icon} alt={title} className="absolute inset-0 h-8 w-8 m-auto" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center">
      <h2 className={valueClass}>{value}</h2>
        <p className={titleClass}>{title}</p>
        <p className={differenceClass}>
          {difference.toLocaleString()} <br />
          <span className={gapTextClass}>{gapText}</span>
        </p>
      </div>
    </div>
  );
}

// Define prop types for validation
TopIndicator.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  difference: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  gapText: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,

  // Additional prop types for custom class names
  titleClass: PropTypes.string,      // Custom CSS class for title
  valueClass: PropTypes.string,      // Custom CSS class for value
  differenceClass: PropTypes.string, // Custom CSS class for difference
  gapTextClass: PropTypes.string,    // Custom CSS class for gap text
};

export default TopIndicator;
