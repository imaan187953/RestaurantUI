function MapCard() {
  return (
    <div className="absolute top-6 left-6 w-72 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-3 z-10">

      {/* Row 1: Icon + Selected Tag */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-lg">
          🥄
        </div>
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
          Selected / Reserve
        </span>
      </div>

      {/* Row 2: Restaurant Name */}
      <h2 className="text-lg font-semibold text-[#213e27]">
        Sultan’s Feast
      </h2>

      {/* Row 3: Open Status */}
      <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
        <span className="text-green-600">⏰</span>
        <span>Open until 22:00</span>
      </div>

      {/* Row 4: Phone */}
      <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
        <span className="text-green-600">📞</span>
        <span>+358 40 123 4567</span>
      </div>

      {/* Row 5: Distance / Time */}
      <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
        <span className="text-green-600">🚗</span>
        <span>4 min · 1.2 km</span>
      </div>

      {/* Row 6: Get Directions Button */}
      <button className="mt-2 bg-green-600 text-white text-sm py-2 rounded-full hover:bg-green-700 transition">
        Get Directions
      </button>
    </div>
  );
}

export default MapCard;