import React, { useEffect, useState } from "react";
import NavLink from "../../navlink/navlink";
import axios from "axios";
import Footer from "../../Component/footer";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}
interface coo {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const Nightlife = () => {
  const [isData, setIsData] = useState<Drink[]>([]);
  const [showdata, setshowdata] = useState();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffe`)
      .then((response) => response.json())
      .then((data) => setIsData(data.drinks || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // useEffect(()=>{
  //   axios
  //   .get(``)
  //   .then((res)=>)
  // },[])

  return (
    <div>
      <div className=" flex flex-col p-4 ">
        <div className="mt-6">
          {" "}
          <NavLink />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 ">
          {isData.map((drink) => (
            <div
              key={drink.idDrink}
              className="drink-item bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  className="w-full h-full object-cover"
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
      <Footer />
    </div>
  );
};

export default Nightlife;
