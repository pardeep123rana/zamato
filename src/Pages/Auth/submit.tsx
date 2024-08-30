import React, { useState } from "react";
import pradepp from "../../assets/anotherpage/short.png";

const Photo = {
  backgroundImage: `url(${pradepp})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
};

const Submit: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    city: "",
    name: "",
    email: "",
    phoneNumber: ""
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    const { city, name, email, phoneNumber } = formData;

    fetch(
      `https://zamatofirebasewebsite-default-rtdb.firebaseio.com/userDataRecord.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          city,
          name,
          email,
          phoneNumber
        })
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(alert("data submited sucessfully"), data);
        // Optionally, reset form fields here
        setFormData({
          city: "",
          name: "",
          email: "",
          phoneNumber: ""
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div
        className="h-auto w-full flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-6 md:space-y-0 md:mt-10 md:py-10 px-10"
        style={Photo}
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0 ">
          <h1 className="text-2xl font-light mb-2">Want to know more?</h1>
          <h1 className="font-light">
            Please leave your contact details here and we'll get back
          </h1>
          <h1 className="text font-light">to you within 24 hours</h1>
        </div>
        <div className="w-full max-w-md flex flex-col space-y-4">
          <h1 className="text-center font-light">Your contact details</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="border p-2 rounded w-full"
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              className="border p-2 rounded w-full"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="border p-2 rounded w-full"
              type="email" // Changed to email type
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="border p-2 rounded w-full"
              type="tel" // Changed to tel type
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-red-400 text-white p-2 rounded w-full hover:bg-red-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Submit;
