import { PaperClipIcon } from "@heroicons/react/24/solid";
import React from "react";

function Project() {
  const projects = [
    {
      id: 1,
      img: "/images/projects/khabarbolo.PNG",
      projName: "Food delivery Ecomarce Webapp",
      url: "https://omnifood-toufik.netlify.app",
      gitSlug: "https://github.com/toufikunsure-4529/omnifood-frontend-app"
    },
    {
      id: 2,
      img: "/images/projects/todo.PNG",
      projName: "Todo Web app",
      url: "https://mytodo-daly.netlify.app/",
      gitSlug: "https://github.com/toufikunsure-4529/todo-app"
    },
    {
      id: 3,
      img: "/images/projects/dp-ams.PNG",
      projName: "DataHive: Admission Managment System Platform",
      url: "https://dumkalpolytechnic.netlify.app/",
      gitSlug: "https://github.com/toufikunsure-4529/dp-ams-system"

    },
    {
      id: 4,
      img: "/images/projects/zomato.PNG",
      projName: "Zomato Clone Fullstack",
      url: "https://beta-zomatolite.netlify.app/",
      gitSlug: "https://github.com/toufikunsure-4529/zomato-clone"
    },
    {
      id: 5,
      img: "/images/projects/weather.PNG",
      projName: "Live Weather Track Platform",
      url: "https://weather-apx.netlify.app",
      gitSlug: "https://github.com/toufikunsure-4529/API-based-Weather-Application"
    },
    {
      id: 6,
      img: "/images/projects/flipkart.PNG",
      projName: "Flipkart Frontend Clone",
      url: "https://ecomarce.netlify.app",
      gitSlug: "https://github.com/toufikunsure-4529/ecomarce-web"
    },
    {
      id: 7,
      img: "/images/projects/calculator.PNG",
      projName: "Calculator using HTML CSS Javascript",
      url: "https://nowcalculate.netlify.app/",
      gitSlug: "https://github.com/toufikunsure-4529/codsoft_-3"
    },
    {
      id: 8,
      img: "/images/projects/githubapi.PNG",
      projName: "Github Profile Information Geting System",
      url: "https://dev-restapi.netlify.app/",
      gitSlug: "https://github.com/toufikunsure-4529/github-rest-api"
    },
    {
      id: 9,
      img: "/images/projects/landing.PNG",
      projName: "Ecomarce Landing Page",
      url: "https://colandingweb.netlify.app",
      gitSlug: "https://github.com/toufikunsure-4529/codsoft_-1"

    },
  ];

  return (
    <div className="w-full bg-[#F2F2F2]" id="about">
      <div className="max-w-5xl mx-auto py-6 px-2">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          Our Projects
        </h1>
        <div className="heading-line mb-1 "></div>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro
          temporibus distinctio.
        </p>

        <div className="grid md:grid-cols-3 gap-2 mt-10 grid-cols-1 ">
          {/* images card */}
          {projects.map((project, index) => (
            <div className="w-full overflow-hidden relative" key={index}>
              <img
                src={project.img}
                alt={project.projName}
                className="w-full h-64 transform hover:scale-150 object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 hover:cursor-pointer transition-opacity  duration-700 ease-in-out ">
                <div className="flex flex-col justify-center items-center h-full">
                  <h2 className="text-white text-md font-semibold text-center">
                    {project.projName}
                  </h2>
                  <a
                    href={project.url}
                    className="text-white text-xl underline hover:text-blue-500"
                    target="_main"
                  >
                    <PaperClipIcon className="h-5 w-5 text-white inline-block" />
                    Project Live{" "}
                  </a>
                  <a
                    href={project.gitSlug}
                    className="text-white text-md underline hover:text-blue-500"
                    target="_main"
                  >
                    <PaperClipIcon className="h-4 w-4 text-white inline-block" />
                    Github{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* images card end */}
        </div>
      </div>
    </div>
  );
}

export default Project;
