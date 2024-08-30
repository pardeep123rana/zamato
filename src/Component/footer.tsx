import React from "react";
import logo from "../assets/zamato.logo/zamato.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaGithubSquare
} from "react-icons/fa";
import google from "../assets/anotherpage/9f0c85a5e33adb783fa0aef667075f9e1556003622.png";
import playstore from "../assets/anotherpage/23e930757c3df49840c482a8638bf5c31556001144.png";

const Footer = () => {
  return (
    <div className="w-full p-10 bg-gray-800 text-white md:mt-0 mt-10">
      <div className="flex flex-col md:flex-row justify-around items-center mb-10">
        <div className="mb-5 md:mb-0">
          <img src={logo} alt="Zomato logo" className="w-32 h-auto" />
        </div>
        <div className="flex space-x-3">
          <button className="bg-gray-700 px-3 py-2 rounded">Nepal</button>
          <button className="bg-gray-700 px-3 py-2 rounded">English</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around space-y-5 md:space-y-0">
        <div className="flex flex-col space-y-3">
          <h1 className="text-lg font-semibold">About Zomato</h1>
          <h1>Who We Are</h1>
          <h1>Blog</h1>
          <h1>Work with Us</h1>
          <h1>Investor Relations</h1>
          <h1>Report Fraud</h1>
          <h1>Contact Us</h1>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="text-lg font-semibold">Our Products</h1>
          <h1>Customer Stories</h1>
          <h1>Pricing</h1>
          <h1>Security</h1>
          <h1>Integrations</h1>
          <h1>API</h1>
          <h1>Resources</h1>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="text-lg font-semibold">Legal</h1>
          <h1>Privacy Policy</h1>
          <h1>Terms of Service</h1>
          <h1>Cookie Policy</h1>
          <h1>Data Protection</h1>
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <h1 className="text-lg font-semibold">Follow Us</h1>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/">
              {" "}
              <FaFacebook />
            </a>
            <a href="https://x.com/i/flow/login">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en">
              {" "}
              <FaInstagramSquare />
            </a>
            <a href="https://github.com/">
              {" "}
              <FaGithubSquare />
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2 mt-3">
            <a href="https://www.google.com/">
              {" "}
              <img src={google} alt="Google Play" className="w-36 h-auto" />
            </a>
            <a href="https://play.google.com/store/games?device=windows">
              {" "}
              <img src={playstore} alt="Play Store" className="w-36 h-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
