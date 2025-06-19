import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function HeroSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer & Designer.",
        "Frontend Developer.",
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
    <section className="relative w-full bg-gray-950 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16 overflow-hidden text-gray-900 pt-32 md:pt-20">
      {/* Floating Decorative Shapes */}
      <div className="absolute top-5 left-5 h-36 w-36 bg-indigo-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 h-40 w-40 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Left Side: Text Content */}
      <div
        className="md:w-1/2 flex flex-col items-start text-left z-10"
        data-aos="fade-right"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-50 mb-6 leading-tight ">
          Hi, I'm <span className="text-indigo-600">Toufik Sk</span>
        </h1>

        <div className="max-w-2xl">
          <p
            className="text-lg md:text-2xl text-gray-50 mb-6 font-overlock "
            ref={el}
          >
            {/* Typed.js animation */}
          </p>
        </div>

        <p className="text-md md:text-lg text-gray-50 mb-8 font-overlock ">
          Helping small businesses grow with websites that attract customers,
          boost sales, and simplify your digital journey.
        </p>

        <div className="flex gap-3">
          <button
            className="bg-indigo-600 text-white font-semibold md:py-3 md:px-8 py-1 px-1 rounded-2xl md:rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transform transition duration-300 text-sm md:text-md"
            onClick={() => (window.location.href = "#about")}
          >
            Book a Free Consultation
          </button>
          {/* <button
            className="bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 hover:scale-105 transform transition duration-300"
            onClick={() => (window.location.href = "#contact")}
          >
            Hire Me
          </button> */}
          <a
            className="bg-pink-600 text-white font-semibold md:py-3 md:px-8 py-2 px-2 rounded-full shadow-lg hover:bg-pink-700 hover:scale-105 transform transition duration-300"
            href="/Toufik _Resume.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div
        className="md:w-1/2 mt-10 md:mt-0 relative flex justify-end items-center z-10"
        data-aos="fade-left"
      >
        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md ">
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
