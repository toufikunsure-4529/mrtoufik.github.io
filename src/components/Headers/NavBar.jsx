import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
=======
import React, { useState } from "react";
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe

function NavBar() {
  const Links = [
    { name: "Home", link: "/" },
<<<<<<< HEAD
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate=useNavigate()

  useEffect(() => {
    const handleScrollWindow = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScrollWindow);
    return () => {
      window.removeEventListener("scroll", handleScrollWindow);
    };
  }, []);

  return (
    <div
      className={`shadow-md w-full transition-transform duration-700 ease-in-out ${
        isSticky ? "sticky-nav slide-down" : "absolute top-0 left-0 z-[99]"
      }`}
    >
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        {/* Logo */}
        <div className="flex text-xl cursor-pointer items-center gap-2">
          <img src="/favicon.png" className="h-8 w-8" alt="LOGO" />
          <span className="font-bold test">Toufik Portfollio</span>
        </div>

        {/* Menu Icon */}
=======
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

>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
        <div
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isNavOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

<<<<<<< HEAD
        {/* Navigation Menu */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in ${
            isNavOpen ? "top-12 bg-white" : "top-[-490px]"
=======
        {/* nav meny menu */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0  transition-all bg-white duration-500 ease-in ${
            isNavOpen ? "top-12" : "top-[-490px]"
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
          }`}
        >
          {Links.map((link) => (
            <li
              className="font-semibold my-7 md:my-0 md:ml-8 hover:text-red-600 transition-all duration-200 ease-in"
              key={link.name}
            >
<<<<<<< HEAD
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
          <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static font-semibold" onClick={()=>navigate("/contact")}>
=======
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
          <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static font-semibold">
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
            Contact Me
          </button>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
