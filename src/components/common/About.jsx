import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-gray-200 py-28 overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-5 left-5 h-36 w-36 bg-indigo-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 h-40 w-40 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Profile Card */}
          <div className="relative group text-center">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-700 via-gray-800 to-gray-900 opacity-70 blur-lg group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative p-8 bg-gray-900 rounded-2xl shadow-2xl">
              <img
                src="/profile1.jpeg"
                alt="Toufik"
                className="h-72 w-72 mx-auto rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-white">Toufik SK</h2>
              <p className="mt-2 text-lg text-gray-300">Frontend Developer | Creative Coder</p>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
              <div className="mt-3 h-1 w-20 mx-auto lg:mx-0 bg-blue-500 rounded-full"></div>
            </div>
            <h1 className="text-4xl text-gray-800 font-extrabold leading-tight">
              Hey, I’m Toufik! 👋
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              A passionate frontend developer specializing in crafting seamless,
              visually stunning interfaces. With expertise in React, Bootstrap,
              and Tailwind CSS, I bring ideas to life with intuitive and
              user-friendly designs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I love experimenting with new technologies and solving
              development challenges. Let’s collaborate and build something
              awesome together!
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mt-8">
              <a
                href="https://github.com/toufikunsure-4529"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-all"
              >
                <FaGithub className="text-2xl" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/toufik-sk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white shadow-lg hover:bg-blue-500 transition-all"
              >
                <FaLinkedin className="text-2xl" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
