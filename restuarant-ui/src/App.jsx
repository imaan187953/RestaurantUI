import Sidebar from "./components/Sidebar";
import RestaurantCard from "./components/RestaurantCard";
import MapView from "./components/MapView";
import Navbar from "./components/Navbar";
import { useState } from "react";
import img1 from "./assets/firstfood.png";
import img2 from "./assets/secondfood.png";

function App() {
  const [activeFilter, setActiveFilter] = useState("Turkish");
  const filters = ["Turkish", "Arab", "Pakistani", "Open Now"];

  return (
    <div className="h-screen bg-[#f4f7f6] flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">

  {/* Sidebar */}
  <Sidebar />

  {/*Middle Section*/}
  <div className="w-[480px] bg-[#eef4ee] overflow-y-scroll flex justify-center border-r">
    
    <div className="w-[420px] py-6">

      {/* Heading */}
      <h1 className="text-xl font-semibold mb-4 text-[#213e27]">
        Top Halal Restaurants
      </h1>

      {/* Filters */}
      <div className="flex gap-2 mb-5">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActiveFilter(item)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition 
              ${
                activeFilter === item
                  ? "bg-green-800 text-white"
                  : "bg-white text-gray-600 "
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards */}
      <RestaurantCard 
        title="Sultan’s Feast Helsinki"
        rating="4.8"
        description="Authentic Ottoman Cuisine · 1.2km away"
        image={img1}
        
      />

      <RestaurantCard 
        title="Petra Oasis"
        rating="4.6"
        description="Jordanian Specialty · 2.5km away"
        image={img2}
      />

    </div>
  </div>

  {/*Map */}
  <div className="flex-1">
    <MapView />
  </div>

</div>
    </div>
  );
}

export default App;