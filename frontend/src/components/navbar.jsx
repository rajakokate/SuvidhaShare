import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src="/logo1.png" alt="Suvidha Share" className="h-12 w-auto" />
        <span className="text-gray-700 font-semibold text-lg">Suvidha Share</span>
      </div>
      <div className="flex gap-4">
        <button className="bg-green-700 text-white px-6 py-2 rounded-full font-bold flex items-center gap-1">
          Contact Us 📞
        </button>
        <button className="bg-green-700 text-white px-6 py-2 rounded-full font-bold flex items-center gap-1">
          Signup 🧑
        </button>
        <button className="bg-green-700 text-white px-6 py-2 rounded-full font-bold flex items-center gap-1">
          About Us ℹ️
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
