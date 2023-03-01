/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios from "axios";

export default function Landing() {
  const [email, setEmail] = useState("");
  const handleRegister = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("click", email);

    let response = await axios.get(
      `http://localhost:8080/api/register?email=${email}`
    );
    setEmail("");

    // const response = await fetch("http://localhost:8080/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ email })
    // });

    const data = response.data;
    console.log(data);
  };
  return (
    <div className="flex justify-items-center items-center space-x-6 mx-auto">
      <div className="flex flex-col space-y-6">
        <p className="animate-bounce text-7xl font-extrabold dark:text-white font-bold font-mono">
          Launch Gen
        </p>
        {/* <img src="/img/landing.png" alt="landing" /> */}
        <p className="text-2xl  dark:text-white font-bold">
          Vercel is the platform for frontend developers, providing the speed
          <br />
          and reliability innovators need to create at the moment of
          inspiration.
        </p>

        <form className="w-[50%]" onSubmit={handleRegister}>
          <div className="relative">
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
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@lauchgen.com"
              required
            />
            <button
              type="submit"
              className="border-2 border-indigo-600 text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send email
            </button>
          </div>
        </form>
        <div className="space-x-4">
          <button className="border-2 border-indigo-600 rounded-lg px-6 py-4 bg-black text-white font-bold">
            Lorem Ipusum
          </button>
          <button className="  border-2 border-indigo-600 rounded-lg px-6 py-4 bg-white  font-bold">
            Lorem Ipusum
          </button>
        </div>
      </div>
      <div>
        <img src="/img/landing.png" alt="landing" className="max-md:hidden" />
      </div>
    </div>
  );
}
