import React, { useState } from "react";
import logo from "../../assets/main.image/zamato.logo.png";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import backimage from "../../assets/background.zamato/8015dbe54fd3659cc0366c1cc77f664c1601890512.jpeg";
import Footer from "../../Component/footer";

import Contactlogin from "../../Pages/Auth/contactlogin";

const style = {
  backgroundImage: `url(${backimage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "400px" // Corrected property name
};

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen w-screen">
      <div className="shadow">
        <nav className="flex flex-row justify-between p-4 md:p-10 w-full h-16 md:h-20">
          <div className="flex items-center">
            <img src={logo} alt="Zamato Logo" className="h-9" />
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleOpen}
              className="text-gray-800 focus:outline-none"
            >
              <IoMdMenu size={24} />
            </button>
          </div>
          <div className="hidden md:flex md:flex-row md:items-center space-x-6">
            <h1 className="cursor-pointer text-gray-800">
              kd from agra <span className="text-gray-600">|</span>
            </h1>
            <input
              type="text"
              placeholder="Search..."
              className="rounded-md px-3 py-2 w-64 outline-none"
            />
            <ul className="flex flex-row space-x-6">
              <li>
                <Link
                  to="/login"
                  className="text-black hover:text-gray-900 cursor-pointer font-light text-lg"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-black hover:text-gray-900 cursor-pointer font-light text-lg"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {isOpen && (
          <div className="flex flex-col items-center md:hidden space-y-4 mt-4">
            <h1 className="cursor-pointer text-gray-800">
              kd from agra <span className="text-black">|</span>
            </h1>
            <input
              type="text"
              placeholder="Search..."
              className="rounded-md px-3 py-2 w-full outline-none"
            />
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  to="/login"
                  className="text-black hover:text-gray-900 cursor-pointer font-light text-lg"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-black hover:text-gray-900 cursor-pointer font-light text-lg"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="flex-grow flex items-center justify-center text-center"
        style={style}
      >
        <div className="flex flex-col ">
          <h1 className="md:text-3xl text-2xl text-white font-serif">
            We would love to hear from
          </h1>
          <h1 className="md:text-3xl text-2xl text-white font-serif">you!</h1>
        </div>
      </div>
      <Contactlogin />
      <Footer />
    </div>
  );
};

export default Contact;
