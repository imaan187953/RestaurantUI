function Sidebar() {
  return (
    <div className="w-64 bg-[#ebfcf4] h-full p-5 flex flex-col justify-between">

      {/* Top */}
      <div>

        {/* Heading + Subheading (fixed spacing) */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#213e27] leading-tight">
            Nordic Concierge
          </h3>
          <h6 className="text-sm text-[#213e27]/70 mt-1">
            Halal Finder Finland
          </h6>
        </div>

        {/* Menu */}
        <ul className="space-y-3">

          {/* Active Item */}
          <li className="flex items-center gap-3 bg-green-200 text-[#123d0f] px-3 py-2 rounded-lg cursor-pointer">
            <i className="fa-solid fa-utensils"></i>
            Restaurants
          </li>

          <li className="flex items-center gap-3 text-[#213e27] hover:bg-green-100 px-3 py-2 rounded-lg cursor-pointer transition">
            <i className="fa-solid fa-mosque"></i>
            Mosques
          </li>

          <li className="flex items-center gap-3 text-[#213e27] hover:bg-green-100 px-3 py-2 rounded-lg cursor-pointer transition">
            <i className="fa-solid fa-heart"></i>
            Favorites
          </li>

          <li className="flex items-center gap-3 text-[#213e27] hover:bg-green-100 px-3 py-2 rounded-lg cursor-pointer transition">
            <i className="fa-solid fa-gear"></i>
            Settings
          </li>

        </ul>
      </div>

      {/* Bottom Button */}
      <button className="bg-[#123d0f] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#0f2f0c] transition">
        <i className="fa-solid fa-plus"></i>
        Add Restaurant
      </button>

    </div>
  );
}

export default Sidebar;