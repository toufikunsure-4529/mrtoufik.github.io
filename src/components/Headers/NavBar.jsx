import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function NavBar() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-[99]">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        {/* Logo here */}
        <div className="flex text-xl cursor-pointer items-center gap-2">
          <img
            src="https://toufikportfolio.netlify.app/favicon.png"
            className="h-8 w-8"
            alt="LOGO"
          />
          <span className="font-bold">Toufik Portfollio</span>
        </div>

        {/* menu icon */}

        <div
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isNavOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* nav meny menu */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0  transition-all bg-white duration-500 ease-in ${
            isNavOpen ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              className="font-semibold my-7 md:my-0 md:ml-8 hover:text-red-600 transition-all duration-200 ease-in"
              key={link.name}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
          <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static font-semibold">
            Contact Me
          </button>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
