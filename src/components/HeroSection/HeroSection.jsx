import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function HeroSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer & Designer.",
        "Mobile App Developer.",
        "Building Scalable Solutions.",
        "Creating Seamless User Experiences.",
      ],
      typeSpeed: 50,
      loop: true,
      backSpeed: 30,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-r from-gray-300 via-gray-200 to-green-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16 overflow-hidden text-gray-900 pt-32 md:pt-20">
      {/* Floating Decorative Shapes */}
      <div className="absolute top-5 left-5 h-36 w-36 bg-indigo-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 h-40 w-40 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Left Side: Text Content */}
      <div className="md:w-1/2 flex flex-col items-start text-left z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Hi, I'm <span className="text-indigo-600">Toufik Sk</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 mb-6" ref={el}>
          {/* Typed.js animation */}
        </p>

        <p className="text-md md:text-lg text-gray-600 mb-8">
          I design and build modern web and mobile applications that drive
          business success and deliver amazing user experiences.
        </p>

        <div className="flex gap-3">
          <button
            className="bg-indigo-600 text-white font-semibold md:py-3 md:px-8 py-3 px-2 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transform transition duration-300"
            onClick={() => (window.location.href = "#about")}
          >
            Explore My Work
          </button>
          {/* <button
            className="bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 hover:scale-105 transform transition duration-300"
            onClick={() => (window.location.href = "#contact")}
          >
            Hire Me
          </button> */}
          <a
            className="bg-pink-600 text-white font-semibold md:py-3 md:px-8 py-3 px-2 rounded-full shadow-lg hover:bg-pink-700 hover:scale-105 transform transition duration-300"
            href="/Toufik _Resume.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center items-center z-10">
        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
          <img
            src="/profile1.jpeg"
            alt="Toufik"
            className="w-96 h-96 mx-auto rounded-full object-cover border-4 border-white shadow-lg transition-all duration-300 transform group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
