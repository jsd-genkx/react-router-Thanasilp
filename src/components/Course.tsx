import React from "react";

export const Course = () => {
  return (
    <section
      id="course"
      className="py-8 md:bg-stone-300 bg-stone-100 max-w-[1440px] mx-auto md:px-8"
    >
      <h2 className="text-center text-4xl font-bold mb-8">Start learning</h2>
      <div className="mx-auto text-gray-700">
        <ul className="grid gap-4 md:gap-8 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-stretch drop-shadow-lg">
          <li className="bg-stone-300 p-6 md:p-0 text-left text-xl font-bold hover:bg-stone-400 transition md:bg-white md:hover:bg-stone-200">
            <img
              src="/src/assets/course-software.jpg"
              alt=""
              className="hidden md:flex w-full"
            />
            <div className="md:px-4 md:pt-4 md:pb-2">
              <h3 id="software-engineering" className="md:pb-4">
                Software engineering
              </h3>
              <div className="hidden md:inline-flex md:text-base md:font-normal md:flex-col text-gray-500">
                <p className="pb-4">COURSES</p>
                <p className="pb-4">
                  Web Development, Mobile Development, iOT, APIs
                </p>
              </div>
            </div>
          </li>

          <li className="bg-stone-300 p-6 md:p-0 text-left text-xl font-bold hover:bg-stone-400 transition md:bg-white md:hover:bg-stone-200">
            <img
              src="/src/assets/course-computer-art.jpg"
              alt=""
              className="hidden md:flex w-full"
            />
            <div className="md:px-4 md:pt-4 md:pb-2">
              <h3 id="software-engineering" className="md:pb-4">
                Computer Art
              </h3>
              <div className="hidden md:inline-flex md:text-base md:font-normal md:flex-col text-gray-500">
                <p className="pb-4">COURSES</p>
                <p className="pb-4">
                  Imaging & Deisgn, Web Design, Motion Graphics & Visual
                  Effects, Computer Animation
                </p>
              </div>
            </div>
          </li>

          <li className="bg-stone-300 p-6 md:p-0 text-left text-xl font-bold hover:bg-stone-400 transition md:bg-white md:hover:bg-stone-200">
            <img
              src="/src/assets/course-design.jpg"
              alt=""
              className="hidden md:flex w-full"
            />
            <div className="md:px-4 md:pt-4 md:pb-2">
              <h3 id="software-engineering" className="md:pb-4">
                Design
              </h3>
              <div className="hidden md:inline-flex md:text-base md:font-normal md:flex-col text-gray-500">
                <p className="pb-4">COURSES</p>
                <p className="pb-4">
                  User Experience Design, User Research, Visual Design
                </p>
              </div>
            </div>
          </li>

          <li className="bg-stone-300 p-6 md:p-0 text-left text-xl font-bold hover:bg-stone-400 transition md:bg-white md:hover:bg-stone-200">
            <img
              src="/src/assets/course-data.jpg"
              alt=""
              className="hidden md:flex w-full"
            />
            <div className="md:px-4 md:pt-4 md:pb-2">
              <h3 id="software-engineering" className="md:pb-4">
                Data
              </h3>
              <div className="hidden md:inline-flex md:text-base md:font-normal md:flex-col text-gray-500">
                <p className="pb-4">COURSES</p>
                <p className="pb-4">
                  Data Science, Big Data, SQL, Data Visualisation
                </p>
              </div>
            </div>
          </li>

          <li className="bg-stone-300 p-6 md:p-0 text-left text-xl font-bold hover:bg-stone-400 transition md:bg-white md:hover:bg-stone-200">
            <img
              src="/src/assets/course-business.jpg"
              alt=""
              className="hidden md:flex w-full"
            />
            <div className="md:px-4 md:pt-4 md:pb-2">
              <h3 id="software-engineering" className="md:pb-4">
                Business
              </h3>
              <div className="hidden md:inline-flex md:text-base md:font-normal md:flex-col text-gray-500">
                <p className="pb-4">COURSES</p>
                <p className="pb-4">
                  Analytics, Content Marketing, Mobile Marketing
                </p>
              </div>
            </div>
          </li>

          <li className="bg-stone-300 p-6 md:p-0 text-left text-xl font-bold hover:bg-stone-400 transition md:bg-white md:hover:bg-stone-200">
            <img
              src="/src/assets/course-marketing.jpg"
              alt=""
              className="hidden md:flex w-full"
            />
            <div className="md:px-4 md:pt-4 md:pb-2">
              <h3 id="software-engineering" className="md:pb-4">
                Marketing
              </h3>
              <div className="hidden md:inline-flex md:text-base md:font-normal md:flex-col text-gray-500">
                <p className="pb-4">COURSES</p>
                <p className="pb-4">
                  Web Development, Mobile Development, iOT, APIs
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
