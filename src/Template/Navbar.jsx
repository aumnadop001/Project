import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#2E8B57] shadow-lg"> {/* สีเขียวโทนธรรมชาติ */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* โลโก้ */}
        <a href="/" className="text-[#FAFAD2] text-3xl font-bold tracking-wide">
        Fluke & James Bistro
        </a>
        
        {/* เมนู */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-[#FAFAD2] ${
                  isActive ? "border-b-2 border-[#FAFAD2]" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-[#FAFAD2] ${
                  isActive ? "border-b-2 border-[#FAFAD2]" : ""
                }`
              }
              to="/Product"
            >
              Menu
            </NavLink>
          </li>
          <li>
             <NavLink
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-[#FAFAD2] ${
                  isActive ? "border-b-2 border-[#FAFAD2]" : ""
                }`
              }
              to="/check-order"
            >
              CheckOrder
            </NavLink> 
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
