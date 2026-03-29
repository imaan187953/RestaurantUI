function Sidebar() {
  return (
    <div className="w-64 bg-[#ebfcf4] h-full p-5 flex flex-col justify-between">

      {/* Top */}
      <div>
        <h3 className="text-xl font-bold mb-8 text-[#213e27]">Nordic Concierge</h3>
        <h6 className="text-sm  mb-8 text-[#213e27]">Halal Finder Finland</h6>

        <ul className="space-y-4">
          <li className="bg-green-300 p-2 rounded cursor-pointer">
            Restaurants
          </li>
          <li className="cursor-pointer">Mosques</li>
          <li className="cursor-pointer">Favorites</li>
          <li className="cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Bottom Button */}
      <button className="bg-[#123d0f] text-white py-2 rounded">
        + Add Restaurant
      </button>

    </div>
  );
}

export default Sidebar;