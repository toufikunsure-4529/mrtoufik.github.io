"use client";

import {
  ExternalLink,
  Github,
  Code2,
  Loader2,
  Eye,
  Star,
  Calendar,
} from "lucide-react";
import { useState } from "react";

function Project() {
const projects = [
  {
    id: 1,
    img: "/images/projects/khabarbolo.PNG",
    projName: "Food Delivery E-commerce Webapp",
    description:
      "A full-stack food delivery platform with modern UI, real-time tracking, and secure payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    url: "https://omnifood-toufik.netlify.app",
    gitSlug: "https://github.com/toufikunsure-4529/omnifood-frontend-app",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    img: "/images/projects/todo.PNG",
    projName: "Todo Web Application",
    description:
      "A responsive task management app with drag-and-drop functionality and local storage persistence.",
    technologies: ["React", "CSS3", "LocalStorage"],
    category: "Frontend",
    url: "https://mytodo-daly.netlify.app/",
    gitSlug: "https://github.com/toufikunsure-4529/todo-app",
    featured: false,
    year: "2024",
  },
  {
    id: 3,
    img: "/images/projects/dp-ams.PNG",
    projName: "Admission Management System",
    description:
      "A comprehensive platform for managing student admissions with dashboard analytics and reporting.",
    technologies: ["React", "Firebase", "Tailwind"],
    category: "Full Stack",
    url: "https://dumkalpolytechnic.netlify.app/",
    gitSlug: "https://github.com/toufikunsure-4529/dp-ams-system",
    featured: true,
    year: "2023",
  },
  {
    id: 4,
    img: "/images/projects/zomato.PNG",
    projName: "Zomato Clone Fullstack",
    description:
      "A feature-rich food ordering platform with restaurant listings, reviews, and order management.",
    technologies: ["React", "Redux", "Node.js", "Express"],
    category: "Full Stack",
    url: "https://beta-zomatolite.netlify.app/",
    gitSlug: "https://github.com/toufikunsure-4529/zomato-clone",
    featured: true,
    year: "2023",
  },
  {
    id: 5,
    img: "/images/projects/weather.PNG",
    projName: "Live Weather Tracking Platform",
    description:
      "Real-time weather application with location-based forecasts and interactive weather maps.",
    technologies: ["JavaScript", "Weather API", "CSS3"],
    category: "Frontend",
    url: "https://weather-apx.netlify.app",
    gitSlug:
      "https://github.com/toufikunsure-4529/API-based-Weather-Application",
    featured: false,
    year: "2023",
  },
  {
    id: 6,
    img: "/images/projects/flipkart.PNG",
    projName: "Flipkart Frontend Clone",
    description:
      "Pixel-perfect e-commerce interface clone with responsive design and smooth animations.",
    technologies: ["React", "CSS3", "JavaScript"],
    category: "Frontend",
    url: "https://ecomarce.netlify.app",
    gitSlug: "https://github.com/toufikunsure-4529/ecomarce-web",
    featured: false,
    year: "2023",
  },
  {
    id: 7,
    img: "/images/projects/calculator.PNG",
    projName: "Advanced Calculator",
    description:
      "Scientific calculator with advanced mathematical functions and responsive design.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    url: "https://nowcalculate.netlify.app/",
    gitSlug: "https://github.com/toufikunsure-4529/codsoft_-3",
    featured: false,
    year: "2023",
  },
  {
    id: 8,
    img: "/images/projects/githubapi.PNG",
    projName: "GitHub Profile Information System",
    description:
      "Developer profile analyzer that fetches and displays comprehensive GitHub statistics and insights.",
    technologies: ["React", "GitHub API", "Chart.js"],
    category: "Frontend",
    url: "https://dev-restapi.netlify.app/",
    gitSlug: "https://github.com/toufikunsure-4529/github-rest-api",
    featured: false,
    year: "2023",
  },
  {
    id: 9,
    img: "/images/projects/landing.PNG",
    projName: "E-commerce Landing Page",
    description:
      "Modern, conversion-optimized landing page with smooth animations and call-to-action sections.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    url: "https://colandingweb.netlify.app",
    gitSlug: "https://github.com/toufikunsure-4529/codsoft_-1",
    featured: false,
    year: "2023",
  },
];


  const [initialViewProject, setInitialViewProject] = useState(6);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Frontend"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setInitialViewProject((prev) =>
        Math.min(prev + 3, filteredProjects.length)
      );
      setLoading(false);
    }, 1500);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setInitialViewProject(6);
  };

  const visibleProjects = filteredProjects.slice(0, initialViewProject);
  const hasMoreProjects = initialViewProject < filteredProjects.length;

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 h-32 w-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 h-40 w-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <Code2 className="text-3xl text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I specialize in building responsive, user-friendly websites tailored
            to client needs. From e-commerce to corporate sites, my completed
            projects showcase modern design and optimized performance. Explore
            my work to see how I bring ideas to life online!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img || "/placeholder.svg"}
                  alt={project.projName}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.gitSlug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Eye className="w-3 h-3 mr-1" />
                    Live
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  {project.projName}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.gitSlug}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading Projects...
                </>
              ) : (
                <>
                  Load More Projects
                  <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </>
              )}
            </button>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-2">
              {projects.length}+
            </div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
              {projects.filter((p) => p.category === "Full Stack").length}
            </div>
            <p className="text-gray-400">Full Stack Apps</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-2">
              {projects.filter((p) => p.featured).length}
            </div>
            <p className="text-gray-400">Featured Projects</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-2">
              100%
            </div>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
