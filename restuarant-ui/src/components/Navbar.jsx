import { useState } from "react";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Discover");
  const menuItems = ["Discover", "Favorites", "Recents"];

  return (
    <div className="w-full flex items-center justify-between p-4 bg-white shadow-md">

      {/* Left Logo */}
      <div className="text-green-700 font-bold text-2xl">
        Verdant Halal
      </div>

      {/* Middle Menu */}
      <div className="flex gap-6">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveMenu(item)}
            className={`text-sm font-medium ${
              activeMenu === item ? "text-green-700 border-b-2 border-green-700" : "text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full w-60">
          <input
            type="text"
            placeholder="Search Helsinki..."
            className="bg-transparent outline-none text-sm w-full"
          />
          <span className="text-gray-400">🔍</span>
        </div>

        {/* Near Me Button */}
        <button className="bg-green-600 text-white text-sm px-3 py-1 rounded-full hover:bg-green-700 transition">
          Near Me
        </button>

        {/* Profile Icon */}
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
          <span>👤</span>
        </div>

      </div>

    </div>
  );
}

export default Navbar;