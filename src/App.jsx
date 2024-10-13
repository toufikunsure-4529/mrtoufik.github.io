import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Headers/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import ContactComponents from "./components/common/ContactComponents";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import About from "./components/common/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the duration or any other settings here
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  //update Loading animation
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <img src="/loading.svg" alt="Loading..." className="bg-gray-100" />
        </div>
      ) : (
        <div
          style={{
            backgroundImage: "url('/images/img1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <Navbar />
          <HeroSection />
          <About />
          <Services />
          <Testimonials />
          <Faq />
          <Clients />
          <Project />
          <ContactComponents />

          {/* <div
        className="bg-cover w-full h-screen"
    
      ></div> */}
        </div>
      )}
    </>
  );
}

export default App;
