import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { transform } from "framer-motion";

const NewYearCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  const animation = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "scale(1)" : "scale(0.8)",
    },
    config: { tension: 200, friction: 20, duration: 500 },
  });

  useEffect(() => {
    const handleClick = () => {
      setIsVisible(false);
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <animated.div
          style={animation}
          className="relative p-6 rounded-xl shadow-2xl max-w-sm w-full"
        >
          {/* Only Image */}
          <img
            src="/happy-new-year-2025.jpg"
            alt="Happy New Year"
            className="rounded-lg"
          />
        </animated.div>
      </div>
    )
  );
};

export default NewYearCard;
