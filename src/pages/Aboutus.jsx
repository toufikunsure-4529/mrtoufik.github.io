import React from "react";
import About from "../components/common/About";
import CodingGallery from "../components/common/CodingGallery";
import HomeAbout from "../components/common/HomeAbout";

function Aboutus() {
  return (
    <div className="relative w-full bg-transparent text-white overflow-hidden">

      <div className="">
        <HomeAbout />
        <CodingGallery />
      </div>
    </div>
  );
}

export default Aboutus;
