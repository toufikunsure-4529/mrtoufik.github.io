import { PaperClipIcon } from "@heroicons/react/24/solid";
import React from "react";

function Project() {
  const projects = [
    {
      id: 1,
      img: "/images/projects/khabarbolo.PNG",
      projName: "Food delivery Ecomarce Webapp",
      url: "https://omnifood-toufik.netlify.app",
      gitSlug: "https://github.com/toufikunsure-4529/omnifood-frontend-app",
    },
    {
      id: 2,
      img: "/images/projects/todo.PNG",
      projName: "Todo Web app",
      url: "https://mytodo-daly.netlify.app/",
      gitSlug: "https://github.com/toufikunsure-4529/todo-app",
    },
    {
      id: 3,
      img: "/images/projects/dp-ams.PNG",
      projName: "Admission Managment System Platform",
      url: "https://dumkalpolytechnic.netlify.app/",
      gitSlug: "https://github.com/toufikunsure-4529/dp-ams-system",
    },
    {
      id: 4,
      img: "/images/projects/zomato.PNG",
      projName: "Zomato Clone Fullstack",
      url: "https://beta-zomatolite.netlify.app/",
      gitSlug: "https://github.com/toufikunsure-4529/zomato-clone",
    },
    {
      id: 5,
      img: "/images/projects/weather.PNG",
      projName: "Live Weather Track Platform",
      url: "https://weather-apx.netlify.app",
      gitSlug:
        "https://github.com/toufikunsure-4529/API-based-Weather-Application",
    },
    {
      id: 6,
      img: "/images/projects/flipkart.PNG",
      projName: "Flipkart Frontend Clone",
      url: "https://ecomarce.netlify.app",
      gitSlug: "https://github.com/toufikunsure-4529/ecomarce-web",
    },
    {
      id: 7,
      img: "/images/projects/calculator.PNG",
      projName: "Calculator using HTML CSS Javascript",
      url: "https://nowcalculate.netlify.app/",
      gitSlug: "https://github.com/toufikunsure-4529/codsoft_-3",
    },
    {
      id: 8,
      img: "/images/projects/githubapi.PNG",
      projName: "Github Profile Information Geting System",
      url: "https://dev-restapi.netlify.app/",
      gitSlug: "https://github.com/toufikunsure-4529/github-rest-api",
    },
    {
      id: 9,
      img: "/images/projects/landing.PNG",
      projName: "Ecomarce Landing Page",
      url: "https://colandingweb.netlify.app",
      gitSlug: "https://github.com/toufikunsure-4529/codsoft_-1",
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
          I specialize in building responsive, user-friendly websites tailored
          to client needs. From e-commerce to corporate sites, my completed
          projects showcase modern design and optimized performance. Explore my
          work to see how I bring ideas to life online!
        </p>

        <div
          className="grid md:grid-cols-3 gap-4  mt-10 grid-cols-1 "
          data-aos="fade-up"
        >
          {/* images card */}
          {projects.map((project, index) => (
            <div className=" py-11 project-card" key={index}>
              <div className="w-full overflow-hidden relative flex flex-col justify-between gap-4">
                <div className="project-image-container">
                  <img src={project.img} alt={project.projName} className="" />
                </div>
                <div>
                  <h2 className="text-md font-semibold mt-4">
                    {project.projName}
                  </h2>
                  <div className="flex justify-center gap-6 mt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a
                      href={project.gitSlug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
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
