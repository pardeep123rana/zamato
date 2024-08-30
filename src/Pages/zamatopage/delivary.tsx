import React, { useState, useEffect, ChangeEvent } from "react";
import logo from "../../assets/main.image/zamato.logo.png";
import { TbBowlSpoon } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiWineLight } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa";
import Footer from "../../Component/footer";
import { Link } from "react-router-dom";
import NavLink from "../../navlink/navlink";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const Delivery: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("cake");
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(true);
  const [drinks, setDrinks] = useState<Drink[]>([]);

  const fetchMeals = (query: string) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchDrinks = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchMeals(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    fetchDrinks();
  }, []);

  const handleSearch = () => {
    fetchMeals(searchQuery);
  };

  const handleOpen = () => {
    setMenuOpen(false);
  };

  const handleClicked = (item: string) => {
    setClickedItem(item);
  };

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (!menuOpen) return null;

  return (
    <div className="flex flex-col h-screen w-screen bg-white">
      <div className="bg-white shadow">
        <nav className="flex flex-col md:flex-row items-center justify-around bg-white p-10 w-full h-16 md:h-20">
          <div className="flex items-center">
            <img src={logo} alt="Zamato Logo" className="h-9" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <h1
              onClick={handleOpen}
              className="cursor-pointer text-gray-800 md:inline-block hidden"
            >
              kd from agra <span className="text-gray-600">|</span>
            </h1>
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearchQueryChange}
              className="rounded-md px-3 py-2 w-full md:w-64 outline-none md:inline-block hidden"
            />
          </div>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li>
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-900 cursor-pointer font-light text-lg md:inline-block hidden"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-gray-700 hover:text-gray-900 cursor-pointer font-light text-lg md:inline-block hidden"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow flex flex-col md:p-4 p-0 ">
        <div className="flex flex-col md:flex-row justify-start mb-4 pl-[3%]">
          <ul className="flex items-center text-sm text-gray-800 space-x-2 pl-10">
            <li>
              <Link to="/main" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Nepal</li>
            <li>/</li>
            <li className="text-red-400">Nepali Restaurant</li>
          </ul>
        </div>
        {/* <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-4 mb-6 ml-[5%]">
          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={() => handleClicked("Dining Out")}
          >
            <TbBowlSpoon className="text-2xl" />
            <h1
              className={`text-xl font-light ${
                clickedItem === "Dining Out" ? "text-red-400" : ""
              }`}
            >
              Dining Out
            </h1>
          </div>

          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={() => handleClicked("Delivery Dining")}
          >
            <CiDeliveryTruck className="text-2xl" />
            <h1
              className={`text-xl font-light ${
                clickedItem === "Delivery Dining" ? "text-red-400" : ""
              }`}
            >
              Delivery Dining
            </h1>
          </div>
          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={() => handleClicked("Nightlife")}
          >
            <PiWineLight className="text-2xl" />
            <Link
              to="/nightlife"
              className={`text-xl font-light ${
                clickedItem === "Nightlife" ? "text-red-400" : ""
              }`}
            >
              Nightlife
            </Link>
          </div>
        </div> */}
        <NavLink />

        <div className="md:p-10 p-0 rounded-md flex flex-col space-y-1">
          <h1 className="text-2xl font-semibold mb-4 pl-10">Collections</h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center font-light p-[2%]">
            <h1 className="text-base md:text-lg mb-4 md:mb-0">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Agra, based on trends
            </h1>
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-base md:text-lg">All collections in Agra</h1>
              <FaChevronRight className="text-base md:text-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
            {drinks.map((drink) => (
              <div
                key={drink.idDrink}
                className="drink-item bg-white shadow-md rounded-lg overflow-hidden min-h-[300px]"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    className="aspect-w-1 aspect-h-1 object-cover"
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-light">{drink.strDrink}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <div className="flex space-x-2 mb-4 justify-center items-center">
            <input
              type="text"
              name="search"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              className="p-2 border rounded-md w-full md:w-1/2 border-spacing-2 outline-none"
              placeholder="Search for a meal"
            />
            <button
              onClick={handleSearch}
              className="p-2 bg-red-500 text-white rounded-md"
            >
              Search
            </button>
          </div>
          {meals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-10">
              {meals.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="border min-h-[300px] flex flex-col justify-between rounded-md"
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-full object-cover mb-2"
                    />
                  </div>
                  <div className="flex flex-col flex-grow mt-4">
                    <h2 className="text-lg font-light p-3">{meal.strMeal}</h2>
                    {/* <button className="mt-2 p-2 hover:bg-red-600 bg-red-500 text-white rounded-md">
                      Recipe
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No meals found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Delivery;
