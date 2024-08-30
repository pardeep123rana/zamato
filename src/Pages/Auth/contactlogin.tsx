import React, { useState } from "react";
import { GoChevronUp } from "react-icons/go";
import { IoChevronBackSharp } from "react-icons/io5";
import { plate } from "../../Component/dish";
import {
  FaQuestionCircle,
  FaExclamationCircle,
  FaBug,
  FaCommentDots,
  FaEllipsisH
} from "react-icons/fa";

interface FormValues {
  Name: string;
  Email: string;
  Additional: string;
  phone: string;
  message: string;
  remember: boolean;
}

const Contactlogin: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dataShow, setDataShow] = useState<string>("");
  const [value, setValue] = useState<FormValues>({
    Name: "",
    Email: "",
    Additional: "",
    phone: "",
    message: "",
    remember: false
  });

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDataToggle = (data: string) => {
    setDataShow(data);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="h-auto flex flex-col md:flex-row items-center justify-around space-y-5 md:space-y-0 md:space-x-5 px-5 md:px-10 py-9">
      <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
        <div className="w-full md:w-[600px] border-2 p-3 rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleOpen}
          >
            <h1 className="text-lg font-semibold">
              {dataShow || "How we can help you"}
            </h1>
            {isOpen ? <IoChevronBackSharp /> : <GoChevronUp />}
          </div>
          {isOpen && (
            <div className="mt-2 space-y-2 border p-4 md:p-6 lg:p-8">
              <div
                className="cursor-pointer flex items-center hover:text-blue-500 transition-colors duration-200"
                onClick={() =>
                  handleDataToggle("I need help with my Zomato online order.")
                }
              >
                <FaQuestionCircle className="mr-2" />I need help with my Zomato
                online order.
              </div>
              <div
                className="cursor-pointer flex items-center hover:text-blue-500 transition-colors duration-200"
                onClick={() =>
                  handleDataToggle(
                    "I found incorrect/outdated information on a page."
                  )
                }
              >
                <FaExclamationCircle className="mr-2" />I found
                incorrect/outdated information on a page.
              </div>
              <div
                className="cursor-pointer flex items-center hover:text-blue-500 transition-colors duration-200"
                onClick={() =>
                  handleDataToggle(
                    "The website/app are not working the way they should."
                  )
                }
              >
                <FaBug className="mr-2" />
                The website/app are not working the way they should.
              </div>
              <div
                className="cursor-pointer flex items-center hover:text-blue-500 transition-colors duration-200"
                onClick={() =>
                  handleDataToggle("I would like to give feedback/suggestions.")
                }
              >
                <FaCommentDots className="mr-2" />I would like to give
                feedback/suggestions.
              </div>
              <div
                className="cursor-pointer flex items-center hover:text-blue-500 transition-colors duration-200"
                onClick={() => handleDataToggle("other")}
              >
                <FaEllipsisH className="mr-2" />
                other
              </div>
            </div>
          )}
          <div className="mt-3 space-y-3">
            <div className="relative flex flex-col">
              <input
                id="fullName"
                name="Name"
                className="peer w-full p-2 border border-gray-300 rounded outline-none"
                type="text"
                placeholder=" "
                onChange={handleChange}
                value={value.Name}
              />
              <label
                htmlFor="fullName"
                className="absolute top-2 left-3 text-gray-500 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
              >
                Full Name
              </label>
            </div>
            <div className="relative flex flex-col">
              <input
                id="emailAddress"
                name="Email"
                className="peer w-full p-2 border border-gray-300 rounded outline-none"
                type="email"
                placeholder=" "
                onChange={handleChange}
                value={value.Email}
              />
              <label
                htmlFor="emailAddress"
                className="absolute top-2 left-3 text-gray-500 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
              >
                Email Address
              </label>
            </div>
            <div className="relative flex flex-col">
              <input
                id="additionalInfo"
                name="Additional"
                className="peer w-full p-2 border border-gray-300 rounded outline-none"
                type="text"
                placeholder=" "
                onChange={handleChange}
                value={value.Additional}
              />
              <label
                htmlFor="additionalInfo"
                className="absolute top-2 left-3 text-gray-500 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
              >
                Additional Info
              </label>
            </div>
            <div className="relative flex flex-col">
              <input
                id="mobileNumber"
                name="phone"
                className="peer w-full p-2 border border-gray-300 rounded outline-none"
                type="tel"
                placeholder=" "
                onChange={handleChange}
                value={value.phone}
              />
              <label
                htmlFor="mobileNumber"
                className="absolute top-2 left-3 text-gray-500 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
              >
                Mobile Number
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div>
            <label htmlFor="messageInput" className="text-gray-700 mb-2">
              Message
            </label>
            <input
              id="messageInput"
              name="message"
              type="text"
              placeholder="Enter your message here"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm outline-none transition duration-150 ease-in-out"
              onChange={handleChange}
              value={value.message}
            />
            <p className="mt-1 text-sm text-gray-500">
              Your message will be sent to our team.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="rememberMe"
              name="remember"
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
              onChange={handleChange}
              checked={value.remember}
            />
            <label htmlFor="rememberMe" className="text-gray-700 text-sm">
              Remember my message
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-red-500 p-3 rounded-md hover:bg-red-600"
          >
            Submit the feedback
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  gap-6">
          {plate.map((p, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <img
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                  src={p.img}
                  alt={p.text}
                />
              </div>
              {/* <h1 className="text-center mt-2">{p.text}</h1> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contactlogin;
