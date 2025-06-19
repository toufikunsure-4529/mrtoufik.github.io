"use client"

import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, User, MessageSquare, Clock, Globe } from "lucide-react"
import { useState } from "react"

function ContactComponents() {
  const [successMsg, setSuccessMsg] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formdata, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  })

  const projectTypes = [
    "Website Development",
    "E-commerce Platform",
    "Web Application",
    "API Development",
    "Website Redesign",
    "Maintenance & Support",
    "Consultation",
    "Other",
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "toufik.developer@gmail.com",
      link: "mailto:toufik.developer@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Hariharpara, West Bengal, India",
      link: "https://maps.google.com/maps?q=Hariharpara",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Timezone",
      value: "IST (UTC+5:30)",
      link: null,
      color: "from-orange-500 to-red-500",
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formdata, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate API call - replace with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Replace this with your actual form submission logic
      // const formSubmission = await dbService.submitFormData(formdata)

      setSuccessMsg(true)
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        projectType: "",
      })
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSuccessMsg(false)
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      projectType: "",
    })
  }

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
      <div className="absolute top-20 left-10 h-32 w-32 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 h-40 w-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
            <Mail className="text-3xl text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you! Feel free to reach out with any
            inquiries, and I'll respond promptly. Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full mr-4"></div>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.color}/20 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className={`text-transparent bg-clip-text bg-gradient-to-r ${info.color}`}>
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm mb-1">{info.label}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="text-gray-400 text-sm hover:text-indigo-300 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-400 text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-green-400" />
                <h4 className="text-lg font-semibold text-white">Quick Response</h4>
              </div>
              <p className="text-gray-400 text-sm">
                I typically respond to all inquiries within{" "}
                <span className="text-green-400 font-semibold">2-4 hours</span> during business hours (9 AM - 6 PM IST).
              </p>
            </div>

       
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-4"></div>
                Send Message
              </h3>

              {loading ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <Loader2 className="w-12 h-12 text-indigo-400 animate-spin mb-4" />
                  <p className="text-gray-400">Sending your message...</p>
                </div>
              ) : successMsg ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h4>
                  <p className="text-gray-400 text-center mb-6 max-w-md">
                    Thank you for reaching out! I'll get back to you within 24-48 hours via email.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        value={formdata.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        value={formdata.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      value={formdata.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      value={formdata.subject}
                      onChange={handleChange}
                      required
                    />
                    <select
                      name="projectType"
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl py-4 px-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      value={formdata.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="" className="bg-slate-800">
                        Select Project Type
                      </option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-slate-800">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      rows="6"
                      maxLength={500}
                      placeholder="Tell me about your project..."
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                      value={formdata.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <div className="absolute bottom-3 right-3 text-xs text-gray-500">{formdata.message.length}/500</div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

     
      </div>
    </div>
  )
}

export default ContactComponents
