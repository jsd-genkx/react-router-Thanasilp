import React from "react";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-6 py-4 text-gray-600 text-sm border-t border-t-gray-300">
      <p>© 2020 Colmar Academy, Karl Jones</p>
      <div className="hidden md:flex">
        <a href="" className="ml-4">
          Terms
        </a>
        <a href="" className="ml-4">
          Privacy
        </a>
      </div>
    </footer>
  );
};
