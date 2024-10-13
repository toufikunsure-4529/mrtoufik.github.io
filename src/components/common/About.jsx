import React from "react";

function About() {
  return (
    <section className="relative w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-50 py-28 text-white overflow-hidden card">
      {/* Floating Decorative Shapes */}
      <div className="absolute top-5 left-5 h-36 w-36 bg-indigo-500 rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 h-40 w-40 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Profile Card */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-trbg-gradient-to-b from-indigo-900 via-gray-900 to-gray-800 opacity-70 blur-lg group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative p-8 bg-gray-900 rounded-2xl shadow-lg card">
              <img
                src="/profile1.jpeg"
                alt="Toufik"
                className="h-72 w-72 mx-auto rounded-full object-cover border-4 border-white shadow-lg transition-all duration-300 transform group-hover:scale-105"
              />
              <h2 className="mt-8 text-4xl font-extrabold text-center">
                Toufik SK
              </h2>
              <p className="mt-2 text-center text-lg text-gray-100">
                Frontend Developer | Creative Coder
              </p>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="">
              <h1 className="text-4xl font-bold text-black text-center mb-2">
                About Me
              </h1>
              <div className="mt-2 h-1 w-24 mx-auto bg-blue-500 rounded-full"></div>

              {/* <div className="heading-line mb-1"></div> */}
            </div>
            <h1 className="text-5xl text-gray-800 font-extrabold leading-tight">
              Hey, I’m Toufik! 👋
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              A passionate frontend developer focused on building seamless,
              visually appealing interfaces. With expertise in React, Bootstrap,
              and Tailwind CSS, I transform ideas into functional, user-friendly
              designs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I love exploring new technologies and tackling challenges. Let’s
              connect and create something amazing together!
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com/toufikunsure-4529"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 text-gray-800 shadow-md hover:shadow-lg hover:bg-gray-300 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/toufik-sk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white shadow-md hover:shadow-lg hover:bg-blue-500 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
