import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState, useMemo } from "react";

function Testimonials() {
  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "Jane Doe",
        position: "Project Manager",
        feedback:
          "Toufik is a highly skilled web developer. His attention to detail and ability to deliver on time was instrumental in the success of our project.",
        img: "/images/testimonials/client-1.jpg",
      },
      {
        id: 2,
        name: "John Smith",
        position: "CEO",
        feedback:
          "Working with Toufik was a fantastic experience. His expertise and professionalism ensured our website was developed to the highest standards.",
        img: "/images/testimonials/client-2.jpg",
      },
      {
        id: 3,
        name: "Emily Johnson",
        position: "Marketing Director",
        feedback:
          "Toufik's web development skills are top-notch. He understood our requirements perfectly and delivered a website that exceeded our expectations.",
        img: "/images/testimonials/client-3.jpg",
      },
      {
        id: 4,
        name: "Michael Brown",
        position: "CTO",
        feedback:
          "Toufik is a great web developer. His technical skills and proactive approach made a significant difference in our project's success.",
        img: "/images/testimonials/client-4.jpg",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  const previousTestimonials = () => {
    setActiveIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      setSlideDirection("slide-right");
      return newIndex;
    });
  };

  const nextTestimonials = () => {
    setActiveIndex((prevIndex) => {
      const newIndex =
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      setSlideDirection("slide-left");
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonials, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  text-white py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Testimonials</h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-2 rounded"></div>
          <p className="text-gray-400">What our clients are saying</p>
        </div>

        <div
          className={`relative transition-all duration-700 ${slideDirection}`}
        >
          <div className="bg-white shadow-lg p-8 rounded-lg transition-transform transform">
            <p className="text-gray-800 italic mb-4">
              "{testimonials[activeIndex].feedback}"
            </p>
            <div className="flex items-center">
              <img
                loading="lazy"
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="/demo.png"
                alt="Client photo"
              />
              <div className="ml-4">
                <div className="text-gray-800 font-semibold text-lg">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeIndex].position}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-blue-500" : "bg-gray-500"
                  } transition-colors duration-200`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-6">
          <button
            className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition duration-200"
            onClick={previousTestimonials}
          >
            <ArrowLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button
            className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition duration-200"
            onClick={nextTestimonials}
          >
            <ArrowRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
