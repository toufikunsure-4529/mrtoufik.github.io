"use client"

import { Clock, Award, Users, Code, Coffee, Star, Calendar, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

// Simple CountUp component since we're not using external dependencies
function CountUp({ end, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      value: 15,
      suffix: "+",
      label: "Projects Completed",
      description: "Full-stack web applications delivered",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      value: 25,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 3,
      icon: <Clock className="w-8 h-8" />,
      value: 2000,
      suffix: "+",
      label: "Coding Hours",
      description: "Hours spent perfecting craft",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-500/20 to-teal-500/20",
    },
    {
      id: 4,
      icon: <Award className="w-8 h-8" />,
      value: 5,
      suffix: "+",
      label: "Certifications",
      description: "Professional achievements earned",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20",
    },
    {
      id: 5,
      icon: <Star className="w-8 h-8" />,
      value: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Projects delivered on time",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/20 to-purple-500/20",
    },
    {
      id: 6,
      icon: <Calendar className="w-8 h-8" />,
      value: 2,
      suffix: "+",
      label: "Years Experience",
      description: "In web development field",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/20 to-pink-500/20",
    },
    {
      id: 7,
      icon: <Coffee className="w-8 h-8" />,
      value: 500,
      suffix: "+",
      label: "Cups of Coffee",
      description: "Fuel for late-night coding",
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-500/20 to-yellow-500/20",
    },
    {
      id: 8,
      icon: <Zap className="w-8 h-8" />,
      value: 24,
      suffix: "/7",
      label: "Availability",
      description: "Ready to tackle new challenges",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/20 to-blue-500/20",
    },
  ]

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
      <div className="absolute top-10 left-10 h-32 w-32 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 h-40 w-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <Award className="text-3xl text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-4">
            By the Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Here's a snapshot of my journey as a developer - from projects completed to skills mastered, these numbers
            tell the story of dedication and continuous growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>{stat.icon}</div>
              </div>

              {/* Number */}
              <div
                className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
              >
                {inView && <CountUp end={stat.value} duration={2000 + index * 200} suffix={stat.suffix} />}
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>

              {/* Decorative Element */}
              <div
                className={`w-full h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Recent Achievements</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Milestones that mark my growth as a developer and the impact of my work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">CodSoft Recognition</h4>
              <p className="text-gray-400 text-sm">
                Received award for outstanding website development during internship
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">freeCodeCamp Certified</h4>
              <p className="text-gray-400 text-sm">Earned Responsive Web Design Developer certification</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-10 h-10 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Full-Stack Mastery</h4>
              <p className="text-gray-400 text-sm">Successfully completed multiple MERN stack applications</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 cursor-pointer group">
            <span>Ready to Add Your Project to These Numbers?</span>
            <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
