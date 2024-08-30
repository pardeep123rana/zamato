import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo2 from "../assets/zamato.logo/Zomato-Logo.png";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isdrowdown, setisdrowdown] = useState(false);
  const [isdropdown, setisdropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleclick = () => {
    setisdrowdown(!isdrowdown);
  };

  const toggleopen = () => {
    setisdropdown(!isdropdown);
  };
  return (
    <nav className="w-full bg-none absolute z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex-shrink-0">
          <img src={logo2} alt="Zamato Logo" className="h-14 hidden" />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6 text-gray-500" />
            ) : (
              <FiMenu className="h-6 w-6 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* Slide-Out Navbar for Small Devices */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex items-center justify-between">
          <img src={logo2} alt="Zamato Logo" className="h-10" />
          <button onClick={closeMenu} className="text-white">
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col space-y-6 p-6">
          <li>
            <Link
              to="/Information"
              className="text-lg md:text-2xl font-light"
              onClick={closeMenu}
            >
              Advertise
            </Link>
          </li>
          <li>
            <Link
              to="/Login"
              className="px-4 py-2 border-2 rounded-lg border-gray-300 "
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>
          <li>
            <button
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700 font-light text-lg"
              onClick={handleclick}
            >
              Investor Relations
              <svg
                className={`w-4 h-4 ml-2 transition-transform transform ${
                  isdrowdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isdrowdown && (
              <ul className="flex flex-col space-y-3 font-light ">
                <li>
                  <Link to="/Information">Add Restaurant</Link>
                </li>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="flex items-center justify-between w-full p-2 font-light hover:bg-gray-700 text-lg"
              onClick={toggleopen}
            >
              Zomato for Work
              <svg
                className={`w-4 h-4 ml-2 transition-transform transform ${
                  isdropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isdropdown && (
              <ul className="flex flex-col space-y-3 font-light">
                <li>
                  <Link to="/hero">Add a Restaurant</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Overlay to close the menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Nav;
