function MapCard() {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-2 z-10">

      {/* Restaurant Name */}
      <h2 className="text-base font-semibold text-[#213e27]">
        Sultan’s Feast
      </h2>

      {/* Open Status */}
      <div className="flex items-center gap-2 text-gray-600 text-xs">
        <i className="fa-regular fa-clock text-green-900"></i>
        <span>Open until 22:00</span>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2 text-gray-600 text-xs">
        <i className="fa-solid fa-phone text-green-900"></i>
        <span>+358 40 123 4567</span>
      </div>

      {/* Distance */}
      <div className="flex items-center gap-2 text-gray-600 text-xs">
        <i className="fa-solid fa-car text-green-900"></i>
        <span>4 min · 1.2 km</span>
      </div>

      {/* Button */}
      <button className="mt-2 bg-green-900 text-white text-xs py-2 rounded-full hover:bg-green-700 transition flex items-center justify-center gap-2">
        <i className="fa-solid fa-location-arrow text-xs"></i>
        Get Directions
      </button>

    </div>
  );
}

export default MapCard;