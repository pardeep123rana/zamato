import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import backimage from "../assets/main.image/first image food.png";
import logo from "../assets/main.image/viber_image_2024-07-28_23-18-03-953.png";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Name } from "./name";

const Main: React.FC = () => {
  const style = {
    backgroundImage: `url(${backimage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };
  const [isoPen, setisOpen] = useState(false);
  const handleClicked = () => {
    setisOpen(!isoPen);
  };

  return (
    <>
      <div className="w-full h-[75vh] text-black flex flex-col" style={style}>
        <div className="flex flex-col md:flex-row justify-around items-center text-white p-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-xl font-bold">Get the app</h1>
          </div>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
            <li className="font-light hidden md:inline-block">
              Investor Relations
            </li>
            <li>
              <Link to="/hero" className="font-light hidden md:inline-block">
                Add Restaurant
              </Link>
            </li>
            <li>
              <Link to="/login" className="font-light hidden md:inline-block">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="font-light hidden md:inline-block">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-4 space-y-4 md:mt-10">
          <img src={logo} alt="Logo" className="w-40 h-20 mb-4" />
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            Discover the best food & drinks in Vellore
          </h1>
        </div>
      </div>

      <div className="h-auto w-full p-8 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl font-serif text-center mb-4">
          Popular locations in India
        </h1>
        <div className="flex flex-col justify-center items-center text-center space-y-2 md:space-y-4">
          <p className="text-base md:text-lg font-thin text-gray-500">
            From swanky upscale restaurants to the coziest hidden gems serving
            the most incredible food,
          </p>
          <p className="text-base md:text-lg hidden md:inline-block font-thin text-gray-500">
            Zomato covers it all. Explore menus, and millions of restaurant
            photos and reviews from users
          </p>
          <p className="text-base md:text-lg font-thin text-gray-500">
            just like you, to find your next great meal.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center h-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4 w-full max-w-screen-lg">
          {Name.map((p, index) => (
            <div
              key={index}
              className="p-6 shadow-lg border rounded-md relative"
            >
              <div className="flex flex-row justify-between items-center">
                <Link to="resturant" className="font-light text-lg">
                  {p.name}
                </Link>
                <h1 onClick={handleClicked}>
                  {" "}
                  {isoPen ? (
                    <IoChevronForwardOutline className="text-lg" />
                  ) : (
                    <IoChevronForwardOutline className="text-lg" />
                  )}
                </h1>
                {isoPen && <h1>pradeep</h1>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Main;
