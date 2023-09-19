import React, { useState } from "react";

export const Header = () => {
  let [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="h-16 w-full bg-[rgb(1,76,254)] flex flex-wrap items-center transition-all duration-100 px-4 md:px-16">
      <div className="flex items-center w-full justify-between mx-2">
        <div>
          <a
            href="/"
            className="text-white font-bold text-lg flex items-center gap-3"
          >
            <img
              src="https://w7.pngwing.com/pngs/261/561/png-transparent-computer-icons-online-chat-computer-software-sales-chatbox-ribbon-rectangle-online-chat.png"
              alt=""
              className="w-8 h-8 rounded-xl"
            />{" "}
            Chatbox
          </a>
        </div>
        {/* <!-- only for large devices --> */}
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#feature" className="text-white hover:text-gray-300">
            Feature
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            About US
          </a>
          <a href="#download" className="text-white hover:text-gray-300">
            Download
          </a>
        </div>
        {/* <!-- menu btn, only displayed on mobile --> */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-white text-2xl"
            onClick={toggleMenu}
          >
            &#8801;
          </button>
        </div>

        {/* <!-- mobile menu --> */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute ml-[-24px] w-full flex flex-col items-center z-20 transition-all duration-500 ease-in ${
            open ? "top-16 bg-blue-500" : "top-[-490px] bg-slate-500"
          }`}
        >
          <a href="#home" className="block text-white py-2 mt-3 hover:bg-gray-700">
            Home
          </a>
          <a href="#feature" className="block text-white py-2 hover:bg-gray-700">
            Feature
          </a>
          <a href="#about" className="block text-white py-2 hover:bg-gray-700">
            About US
          </a>
          <a href="#download" className="block text-white py-2 hover:bg-gray-700">
            Download
          </a>
        </div>
        <div className="bg-white border-2 border-white py-1 px-2 rounded-full hidden md:block">
          <button className="font-medium text-blue-600">Try For Free</button>
        </div>
      </div>
    </div>
  );
};
