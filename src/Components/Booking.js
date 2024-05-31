
import React, { useState } from "react";
import img1 from "./Assets/4.jpg";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject } = formData;

    // Simple validation
    if (name && email && subject) {
      alert("Your Appointment has been Booked");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="relative">
        <img alt="" className="h-[500px] w-full object-cover" src={img1} />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 text-center transform -translate-y-1/2 ml-[60px] lg:ml-[250px] -mt-[90px] sm:m-auto sm:ml-[170px] md:ml-[240px] xl:ml-[380px]">
          <h1 className="text-white font-bold lg:text-6xl text-3xl">
            Book An Appointment
          </h1>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center mb-9 m-auto mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center sm:p-9 p-3 md:p-10 bg-purple-950 bg-opacity-90 shadow-2xl rounded-lg w-full max-w-lg"
        >
          <h1 className="font-bold text-xl md:text-2xl text-center mb-5 text-white">
            Book Your Appointment in Just Seconds!
          </h1>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="h-12 w-[300px] sm:w-full p-4 mb-4 md:mb-8 rounded border border-gray-300"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="h-12 w-[300px] sm:w-full p-4 mb-4 md:mb-8 rounded border border-gray-300"
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="h-12 w-[300px] sm:w-full p-4 mb-4 md:mb-5 rounded border border-gray-300"
          />
          <div className="text-base w-[300px] sm:w-full xl:text-lg mb-4 md:mb-5 text-white">
            Select your Barber:
            <select className="w-full p-2 bg-black border rounded-md focus:border-indigo-600">
              <option>Jack</option>
              <option>Malton</option>
              <option>Jordon</option>
            </select>
          </div>
          <div className="text-base w-[300px] sm:w-full xl:text-lg mt-1 mb-4 md:mb-5 text-white">
            Select your Payment Method:
            <select className="w-full p-2 bg-black border rounded-md focus:border-indigo-600">
              <option>Easypaisa</option>
              <option>Jazzcash</option>
              <option>Online Banking</option>
              <option>Debit Card</option>
            </select>
          </div>
          <button
            type="submit"
            className="button w-[300px] sm:w-full bg-indigo-600 text-white py-2 rounded"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
