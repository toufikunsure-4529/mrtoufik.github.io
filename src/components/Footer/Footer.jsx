"use client"

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  Heart,
  ArrowUp,
} from "lucide-react"
import { useState, useEffect } from "react"

function Footer() {
  const [email, setEmail] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const serviceLinks = [
    { name: "Web Development", href: "#services" },
    { name: "Frontend Development", href: "#services" },
    { name: "E-commerce Solutions", href: "#services" },
    { name: "API Development", href: "#services" },
    { name: "Website Maintenance", href: "#services" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/toufikunsure-4529",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/toufik-sk/",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      color: "hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      color: "hover:text-pink-400",
    },
  ]

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8001074096",
      href: "tel:+918001074096",
      subtext: "Mon-Fri 9am-6pm IST",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "devtoufik@gmail.com",
      href: "mailto:devtoufik@gmail.com",
      subtext: "24/7 Online Support",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Kolkata, West Bengal",
      href: "https://maps.google.com/maps?q=Kolkata,West+Bengal",
      subtext: "India 700136",
    },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
    // Add your subscription logic here
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
      <div className="absolute top-20 left-10 h-32 w-32 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 h-40 w-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="px-6 py-16">
          {/* Top Section - Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{info.label}</h4>
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 font-medium"
                    >
                      {info.value}
                    </a>
                    <p className="text-gray-400 text-sm mt-1">{info.subtext}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full mr-4"></div>
                Toufik
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Passionate Frontend Developer specializing in creating modern, responsive web applications. Turning
                ideas into digital reality with clean code and innovative solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-600/50`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center group"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to get the latest updates about new projects and web development tips.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>

          {/* Skills & Technologies */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 mb-12">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">Technologies I Work With</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Tailwind CSS",
                "Redux",
                "Firebase",
                "Git",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full hover:bg-slate-600/50 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700/50 px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Toufik. All rights reserved. Designed & Developed with{" "}
              <Heart className="w-4 h-4 inline text-red-500 mx-1" /> by{" "}
              <a
                href="https://www.linkedin.com/in/toufik-sk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
              >
                Toufik
              </a>
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  )
}

export default Footer
