import Sidebar from "./components/Sidebar";
import RestaurantCardone from "./components/RestaurantCardone";
import RestaurantCardtwo from "./components/RestaurantCardtwo";
import MapView from "./components/MapView";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [activeFilter, setActiveFilter] = useState("Turkish");
  const filters = ["Turkish", "Arab", "Pakistani", "Open Now"];

  return (
    <div className="h-screen bg-[#f4f7f6] flex flex-col">

      {/* Navbar spans entire top */}
      <Navbar />

      {/* Main Content: Sidebar | Middle | Map */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <Sidebar />

        {/* Middle Section */}
<div className="flex-1 p-6 overflow-y-scroll">

  {/* Heading */}
  <h1 className="text-2xl font-bold mb-4 text-[#213e27]">
    Top Halal Restaurants
  </h1>

  {/* Filters */}
  <div className="flex gap-3 mb-6">
    {filters.map((item) => (
      <button
        key={item}
        onClick={() => setActiveFilter(item)}
        className={`px-4 py-2 rounded-full text-sm transition 
          ${
            activeFilter === item
              ? "bg-green-600 text-white"
              : "bg-white text-gray-600"
          }`}
      >
        {item}
      </button>
    ))}
  </div>

  {/* Restaurant Cards */}
  <RestaurantCardone />
  <RestaurantCardtwo />
  <RestaurantCardone />


</div>

        {/* Map */}
        <MapView />

      </div>
    </div>
  );
}

export default App;