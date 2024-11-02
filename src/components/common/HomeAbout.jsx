import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineCaretRight } from "react-icons/ai";

function HomeAbout() {
  const awards = [
    " Got award in Tech. Fest at Codsoft for developing a Website.",
    " Got award in freeCodeCamp. Responsive Web Design Developer",
    " Got award in udemy. Build Real-World Website with HTML & CSS",
  ];
  return (
    <div className="w-full bg-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto py-8 px-2 flex justify-center items-center flex-col">
        <h2 className="text-5xl font-overlock font-bold text-[#1A9797] mb-4">
          About Me
        </h2>
        {/* Content Start */}
        <div className="flex justify-center w-full gap-11 mt-10 flex-col md:flex-row">
          <div className="w-full">
            <p className="text-md text-gray-500 font-roboto">
              I have been in the Software & Web Development field since 2023,
              starting as a Web Development Intern at CodSoft. I created an
              eCommerce landing page, a portfolio website, and a functional
              calculator using HTML, CSS, and JavaScript.
            </p>
            <p className="text-md text-gray-500 mt-4 font-roboto">
              Currently pursuing a B.Tech in Computer Science & Engineering,
              I've worked on projects like a Food Delivery E-commerce site, a
              GitHub Profile Details Fetcher in React.js, and a Zomato clone
              with Redux and Tailwind CSS. My core skills include JavaScript,
              TypeScript, and front-end frameworks, and I am eager to grow as a
              Frontend Developer.
            </p>
          </div>
          <div className="w-full md:w-1/2 border border-[#1A9797] p-4 rounded-md mx-auto text-center">
            <h5 className="text-2xl font-overlock text-[#1A9797] mb-2">
              Awards
            </h5>
            <ul className="text-md text-[#1A9797] font-roboto list-none p-0 m-0">
              {awards.map((elem, index) => (
                <li
                  className="flex justify-center py-2 border-b border-gray-200 last:border-none"
                  key={index}
                >
                  <span className="text-md text-[#1A9797]">
                    <RiArrowRightSLine />
                  </span>
                  <span className="text-md text-gray-500">{elem}</span>
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
