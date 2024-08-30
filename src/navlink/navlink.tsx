// Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" p-4   text-black  flex md:justify-start justify-center md:ml-20">
      <ul className="flex space-x-4 ">
        <li>
          <NavLink
            to="/Diningout"
            className={({ isActive }) =>
              ` border p-2 rounded-md ${
                isActive ? "font-bold text-active-link" : "text-black"
              }`
            }
          >
            Dining Out
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Delivery"
            className={({ isActive }) =>
              `border p-2 rounded-md ${
                isActive ? "font-bold text-active-link" : "text-black"
              }`
            }
          >
            Delivery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nightlife"
            className={({ isActive }) =>
              `border p-2 rounded-md ${
                isActive ? "font-bold text-active-link" : "text-black"
              }`
            }
          >
            Nightlife
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
