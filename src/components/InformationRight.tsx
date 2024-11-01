import React from "react";

const infoData = [
  {
    id: 1,
    desktopImg: "/src/assets/information-orientation.jpg",
    mobileImg: "/src/assets/information-orientation-mobile.jpg",
    title: "Orientation date",
    description: "Tue 10/11 & Wed 10/12: 8am - 3pm",
    linkText: "Read more",
  },
  {
    id: 2,
    desktopImg: "/src/assets/information-campus.jpg",
    mobileImg: "/src/assets/information-campus-mobile.jpg",
    title: "Our campus",
    description: "Find which campus is close to you",
    linkText: "Read more",
  },
  {
    id: 3,
    desktopImg: "/src/assets/information-guest-lecture.jpg",
    mobileImg: "/src/assets/information-guest-lecture-mobile.jpg",
    title: "Special guest lecture",
    description:
      "Join a keynote with Oliver Sack about music in medical treatment",
    linkText: "Read more",
  },
];

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
            <a href="#" className="text-blue-500 pb-4">
              {info.linkText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
