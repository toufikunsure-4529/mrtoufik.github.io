import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      position: "Project Manager",
<<<<<<< HEAD
      feedback:
        "Toufik is a highly skilled web developer. His attention to detail and ability to deliver on time was instrumental in the success of our project.",
=======
      feedback: "Toufik is a highly skilled web developer. His attention to detail and ability to deliver on time was instrumental in the success of our project.",
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
      img: "/images/testimonials/client-1.jpg",
    },
    {
      id: 2,
      name: "John Smith",
      position: "CEO",
<<<<<<< HEAD
      feedback:
        "Working with Toufik was a fantastic experience. His expertise and professionalism ensured our website was developed to the highest standards.",
=======
      feedback: "Working with Toufik was a fantastic experience. His expertise and professionalism ensured our website was developed to the highest standards.",
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
      img: "/images/testimonials/client-2.jpg",
    },
    {
      id: 3,
      name: "Emily Johnson",
      position: "Marketing Director",
<<<<<<< HEAD
      feedback:
        "Toufik's web development skills are top-notch. He understood our requirements perfectly and delivered a website that exceeded our expectations.",
=======
      feedback: "Toufik's web development skills are top-notch. He understood our requirements perfectly and delivered a website that exceeded our expectations.",
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
      img: "/images/testimonials/client-3.jpg",
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "CTO",
<<<<<<< HEAD
      feedback:
        "Toufik is a great web developer. His technical skills and proactive approach made a significant difference in our project's success.",
=======
      feedback: "Toufik is a great web developer. His technical skills and proactive approach made a significant difference in our project's success.",
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
      img: "/images/testimonials/client-4.jpg",
    },
  ];

<<<<<<< HEAD
=======

>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
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
<<<<<<< HEAD
    <div className="w-full bg-[#FF000000] text-white py-6" data-aos="fade-up">
=======
    <div className="w-full bg-[#FF000000] text-white py-6">
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
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
<<<<<<< HEAD
          <div className="bg-gray-200 shadow-md p-6 rounded-lg card">
            <p className="text-gray-900 mb-4 mr-16">
=======
          <div className="bg-gray-200 shadow-md p-6 rounded-lg">
            <p className="text-gray-900 mb-4">
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
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
<<<<<<< HEAD
                <div className="text-gray-900 font-semibold text-lg ">
=======
                <div className="text-gray-900 font-semibold text-lg">
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
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
<<<<<<< HEAD
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-blue-900" : "bg-gray-500"
                  }`}
=======
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-900" : "bg-gray-500"
                    }`}
>>>>>>> 8c1c3357b0628e1f76595761a20bc83d2eca4efe
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
