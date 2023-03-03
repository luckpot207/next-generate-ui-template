/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios from "axios";

import "swiper/css";

const Landing_product = () => {
  const [email, setEmail] = useState("");
  const handleRegister = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("click", email);

    let response = await axios.get(
      `http://localhost:8080/api/register?email=${email}`
    );
    setEmail("");

    const data = response.data;
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-items-center items-center  mt-48">
      <h1 className="text-4xl font-bold mb-6 md: text-[28px] md:font-[900]">
        Join the Beta
      </h1>
      <form
        className="w-[30%] flex items-center space-x-6"
        onSubmit={handleRegister}
      >
        <div className="relative w-[70%]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <button
          type="submit"
          className="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Send email
          </span>
        </button>
      </form>
    </div>
  );
};

export default Landing_product;
