import { FaSearch, FaBell } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
      
      {/* Left - Title */}
      <h2 className="text-xl font-semibold">Dashboard</h2>

      {/* Right - Search + Icons + Profile */}
      <div className="flex items-center gap-4">
        
        {/* Search Box */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2"
          />
        </div>

        {/* Notification Icon */}
        <FaBell className="text-gray-600 cursor-pointer" />

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium">Swati</span>
        </div>

      </div>
    </div>
  );
}