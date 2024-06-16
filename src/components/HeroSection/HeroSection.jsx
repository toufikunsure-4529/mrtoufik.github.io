import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function HeroSection() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Welcome</i>  to my Portfolio.",
        "Crafting Elegant and Responsive",
        "Web Experiences with Passion.",
        "Let's Build Something Amazing Together.",
      ],
      typeSpeed: 50,
      loop: true, // Loop the animation
      backSpeed: 30, // Speed of deleting characters
      backDelay: 1500, // Time before starting to delete previous characters
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div
        className="py-52 px-6 "
        style={{
          backgroundImage: "url('/images/img1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Hi, I'm Toufik Sk
          </h1>
          <p className="text-lg text-white mb-8 h-4" ref={el}>
            {/* This is where the Typed.js animation will render */}
          </p>
          <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">
            Explore My Work
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
