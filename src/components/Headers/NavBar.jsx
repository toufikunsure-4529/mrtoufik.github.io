import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About me", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

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
        <Link to={"/"}>
          <div className="flex text-xl cursor-pointer items-center gap-2">
            <img src="/favicon.png" className="h-8 w-8" alt="LOGO" />
            <span className="font-bold test font-overlock ">
              Toufik Portfollio
            </span>
          </div>
        </Link>

        {/* Menu Icon */}
        <div
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isNavOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Navigation Menu */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in ${
            isNavOpen ? "top-12 bg-white" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              className="font-semibold my-7 md:my-0 md:ml-8 hover:text-red-600 transition-all duration-200 ease-in font-overlock "
              key={link.name}
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
          <Link
            className="bg-gradient-to-r font-overlock  from-indigo-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out md:ml-8 md:static flex items-center justify-center"
            to="/quickmsg"
            download
          >
            <span className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 2a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2H2zm0 2h14v12H2V4zm2 1a1 1 0 100 2h10a1 1 0 100-2H4z" />
                <path d="M4 9h10v1H4z" />
              </svg>
              Quick Message
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
