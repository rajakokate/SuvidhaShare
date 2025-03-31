import React from "react";
import Logo from "../assets/Suvidha_logo_transparent.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="User Profile" className=" w-48 h-25 bg-white" />
        <span className="text-gray-700 font-semibold text-lg"></span>
      </div>
      <div className="flex gap-4">
        <button className="bg-green-900 text-white px-8 py-2 rounded-full font-bold flex items-center gap-1 cursor-pointer">
          <Link to="/">HOME</Link>
        </button>
        <button className="bg-green-900 text-white px-8 py-2 rounded-full font-bold flex items-center gap-1 ">
          <Link to="/aboutus">ABOUT US</Link>
        </button>
        <a
          href="https://suvidhafoundationedutech.org/SuvidhaEvents.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-900 text-white px-8 py-2 rounded-full font-bold flex items-center gap-1 cursor-pointer">
            PROGRAMS
          </button>
        </a>

        <button className="bg-green-900 text-white px-8 py-2 rounded-full font-bold flex items-center gap-1 cursor-pointer">
          <Link to="/contactus">CONTACT US</Link>
        </button>
        <button className="bg-green-900 text-white px-8 py-2 rounded-full font-bold flex items-center gap-1 cursor-pointer">
          <Link to="/signup">SIGNUP</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
