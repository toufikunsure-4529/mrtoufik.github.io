import React, { useState } from "react";
import dbService from "../../appwrite/dbConfig";

function ContactComponents() {
  const [successMsg, setSuccessMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formdata, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formSubmission = await dbService.submitFormData(formdata);
      if (formSubmission) {
        setSuccessMsg(true);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50  w-full card"
      id="contact"
    >
      <div className="max-w-5xl mx-auto py-6 px-2">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          Get In Touch
        </h1>
        <div className="heading-line mb-1"></div>
        <p className="text-center">
          Have a project in mind or want to collaborate? I’d love to hear from
          you! Feel free to reach out with any inquiries, and I'll respond
          promptly. Let’s connect and create something amazing!
        </p>

        <div className="flex flex-col md:flex-row bg-[#082643] w-full shadow-lg h-auto mt-10 rounded-md">
          <div className="md:w-1/2 w-full py-2 px-2 md:py-0 md:px-0">
            <iframe
              width="100%"
              height="100%"
              className="rounded-sm"
              src={`https://maps.google.com/maps?q=Hariharpara&output=embed`}
              style={{ filter: "grayscale(0) contrast(1.2) opacity(100%)" }}
            ></iframe>
          </div>
          <div className="md:w-1/2 w-full py-7 px-10">
            <h1 className="text-2xl font-bold text-center mb-2 text-gray-100">
              Get In Touch
            </h1>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              {loading ? (
                <div className="flex justify-center items-center">
                  <img src="/loading.svg" alt="Loading..." />
                </div>
              ) : successMsg ? (
                <div className="flex items-center justify-center bg-gray-100">
                  <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto animate-bounceIn">
                    <svg
                      className="w-16 h-16 text-green-600 mx-auto mb-4 animate-bounceIn"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 11l3 3L22 4" />
                      <path d="M22 4L12 14 9 11 4 22 2 22l5-7 2 2 8-10z" />
                    </svg>
                    <h2 className="text-3xl font-bold text-green-600 mb-4 text-center animate-fadeIn">
                      Success!
                    </h2>
                    <p className="text-gray-700 text-center animate-fadeIn delay-200">
                      Thank you for your submission. We will contact you within
                      24-48 hours via email.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col justify-center items-center text-white mt-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full border bg-[#FF000000] py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md border-blue-300 opacity-75"
                    value={formdata.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    name="phone"
                    placeholder="Contact Number"
                    className="w-full border py-2 bg-[#FF000000] px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md border-blue-300 opacity-75"
                    value={formdata.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border py-2 bg-[#FF000000] px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md border-blue-300 opacity-75"
                    value={formdata.email}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="message"
                    cols="30"
                    rows="5"
                    maxLength={200}
                    placeholder="Your Message"
                    className="w-full border py-2 px-3 bg-[#FF000000] mb-3 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md shadow-sm border-blue-300 opacity-75"
                    value={formdata.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-gray-200 text-blue-900 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border-blue-300 transition-colors duration-300 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponents;
