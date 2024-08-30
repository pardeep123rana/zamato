import React, { useState } from "react";
import Backimage from "../../assets/background.zamato/backanother.jpg";
import logo from "../../assets/zamato.logo/zamato.png";
import bowl from "../../assets/zamato.logo/bowl.jpg";
import mobile1 from "../../assets/mobileimage/viber_image_2024-07-26_06-51-05-503.png";
import mobile2 from "../../assets/mobileimage/viber_image_2024-07-26_06-52-17-977.png";
import google from "../../assets/anotherpage/9f0c85a5e33adb783fa0aef667075f9e1556003622.png";
import appstore from "../../assets/anotherpage/23e930757c3df49840c482a8638bf5c31556001144.png";
import Footer from "../../Component/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { products } from "../../Component/products";
import { Partner } from "../../Component/partner";
import Submit from "../Auth/submit";

const Information: React.FC = () => {
  const style = {
    backgroundImage: `url(${Backimage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  const productSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Updated state to handle email and phone
  const [formData, setFormData] = useState({
    email: "",
    phone: ""
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Data submitted successfully:", formData);
    // Add your submission logic here
  };
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const handlehover = () => {
    setHoverIndex(null);
  };

  return (
    <>
      <div className="h-[550px] w-full text-white" style={style}>
        <nav className="flex flex-row justify-around text-center items-center md:p-4">
          <div>
            <img
              className="h-9 md:h-13 md:inline-block hidden "
              src={logo}
              alt="Zomato Logo "
            />
          </div>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ">
            <Link to="/hero" className="text-lg hidden md:inline-block">
              Zomato for Work
            </Link>
            <li className="text-lg hidden md:inline-block">Add a Restaurant</li>
            <Link to="/contact" className="text-lg hidden md:inline-block">
              Contact Us
            </Link>
          </ul>
        </nav>
        <div className="flex flex-col justify-start p-4 md:p-6 lg:p-8 mt-[7%] ml-[15%] ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            Advertise on Zomato
          </h1>
          <h2 className="text-sm md:text-lg lg:text-md mb-1">
            For every marketing dollar spent,
          </h2>
          <h2 className="text-sm md:text-lg lg:text-md mb-1">
            Zomato returns over 8x the
          </h2>
          <h2 className="text-sm md:text-lg lg:text-md mb-4">investment</h2>
          <button className="px-2 py-2 max-w-[150px] bg-red-400 hover:bg-red-500 rounded-md text-white font-light">
            Ready to Start
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 ">
        <h1 className="text-2xl md:inline-block hidden">
          12,000 restaurants already advertise on Zomato
        </h1>
      </div>

      <div className="h-screen w-full flex flex-col justify-center items-center py-5">
        <h1 className="text-2xl ">Why advertise on Zomato?</h1>
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center md:space-x-[10%] space-y-5 md:space-y-0 mt-">
          <div className="">
            {products.map((p, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <h1 className="text-xl md:text-2xl font-light">{p.text}</h1>
                <p className="font-light text-gray-400 md:text-base">{p.p}</p>
                <p className="font-light text-gray-400 md:text-base">{p.b}</p>
                <p className="font-light text-gray-400 md:text-base">{p.c}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 md:mt-0 ">
            <img
              src={bowl}
              alt="Bowl"
              className="md:max-w-full h-auto p-2 size-50"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-6 md:mt-0 mt-[30%]">
        <h1 className="text-2xl text-center">How to advertise on Zomato?</h1>
        <div className="mt-6 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={mobile1}
              alt="Mobile"
              className="max-w-full h-auto md:inline-block hidden"
            />
          </div>
          <div className="flex flex-col justify-center items-center p-6">
            <div className="mt-6 flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 flex justify-center">
                <img src={mobile1} alt="Mobile" className="max-w-full h-auto" />
              </div>
              <div className="flex flex-col items-center justify-center w-full lg:w-1/2 mt-6 lg:mt-0">
                <h1 className="text-left text-lg">Drive Users to You</h1>
                <div className="flex flex-col items-start">
                  <h1 className="text-left font-light text-gray-500">
                    Generate guaranteed visits to your page via
                  </h1>
                  <h1 className="text-left font-light text-gray-500">
                    search ads on our web and mobile platform.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 justify-center items-center p-5">
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-xl lg:text-2xl font-light">
            Own Your Category
          </h1>
          <h1 className="text-sm md:text-light">
            Boost your placement within relevant collections for your
          </h1>
          <h1 className="text-sm md:text-light">brand.</h1>
        </div>
        <div className="flex justify-center md:justify-start">
          <img
            src={mobile2}
            alt="Mobile"
            className="h-auto w-24 md:w-48 lg:w-64 object-contain"
          />
        </div>
      </div>

      <div className="h-auto w-full flex justify-center p-10 mt-10">
        <div className="mt-20 w-full flex flex-col justify-center items-center">
          <h1 className="text-xl md:text-2xl text-center mb-6">
            Our Happy Partners
          </h1>
          <div className="flex flex-col bg-white rounded-lg space-y-7 w-full md:w-3/4 lg:w-1/2 p-4">
            <Slider {...productSetting}>
              {Partner.map((p, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 p-5"
                >
                  <div className="flex md:flex-row flex-col">
                    <div className="flex justify-center md:justify-start w-full md:w-1/3">
                      <img
                        src={p.img}
                        alt="Partner"
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

      <Submit />

      <div className="w-full max-w-5xl mx-auto">
        <div className="mt-8 w-full flex flex-col md:flex-row justify-center items-center md:space-x-[20%] space-y-4 md:space-y-0 md:pr-[10%] px-10 p-7">
          <div>
            <img
              className="h-60 w-60 md:h-[650px] md:w-[650px] object-contain"
              src={mobile2}
              alt="Zomato App"
            />
          </div>
          <div className="w-full max-w-md flex flex-col text-center md:text-left space-y-4 md:space-y-6">
            <div className="space-y-2">
              <h1 className="text-xl md:text-2xl">Get the Zomato App</h1>
              <h1 className="text-sm md:text-base">
                We will send you a link, open it on your phone to
              </h1>
              <h1 className="text-sm md:text-base">download the app</h1>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-2 w-full md:w-3/1"
              >
                <label htmlFor="email" className="text-sm md:text-base">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  value={formData.email} // Corrected to match state key
                  name="email"
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="border p-2 rounded w-full"
                />
                <label htmlFor="phone" className="text-sm md:text-base mt-2">
                  Phone
                </label>
                <input
                  onChange={handleChange}
                  value={formData.phone} // Corrected to match state key
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  id="phone"
                  className="border p-2 rounded w-full"
                />
                <button
                  type="submit"
                  className="mt-4 bg-red-400 text-white p-2 rounded hover:bg-red-500 w-full md:w-auto"
                >
                  Share App Link
                </button>
              </form>
            </div>

            <div className="mt-6">
              <h1 className="text-lg">Download the app from</h1>
            </div>

            <div className="flex justify-center space-x-4">
              <img
                src={google}
                alt="Google Play Store"
                className="w-32 h-auto md:w-36 md:h-auto object-contain"
              />
              <img
                src={appstore}
                alt="App Store"
                className="w-32 h-auto md:w-36 md:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Information;
