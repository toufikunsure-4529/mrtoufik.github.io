import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Headers/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import ContactComponents from "./components/common/ContactComponents";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import HomeAbout from "./components/common/HomeAbout";
import Loading from "./components/common/Loading";

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
          <HomeAbout />
          <Project />
          <Faq />
          <ContactComponents />

  
        </div>
    </>
  );
}

export default App;
