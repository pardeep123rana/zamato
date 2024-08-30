import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import backimage from "../../assets/background.zamato/backgroundhero.jpg";
import { MdOutlineCancelPresentation, MdEmail } from "react-icons/md";
import { FaGooglePlus } from "react-icons/fa";

const Login: React.FC = () => {
  const style = {
    backgroundImage: `url(${backimage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Check sessionStorage for the visibility state when the component mounts
  useEffect(() => {
    const savedVisibility = sessionStorage.getItem("isVisible");
    if (savedVisibility !== null) {
      setIsVisible(JSON.parse(savedVisibility));
    }
  }, []);

  // Save visibility state to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("isVisible", JSON.stringify(isVisible));
  }, [isVisible]);

  // Reset visibility when the component is navigated to
  useEffect(() => {
    if (location.pathname === "/login") {
      // Use your login path here
      setIsVisible(true);
    }
  }, [location]);

  if (!isVisible) {
    return null;
  }

  const handleCancel = () => {
    const currentPath = location.pathname; // Save the current path
    sessionStorage.setItem("previousPath", currentPath); // Save the current path to sessionStorage
    setIsVisible(false);
    navigate("/"); // Navigate back to the home page
  };

  useEffect(() => {
    const previousPath = sessionStorage.getItem("previousPath");
    if (previousPath) {
      navigate(previousPath); // Navigate back to the previous path if it exists
      sessionStorage.removeItem("previousPath"); // Clean up the stored path
    }
  }, []);

  const [loginData, setLoginData] = useState({
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(loginData);
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={style}
    >
      <div className="absolute inset-0 backdrop-blur-lg"></div>
      <div className="relative bg-white p-5 w-full max-w-md mx-4 sm:mx-8 md:mx-auto rounded-md shadow-lg space-y-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-lg font-semibold">Login</h1>
          <button
            onClick={handleCancel}
            className="text-gray-600 hover:text-gray-800"
          >
            <MdOutlineCancelPresentation size={24} />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row justify-center items-center space-x-2 border-b rounded"
        >
          <h1>+977</h1>
          <input
            type="number"
            name="phone"
            placeholder="phone"
            className="rounded p-2 w-full outline-none"
            onChange={handleChange}
            value={loginData.phone}
          />
        </form>

        <div className="flex justify-center items-center bg-red-500 hover:bg-red-600 text-white py-2 rounded cursor-pointer">
          <button type="submit">Send One Time Password</button>
        </div>

        <div className="text-center">
          <h1>or</h1>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2 cursor-pointer">
          <MdEmail size={24} />
          <h1>Continue with Email</h1>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2 cursor-pointer">
          <FaGooglePlus size={24} />
          <h1>Continue with Google</h1>
        </div>
        <hr />
        <div className="text-center">
          <h1>
            New to Zomato?{" "}
            <span className="text-red-500 cursor-pointer">Create account</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
