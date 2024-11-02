import React from "react";

export const Nav = () => {
  return (
    <header className="flex justify-around md:justify-between items-center px-6 min-h-16 bg-white drop-shadow-lg ">
      <a href="/" className="flex">
        <img className="flex" src="/src/assets/ic-logo.svg" alt="" />
        <div className="hidden md:flex subpixel-antialiased text-lg">
          <span className="font-extrabold">COLMAR</span>
          <span className="text-gray-600">ACADEMY</span>
        </div>
      </a>

      {/* <!-- Mobile Nav --> */}
      <a className="flex-shrink-0 md:hidden">
        <img
          src="/src/assets/ic-on-campus.svg"
          alt="campus"
          className="min-h-[32px]"
        />
      </a>
      <a className="flex md:hidden">
        <img
          src="/src/assets/ic-online.svg"
          alt="online"
          className="min-h-[32px]"
        />
      </a>
      <a className="flex md:hidden">
        <img
          src="/src/assets/ic-login.svg"
          alt="login"
          className="min-h-[32px]"
        />
      </a>

      {/* <!-- Desktop Nav --> */}
      <nav className="hidden md:flex gap-x-4 ">
        <a className="" href="onCampus">
          On Campus
        </a>
        <a className="" href="#">
          Online
        </a>
        <a className="" href="#">
          Tour companies
        </a>
        <a className="" href="#">
          Sign in
        </a>
      </nav>
    </header>
  );
};
