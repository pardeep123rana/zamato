import React, { useState } from "react";
import backimage from "../../assets/background.zamato/backgroundhero.jpg";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const style = {
  backgroundImage: `url(${backimage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
};

const Signup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsVisible(false);
    navigate("/");
  };
  if (!isVisible) return null;

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password } = signupData;

    fetch(
      "https://zamatofirebasewebsite-default-rtdb.firebaseio.com/signupdata.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to submit data");
        }
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Your data has been submitted successfully!");
        setSignupData({
          username: "",
          email: "",
          password: ""
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "An error occurred while submitting your data. Please try again."
        );
      });

    // Add your signup logic here
    console.log(signupData);
  };

  return (
    <div
      className="relative flex justify-center items-center h-screen w-screen text-white"
      style={style}
    >
      <div className="absolute inset-0 backdrop-blur-lg bg-black bg-opacity-50 z-0"></div>
      <div className="relative z-10 bg-white p-8 shadow-lg rounded-md text-black w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/3">
        <div className="flex justify-between">
          <h1 className="text-2xl mb-6 font-bold">Sign Up</h1>
          <button
            onClick={handleCancel}
            className="text-gray-600 hover:text-gray-800"
          >
            <MdOutlineCancelPresentation size={24} />
          </button>
        </div>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-3 border rounded-md"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={signupData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 border rounded-md"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={signupData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 border rounded-md"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={signupData.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full p-3 bg-red-500 hover:bg-red-600 text-white rounded-md"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
