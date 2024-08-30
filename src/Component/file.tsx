import { useState } from "react";

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeNavbar = () => setIsOpen(false); // Function to close the navbar

  return (
    <div className="relative">
      {/* Navbar Toggle Button */}
      <button className="p-4 text-white bg-blue-500" onClick={toggleNavbar}>
        Toggle Menu
      </button>

      {/* Side Navbar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Side Navbar</h2>
          {/* Close Button */}
          <button
            className="text-white p-2 focus:outline-none"
            onClick={closeNavbar}
          >
            &times; {/* Close icon (X) */}
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700">
              About
            </a>
          </li>
          <li>
            {/* Dropdown Link */}
            <button
              className="flex items-center justify-between w-full p-2 hover:bg-gray-700"
              onClick={toggleDropdown}
            >
              Services
              <svg
                className={`w-4 h-4 ml-2 transition-transform transform ${
                  isDropdownOpen ? "rotate-180" : ""
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

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="mt-2 space-y-2 pl-4">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700">
                    Marketing
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
