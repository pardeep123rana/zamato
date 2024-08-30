import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/zamato.logo/zamato.png";
import dishes from "../assets/background.zamato/backgroundhero.jpg";
import dishes2 from "../assets/background.zamato/OIP.jpg";
import small2 from "../assets/zamato.logo/small1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flower from "../assets/background.zamato/StartJourney.7cfaaf0a.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Partner } from "./partner";
import { product } from "./Product";
import { FiMenu, FiX } from "react-icons/fi";
import Footer from "./footer";

// import Footer from "./footer";
const Hero = () => {
  const style = {
    backgroundImage: `url(${dishes})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  const nameMY = {
    backgroundImage: `url(${flower})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  const pradeep = {
    backgroundImage: `url(${dishes2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "300px" // Adjust this value to set the desired height
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  const productSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [isnavOpen, setisnavOpen] = useState(false);
  const handleclick = () => {
    setisnavOpen(isnavOpen);
  };

  return (
    <div className="h-screen sm:w-full ">
      <div
        className="h-[60%] w-full   text-white md:rounded-none rounded-t-md md:h-[75%] lg:h-[80%] flex flex-col justify-between"
        style={style}
      >
        <div className="flex flex-wrap items-center justify-between p-4 md:px-10">
          <div className="flex-shrink-0">
            <img src={logo} alt="Zamato Logo" className="h-8 md:h-12" />
          </div>
          <ul className="hidden md:flex flex-wrap items-center space-x-5 mt-2 md:mt-0">
            <li>
              {" "}
              <Link
                to="/information"
                className="text-lg md:text-2xl font-light"
              >
                {" "}
                Advertise
              </Link>
            </li>
            <li>
              <li>
                <Link to="/login" className="px-4 py-2 border-2 rounded-lg ">
                  Login
                </Link>
              </li>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col items-center justify-start flex-grow text-left p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center items-center md:mt-0 mt-3 md:inline-block hidden">
            Welcome to Zamato
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-4  md:inline-block hidden">
            Discover the best dishes near you
          </p>
          <p className="mt-2 md:inline-block hidden">
            And get ads worth INR 1500. Valid for new restaurant partners in
            select cities.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="/login"
              className="w-full md:w-auto px-4 py-3 rounded-lg font-light bg-[#554FF6] text-white hover:bg-blue-800 text-center"
            >
              Register your restaurant
            </Link>
            <Link
              to="/login"
              className="w-full md:w-auto px-4 py-3 font-light bg-white border-2 text-black rounded-lg"
            >
              Login to view your existing restaurants
            </Link>
          </div>
          <p className="mt-4">Need help? Contact 98-38-38-38-38</p>
          <div className="bg-slate-100 p-5 text-black w-full md:w-1/2 h-auto flex flex-col justify-center items-center mt-20 md:mt-40 rounded-md shadow-2xl">
            <div className="flex flex-col text-center font-light">
              <h1 className="text-2xl">Get started with online ordering</h1>
              <h1>Please keep the documents ready for a smooth signup</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-4 space-y-4 md:space-y-0 md:space-x-20">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-2 items-center">
                  <FaArrowRight className="mt-1" />
                  <h1>FSSAI license copy (apply now)</h1>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <FaArrowRight className="mt-1" />
                  <h1>Regular GSTIN (apply now)</h1>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <FaArrowRight className="mt-1" />
                  <h1>Your restaurant menu</h1>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-2 items-center">
                  <FaArrowRight className="mt-1" />
                  <h1>PAN card copy</h1>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <FaArrowRight className="mt-1" />
                  <h1>Bank account details</h1>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <FaArrowRight className="mt-1" />
                  <h1>Dish images for top 5 items</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-screen mt-5 text-black flex flex-col items-center bg-slate-100 py-10">
            <h1 className="text-center text-xl font-bold">
              Why should you partner with Zomato?
            </h1>
            <p className="text-center mt-2 p-4">
              Zomato enables you to get 60% more revenue, 10x new customers, and
              boost your brand
            </p>
            <p className="p-4">
              visibility by providing insights to improve your business.
            </p>
            <div className=" h-auto md:w-full max-w1/2  flex flex-col sm:flex-row flex-wrap justify-center space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-6 mt-10 ">
              <div className="flex flex-row items-center p-10 shadow-2xl space-x-4 bg-white w-full sm:w-auto rounded-md">
                <GiWorld />
                <div className="flex flex-col">
                  <h1 className="text-lg font-medium">1000+ cities</h1>
                  <h1 className="text-sm">in India</h1>
                </div>
              </div>
              <div className="flex flex-row items-center p-10 shadow-2xl space-x-4 bg-white w-full sm:w-auto rounded-md">
                <GiWorld />
                <div className="flex flex-col">
                  <h1 className="text-lg font-medium">3 lakh+</h1>
                  <h1 className="text-sm">restaurant listings</h1>
                </div>
              </div>
              <div className="flex flex-row items-center p-10 shadow-2xl space-x-4 bg-white w-full sm:w-auto rounded-md">
                <GiWorld />
                <div className="flex flex-col">
                  <h1 className="text-lg font-medium">5.0 crore+</h1>
                  <h1 className="text-sm">monthly orders</h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h- md:h lg:h-80 mb-6 w-screen text-black "
            style={pradeep}
          >
            <div className="flex justify-center  items-center text-center mt-[13%] "></div>
            <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-8 px-4">
              <div className="flex flex-col justify-center items-center text-center space-y-3 p-4  shadow-2xl bg-white rounded-lg w-full max-w-sm md:max-w-xs">
                <img src={small2} alt="" className="mb-3" />
                <div className="space-y-1">
                  <h1 className="text-lg md:text-xl font-semibold">Step 1</h1>
                  <h1 className="text-base md:text-lg text-gray-400">
                    Create your page on Zomato
                  </h1>
                  <h1 className="text-base md:text-lg text-gray-400">
                    Help users discover your place by
                  </h1>
                  <h1 className="text-base md:text-lg text-gray-400">
                    creating a listing on Zomato
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center space-y-3 p-4 shadow-2xl bg-white rounded-lg w-full max-w-sm md:max-w-xs">
                <img src={small2} alt="" className=" mb-3" />
                <div className="space-y-1">
                  <h1 className="text-lg md:text-xl font-semibold">Step 2</h1>
                  <h1 className="text-base md:text-lg text-gray-400 ">
                    Register your restaurant
                  </h1>
                  <h1 className="text-base md:text-lg text-gray-400 ">
                    Fill out the required details
                  </h1>
                  <h1 className="text-base md:text-lg text-gray-400 ">
                    and submit the necessary documents
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center space-y-3 p-4 shadow-2xl bg-white rounded-lg w-full max-w-sm md:max-w-xs">
                <img src={small2} alt="" className=" mb-3" />
                <div className="space-y-1">
                  <h1 className="text-lg md:text-xl font-semibold">Step 3</h1>
                  <h1 className="text-base md:text-lg text-gray-400">
                    Start receiving orders
                  </h1>
                  <h1 className="text-base md:text-lg text-gray-400">
                    Once approved, you can start
                  </h1>
                  <h1 className="text-base md:text-lg text-gray-400">
                    receiving orders from customers
                  </h1>
                </div>
              </div>
            </div>
            {/* <div className="h-auto w-full flex flex-col justify-center items-center text-center py-10 space-y-4 md:space-y-6 mt-10">
              <div className="flex flex-col space-y-2">
                <h1 className="text-lg  md:text-2xl font-medium">
                  Already have your restaurant listed?
                </h1>
                <h1 className="text-base md:text-lg text-gray-400 flex justify-center ">
                  Search here and claim the ownership of your restaurant
                </h1>
              </div>
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x- ">
                <div className="flex flex-row items-center border-b border-gray-400 pb-2 md:pb-0 md:border-b-0 md:border-r md:pr-4">
                  <CiLocationOn className="text-xl md:text-2xl mr-2" />
                  <input
                    type="text"
                    placeholder="Nepal NPR"
                    className="md:border-b outline-none bg-transparent placeholder-gray-500 text-sm md:text-base"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search for your restaurant "
                  className="w-full md:w-auto border-b border-gray-400 outline-none placeholder-gray-500 text-sm md:text-base py-2 md:py-0 md:px-3 "
                />
              </div>
            </div>
            <div className="w-full  mt-auto flex justify-center py-6">
              <div className=" mt-20  md:w-2/3 flex flex-col  md:space-x-10 space-y-6 md:space-y-0">
                <h1 className="text-2xl font-medium flex justify-center">
                  our products
                </h1>
                <Slider {...settings}>
                  {product.map((p, index) => (
                    <div
                      key={index}
                      className=" border flex flex-col md:flex-col md:space-x-3 p-4  bg-white rounded-lg slider-container mt-4 "
                    >
                      <div className="flex justify-center items-center">
                        <img
                          className="max-w-full h-auto rounded"
                          src={p.img}
                          alt={p.text}
                        />
                      </div>

                      <div className="flex flex-col justify-center items-center text-center md:text-left space-y-2">
                        <p className="text-lg font-medium mt-2">{p.text}</p>
                        <div className="text-gray-600">{p.review}</div>
                        <div>
                          <Link
                            to="/nightlife"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-2"
                          >
                            {p.button}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="h-auto w-full flex justify-center p-4 mt-10">
              <div className="mt-20 w-full flex flex-col justify-center items-center">
                <h1 className="text-xl md:text-2xl text-center mb-6">
                  Our happy partners
                </h1>
                <div className="flex flex-col w-full bg-white rounded-lg space-y-7  md:w-3/4 lg:w-1/2 p-4">
                  <Slider {...productSetting}>
                    {Partner.map((p, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start space-x-4 p-5" // Adjust space-x-4 to your needs
                      >
                        <div className="flex md:flex-row flex-col ">
                          <div className="flex justify-center md:justify-start w-full md:w-1/3">
                            <img
                              src={p.img}
                              alt=""
                              className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain"
                            />
                          </div>
                          <div className="text-center md:text-left w-full md:w-2/3 mt-4 md:mt-0">
                            <p className="text-sm">{p.text}</p>
                            <p className="text-lg text-blue-600">{p.name}</p>
                            <p className="text-sm">{p.review}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="h-auto p-6 sm:p-8 md:p-10  items-start ml-[20%] ">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                What do you get on sign-up
              </h1>
              <div className="flex flex-col mt-4">
                <h1 className="text-sm sm:text-base md:text-lg">
                  Zomato Partner Platform helps you take your business to new
                  heights instantly with no hassle
                </h1>
                <h1 className="text-sm sm:text-base md:text-lg mt-2">
                  and 100% transparency! 1 Restaurant Partner
                </h1>
              </div>
              <div className="flex flex-col mt-6 space-y-6 ">
                <div className="flex flex-col">
                  <h1 className="text-base sm:text-lg md:text-xl font-semibold">
                    Restaurant Partner App
                  </h1>
                  <h1 className="text-sm sm:text-base md:text-lg text-gray-400">
                    Manage all your orders on your
                  </h1>
                  <h1 className="text-sm sm:text-base md:text-lg text-gray-400">
                    smartphone with our Android app
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-base sm:text-lg md:text-xl font-semibold ">
                    Restaurant Partner App
                  </h1>
                  <h1 className="text-sm sm:text-base md:text-lg text-gray-400">
                    Manage all your orders on your
                  </h1>
                  <h1 className="text-sm sm:text-base md:text-lg text-gray-400">
                    smartphone with our Android app
                  </h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-base sm:text-lg md:text-xl font-semibold">
                    Restaurant Partner App
                  </h1>
                  <h1 className="text-sm sm:text-base md:text-lg text-gray-400">
                    Manage all your orders on your
                  </h1>
                  <h1 className="text-sm sm:text-base md:text-lg text-gray-400">
                    smartphone with our Android app
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex h-full justify-center items-center mt-7 px-4">
              <div
                className="h-full md:w-2/3 w-full  p-6 sm:p-8 md:p-10 rounded-2xl bg-white shadow-lg text-white"
                style={nameMY}
              >
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                  Start your journey with Zomato
                </h1>
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl mt-2">
                  Create your restaurant page and register for online ordering
                </h1>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                  Start now
                </button>
              </div>
            </div>
            <div className="h-auto w-full flex flex-col items-center p-8 mt-8 ">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
                Frequently asked questions
              </h1>
              <div className="flex flex-col w-full max-w-5xl space-y-4">
                <div className="flex justify-between items-center border-2 rounded-md p-4">
                  <h1 className="text-sm sm:text-base md:text-lg">
                    What will Zomato charge me for creating a page on its
                    platform?
                  </h1>
                  <h1 onClick={handleclick}>
                    {isnavOpen ? (
                      <FiMenu className="text-lg sm:text-xl md:text-2xl" />
                    ) : (
                      <FiX className="text-lg sm:text-xl md:text-2xl" />
                    )}
                  </h1>
                </div>
                {isnavOpen && (
                  <div>
                    <h1 className="text-black">fldjfldfdl</h1>
                  </div>
                )}

                <div className="flex justify-between items-center border-2 rounded-md p-4">
                  <h1 className="text-sm sm:text-base md:text-lg">
                    What all documents are required for registering on online
                    ordering?
                  </h1>
                  <IoIosArrowForward className="text-lg sm:text-xl md:text-2xl" />
                </div>
                <div className="flex justify-between items-center border-2 rounded-md p-4">
                  <h1 className="text-sm sm:text-base md:text-lg">
                    I have a large fleet of delivery boys, why should I use
                    Zomato’s delivery service?
                  </h1>
                  <IoIosArrowForward className="text-lg sm:text-xl md:text-2xl" />
                </div>
                <div className="flex justify-between items-center border-2 rounded-md p-4">
                  <h1 className="text-sm sm:text-base md:text-lg">
                    What happens if the average order value of Zomato orders is
                    very low
                  </h1>
                  <IoIosArrowForward className="text-lg sm:text-xl md:text-2xl" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="md:mt-[15%] mt-[150%]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
