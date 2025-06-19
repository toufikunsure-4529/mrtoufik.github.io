import { RiArrowRightSLine, RiAwardLine, RiCodeSSlashLine, RiGraduationCapLine } from "react-icons/ri"

function HomeAbout() {
  const awards = [
    {
      title: "CodSoft Tech Fest Award",
      description: "Received recognition for developing an innovative website solution",
      icon: <RiAwardLine className="text-2xl" />,
    },
    {
      title: "freeCodeCamp Certification",
      description: "Earned Responsive Web Design Developer certificate",
      icon: <RiCodeSSlashLine className="text-2xl" />,
    },
    {
      title: "Udemy Course Completion",
      description: "Completed 'Build Real-World Websites with HTML & CSS' course",
      icon: <RiGraduationCapLine className="text-2xl" />,
    },
  ]

  const skills = ["JavaScript", "TypeScript", "React.js", "Redux", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"]

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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <RiCodeSSlashLine className="text-3xl text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* About Text Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full mr-4"></div>
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I embarked on my Software & Web Development journey in{" "}
                  <span className="text-indigo-400 font-semibold">2023</span>, starting as a Web Development Intern at{" "}
                  <span className="text-indigo-400 font-semibold">CodSoft</span>. During this foundational period, I
                  crafted an eCommerce landing page, developed a comprehensive portfolio website, and built a functional
                  calculator using the core web technologies.
                </p>
                <p className="text-lg">
                  Currently pursuing my{" "}
                  <span className="text-purple-400 font-semibold">B.Tech in Computer Science & Engineering</span>, I've
                  expanded my expertise by developing sophisticated projects including a Food Delivery E-commerce
                  platform, a GitHub Profile Details Fetcher in React.js, and a feature-rich Zomato clone utilizing
                  Redux and Tailwind CSS.
                </p>
                <p className="text-lg">
                  My passion lies in <span className="text-indigo-400 font-semibold">Frontend Development</span>, where
                  I continuously strive to create intuitive, responsive, and visually appealing user experiences that
                  bridge the gap between design and functionality.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-4"></div>
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium hover:from-indigo-500/30 hover:to-purple-600/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:from-slate-800/70 hover:to-slate-900/70 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-600 rounded-full mr-4"></div>
                Achievements
              </h3>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {award.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-indigo-300 transition-colors duration-300">
                          {award.title}
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{award.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 cursor-pointer group">
            <span>Let's Build Something Amazing Together</span>
            <RiArrowRightSLine className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
