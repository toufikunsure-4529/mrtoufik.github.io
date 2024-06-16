import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "CTO, Tech Solutions Inc.",
      feedback:
        "Collaborating with Company was transformative. Their innovative approach and attention to detail resulted in a software solution that far exceeded our expectations. Highly recommended for cutting-edge solutions.",
      img: "/images/testimonials/client-1.jpg",
    },
    {
      id: 2,
      name: "David Smith",
      position: "COO, InnovateSoft Ltd.",
      feedback:
        "Company truly understands clients' needs. Their ability to translate our vision into a functional software product was remarkable. Clear communication and timely delivery made the process seamless. Highly satisfied with the outcome.",
      img: "/images/testimonials/client-2.jpg",
    },
    {
      id: 3,
      name: "Jennifer Lee",
      position: "CEO, DataTech Solutions",
      feedback:
        "Impressed by Company's expertise and professionalism. Their attention to detail was impeccable, greatly improving our efficiency. The delivered software has become instrumental in enhancing our productivity. Exceptional work!",
      img: "/images/testimonials/client-3.jpg",
    },
    {
      id: 4,
      name: "Mark Wilson",
      position: "CTO, Digital Dynamics",
      feedback:
        "Choosing Company was pivotal for our project's success. Their dedication, creativity, and technical skills were unmatched. The final product surpassed our expectations. We couldn't be happier with the outcome.",
      img: "/images/testimonials/client-4.jpg",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      position: "VP of Engineering, TechGenius Innovations",
      feedback:
        "Our experience with Company was outstanding. They were responsive, flexible, and attentive throughout the development process. The delivered software not only meets but exceeds our expectations. Highly recommended for reliable solutions.",
      img: "/images/testimonials/client-5.jpg",
    },
  ];

  // State for tracking active testimonial index
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  const previousTestimonials = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setSlideDirection("slide-right");
  };

  const nextTestimonials = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setSlideDirection("slide-left");
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonials, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full bg-[#FF000000] text-white py-6">
      <div className="max-w-3xl mx-auto px-4">
        <div className="py-10">
          <h1 className="text-4xl font-bold text-center mb-2 text-white">
            Testimonials
          </h1>
          <div className="heading-line mb-1"></div>
          <p className="text-center">What our clients are saying</p>
        </div>

        <div className={`relative ${slideDirection}`}>
          {/* clinet details & review*/}
          <div className="bg-gray-200 shadow-md p-6 rounded-lg">
            <p className="text-gray-900 mb-4">
              {" "}
              {testimonials[activeIndex].feedback}{" "}
            </p>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonials[activeIndex].img}
                  alt="Clint photo"
                />
              </div>
              <div className="ml-4">
                <div className="text-gray-900 font-semibold text-lg">
                  {testimonials[activeIndex].name}{" "}
                </div>
                <div className="text-gray-900">
                  {" "}
                  {testimonials[activeIndex].position}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              {testimonials.map((data, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-blue-900" : "bg-gray-500"
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-4">
          <button onClick={previousTestimonials}>
            {" "}
            <ArrowLeftIcon className="h-6 w-6 inline outline outline-white outline-offset-4 text-white rounded-2xl hover:bg-white hover:text-black " />
          </button>
          <button onClick={nextTestimonials}>
            {" "}
            <ArrowRightIcon className="h-6 w-6 inline outline outline-white outline-offset-4  text-white rounded-2xl hover:bg-white hover:text-black " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
