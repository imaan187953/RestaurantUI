function RestaurantCard({ title, rating, description, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6 w-full">

      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt="restaurant"
          className="w-full h-40 object-cover"
        />

        {/* Verified Badge */}
        <span className="absolute top-3 right-3 bg-green-900 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <i className="fa-solid fa-circle-check"></i>
          Verified Halal
        </span>
      </div>

      {/* Content */}
      <div className="p-4">

        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-base text-[#213e27]">
            {title}
          </h2>

          <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-lg flex items-center gap-1">
            <i className="fa-solid fa-star"></i>
            {rating}
          </span>
        </div>

        <p className="text-gray-500 text-sm mt-1">
          {description}
        </p>

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