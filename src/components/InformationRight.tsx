import React from "react";
import { Link } from "react-router-dom";
import { infoData } from "./InformationData";

export const InformationRight = () => {
  return (
    <div className="md:w-[40%]">
      {infoData.map((info) => (
        <div
          key={info.id}
          className="p-4 md:flex border-b border-b-gray-300 hover:bg-stone-300"
        >
          <img
            src={info.desktopImg}
            alt={info.title}
            className="hidden md:flex md:w-[35%] drop-shadow-lg"
          />
          <img
            src={info.mobileImg}
            alt={info.title}
            className="w-full md:hidden"
          />
          <div className="pl-4 pt-4 md:w-[65%] md:items-center">
            <h3 className="pb-4 font-bold text-xl text-gray-700">
              {info.title}
            </h3>
            <p className="pb-4 text-gray-600">{info.description}</p>
            <Link
              to={`/information/${info.slug}`}
              className="text-blue-500 pb-4"
            >
              {info.linkText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
