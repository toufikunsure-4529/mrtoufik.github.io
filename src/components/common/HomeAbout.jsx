import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

function HomeAbout() {
  const awards = [
    "Received an award at CodSoft Tech Fest for developing a website.",
    "Earned the Responsive Web Design Developer certificate from freeCodeCamp.",
    "Completed Udemy’s 'Build Real-World Websites with HTML & CSS' course.",
  ];

  return (
    <div className="w-full bg-white py-12 px-6 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold font-overlock text-[#1A9797] mb-6">
          About Me
        </h2>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row w-full gap-12 mt-6">
          {/* About Section */}
          <div className="w-full md:w-3/5">
            <p className="text-lg text-gray-600 leading-relaxed font-roboto">
              I have been in the Software & Web Development field since 2023,
              starting as a Web Development Intern at CodSoft. I created an
              eCommerce landing page, a portfolio website, and a functional
              calculator using HTML, CSS, and JavaScript.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-roboto mt-4">
              Currently pursuing a B.Tech in Computer Science & Engineering,
              I've built projects like a Food Delivery E-commerce site, a GitHub
              Profile Details Fetcher in React.js, and a Zomato clone with Redux
              and Tailwind CSS. My core skills include JavaScript, TypeScript,
              and front-end frameworks, and I am eager to grow as a Frontend
              Developer.
            </p>
          </div>

          {/* Awards Section */}
          <div className="w-full md:w-2/5 bg-[#F5FCFC] border border-[#1A9797] p-6 rounded-lg shadow-md text-center">
            <h5 className="text-2xl font-overlock text-[#1A9797] font-semibold mb-4">
              Awards & Recognitions
            </h5>
            <ul className="text-md text-gray-700 font-roboto space-y-3">
              {awards.map((award, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <RiArrowRightSLine className="text-[#1A9797] text-xl" />
                  <span className="text-gray-600 text-left">{award}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
