import { useState } from "react";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("Discover");
  const menuItems = ["Discover", "Favorites", "Recents"];

  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-[white] shadow-md">

      {/* LEFT SIDE (Logo + Menu Together) */}
      <div className="flex items-center">
        
        {/* Logo */}
        <div className="text-green-700 font-bold text-2xl">
          Verdant Halal
        </div>

        {/* Menu (moved closer to logo) */}
        <div className="flex gap-6 ml-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`text-sm font-medium pb-1 ${
                activeMenu === item
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* Search Bar */}
<div className="flex items-center bg-gray-100 px-3 py-1 rounded-full w-60">
  <input
    type="text"
    placeholder="Search Helsinki..."
    className="bg-transparent outline-none text-sm w-full"
  />
  <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
</div>

{/* Near Me Button */}
<button className="bg-[#154212] text-white text-sm px-4 py-1.5 rounded-full  flex items-center gap-2">
  <i className="fa-solid fa-location-arrow"></i>
  Near Me
</button>

{/* Profile Icon */}
<div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
  <i className="fa-solid fa-user text-gray-600"></i>
</div>

      </div>
    </div>
  );
}

export default Navbar;