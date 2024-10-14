import React from "react";
import About from "../components/common/About";
import CodingGallery from "../components/common/CodingGallery";

function Aboutus() {
  return (
    <div className="relative w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-50 text-white overflow-hidden">
      {/* Floating Decorative Shapes */}
      <div className="absolute top-5 left-5 h-36 w-36 bg-indigo-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 h-40 w-40 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className=" mt-14">
        <About />
        <CodingGallery />
      </div>
    </div>
  );
}

export default Aboutus;
