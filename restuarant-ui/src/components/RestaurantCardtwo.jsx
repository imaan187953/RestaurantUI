function RestaurantCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
      {/* Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1604908176997-431c9277c9b8"
          alt="food"
          className="w-full h-44 object-cover"
        />

        {/* Verified Badge */}
        <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
          ✔ Verified Halal
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        
        {/* Title + Rating */}
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">
            Petra Oasis
          </h2>

          <span className="bg-green-100 text-green-700 px-2 py-1 text-sm rounded-lg">
            ⭐ 4.6
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-1">
          Jordanian Specialty · 2.5km away
        </p>

        {/* Tags */}
        <div className="flex gap-2 mt-3">
          <span className="bg-gray-200 px-2 py-1 text-xs rounded">
            TURKISH
          </span>
          <span className="bg-gray-200 px-2 py-1 text-xs rounded">
            DINING
          </span>
        </div>

      </div>
    </div>
  );
}

export default RestaurantCard;