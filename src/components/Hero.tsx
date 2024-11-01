import React from "react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-[1440px] mx-auto md:flex py-8 px-6 bg-stone-300 w-full items-center"
    >
      <img src="/src/assets/banner.jpg" alt="" className="md:w-[60%]" />
      <div className="md:w-[33%] md:ml-6">
        <h1 className="text-5xl text-gray-700 py-8 font-bold">
          Learn something new everyday
        </h1>
        <p className="text-base pb-6 font-bold text-gray-700">
          Lorem upsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-gray-600 hover:bg-stone-400 hover:text-gray-800 text-white py-2 w-full">
          Start here
        </button>
      </div>
    </section>
  );
};
