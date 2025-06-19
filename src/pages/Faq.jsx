"use client"

import { Plus, Minus, HelpCircle, Code, Briefcase, GraduationCap, Clock, DollarSign, Users } from "lucide-react"
import { useState } from "react"

function Faq() {
  const [toggleFaq, setToggleFaq] = useState({})

  const FaqData = [
    {
      id: 1,
      category: "Skills & Expertise",
      icon: <Code className="w-5 h-5" />,
      question: "What are your primary skills as a Frontend Developer?",
      answer:
        "I specialize in modern web development with expertise in JavaScript, TypeScript, React.js, and Next.js. My technical stack includes Redux for state management, Tailwind CSS for styling, and Node.js for backend development. I'm proficient in responsive design, API integration, database management with MongoDB and Firebase, and version control with Git. I also have experience with modern development tools like Webpack, Vite, and deployment platforms like Vercel and Netlify.",
    },
    {
      id: 2,
      category: "Portfolio & Projects",
      icon: <Briefcase className="w-5 h-5" />,
      question: "Can you showcase some of your recent projects?",
      answer:
        "I've completed several full-stack projects including: (1) Food Delivery E-commerce Platform - A comprehensive web app with real-time order tracking, payment integration, and admin dashboard built with React and Node.js. (2) Zomato Clone - A feature-rich restaurant discovery platform with user authentication, reviews, and order management using React, Redux, and Appwrite. (3) Admission Management System - A complete student management platform with analytics dashboard and reporting features. (4) GitHub Profile Analyzer - A React application that fetches and visualizes GitHub user statistics using REST APIs.",
    },
    {
      id: 3,
      category: "Experience & Background",
      icon: <GraduationCap className="w-5 h-5" />,
      question: "What is your educational and professional background?",
      answer:
        "I'm currently pursuing B.Tech in Computer Science & Engineering while actively working as a Frontend Developer. I completed a Web Development Internship at CodSoft where I developed multiple client projects including e-commerce platforms and portfolio websites. I've earned certifications from freeCodeCamp in Responsive Web Design and completed advanced courses in modern web development. I've been actively coding since 2023 and have built 15+ projects ranging from simple calculators to complex full-stack applications.",
    },
    {
      id: 4,
      category: "Services & Pricing",
      icon: <DollarSign className="w-5 h-5" />,
      question: "What services do you offer and what are your rates?",
      answer:
        "I offer comprehensive web development services including: Frontend Development (React, Next.js, Vue.js), Full-Stack Development (MERN/MEAN stack), E-commerce Solutions, API Development & Integration, Website Redesign & Optimization, and Maintenance & Support. My rates vary based on project complexity: Simple websites ($500-$1500), E-commerce platforms ($1500-$3500), Custom web applications ($2000-$5000+). I also offer hourly consulting at $25-$50/hour. All projects include responsive design, SEO optimization, and 30 days of free support.",
    },
    {
      id: 5,
      category: "Timeline & Process",
      icon: <Clock className="w-5 h-5" />,
      question: "What is your typical project timeline and development process?",
      answer:
        "My development process follows these phases: (1) Discovery & Planning (1-2 days) - Requirements gathering, wireframing, and project scope definition. (2) Design & Prototyping (2-3 days) - UI/UX design, mockups, and client approval. (3) Development (1-4 weeks) - Coding, testing, and regular progress updates. (4) Testing & Deployment (2-3 days) - Quality assurance, bug fixes, and live deployment. (5) Support & Maintenance (ongoing) - Post-launch support and updates. Simple websites typically take 1-2 weeks, while complex applications may require 4-8 weeks depending on features and requirements.",
    },
    {
      id: 6,
      category: "Collaboration & Communication",
      icon: <Users className="w-5 h-5" />,
      question: "How do you handle client communication and project management?",
      answer:
        "I believe in transparent communication and use modern project management tools to keep clients informed. I provide regular updates through Slack, Discord, or email, conduct weekly progress meetings via Zoom/Google Meet, and use tools like Trello or Notion for project tracking. Clients receive access to staging environments for real-time progress viewing, and I maintain detailed documentation throughout the development process. I'm available during business hours (9 AM - 6 PM IST) and respond to urgent queries within 2-4 hours. All project requirements and changes are documented to ensure clarity and avoid scope creep.",
    },
  ]

  const toggleItem = (id) => {
    setToggleFaq((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  const categories = [...new Set(FaqData.map((faq) => faq.category))]

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
      <div className="absolute top-20 right-10 h-32 w-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 h-40 w-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <HelpCircle className="text-3xl text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about my services, experience, and development process. Can't find what
            you're looking for? Feel free to reach out directly!
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category, index) => {
            const categoryIcon = FaqData.find((faq) => faq.category === category)?.icon
            return (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-4 text-center hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-2 text-indigo-400">{categoryIcon}</div>
                <p className="text-gray-300 text-xs font-medium">{category}</p>
              </div>
            )
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FaqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300"
            >
              {/* Question */}
              <div
                className="flex items-center justify-between p-6 cursor-pointer group"
                onClick={() => toggleItem(faq.id)}
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {faq.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-indigo-400 font-medium mb-1">{faq.category}</div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-slate-600/50 group-hover:text-white transition-all duration-300">
                    {toggleFaq[faq.id] ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Answer */}
              {toggleFaq[faq.id] && (
                <div className="px-6 pb-6">
                  <div className="ml-16 bg-slate-700/30 rounded-xl p-6 border-l-4 border-indigo-500">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm here to help! Whether you have questions about a specific project, need a custom quote, or want to
              discuss your requirements in detail, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 group">
                <span>Get in Touch</span>
                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              </button>
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-full text-white font-semibold hover:bg-slate-600/70 transition-all duration-300">
                <span>Schedule a Call</span>
              </button>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  )
}

export default Faq
