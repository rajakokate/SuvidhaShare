import { Search, User, LogOut, Settings, Truck, ClipboardList, Gift } from 'lucide-react';

const Sidebar = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="bg-green-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Gift size={24} /> SUVIDHA SHARE
        </h1>
        <ul className="space-y-4">
          <li className="cursor-pointer">Dashboard</li>
          <li className="cursor-pointer">User Profile</li>
          <li className="cursor-pointer">Food Track</li>
          <li className="cursor-pointer">Restaurant</li>
          <li className="cursor-pointer">Pick up</li>
          <li className="cursor-pointer">Comments</li>
          <li className="cursor-pointer">Help & Center</li>
          <li className="cursor-pointer flex items-center gap-2 mt-4">
            <Settings size={16} /> Settings
          </li>
          <li className="cursor-pointer flex items-center gap-2 mt-2">
            <LogOut size={16} /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;