import React from 'react';
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelectedItems } from '../useContext/SelectedItemsContext';
function Navbar() {
  const { selectedItems } = useSelectedItems()
  const totalQuantity = selectedItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-[#2E8B57] shadow-lg relative"> {/* สีเขียวโทนธรรมชาติ */}
      <div className="container mx-auto flex items-center justify-between p-4 sticky"> {/* ตำแหน่ง */}
        {/* โลโก้ */}
        <a href="/" className="text-[#FAFAD2] text-3xl font-bold tracking-wide">
          Fluke & James Bistro
        </a>

        {/* เมนู */}
        <ul className="flex space-x-6 items-center">
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-[#FAFAD2] ${isActive ? "border-b-2 border-[#FAFAD2]" : ""
                }`
              }
            to="/check-order"
            >
              <div className='flex items-center'>
                <FaShoppingCart className='mr-2' /> {totalQuantity}
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-[#FAFAD2] ${isActive ? "border-b-2 border-[#FAFAD2]" : ""
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
                `text-[#FFFFFF] hover:text-[#FAFAD2] ${isActive ? "border-b-2 border-[#FAFAD2]" : ""
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
                `text-[#FFFFFF] hover:text-[#FAFAD2] ${isActive ? "border-b-2 border-[#FAFAD2]" : ""
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
