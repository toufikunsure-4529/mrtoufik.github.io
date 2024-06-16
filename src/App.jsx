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

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }, [])

  
  return (
    <>
      {loading ? (<div className="flex items-center justify-center min-h-screen bg-gray-100">
        <img src="/public/loading.svg" alt="Loading..." />
      </div>) :
        < div
          style={{
            backgroundImage: "url('/public/images/img1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }
          }
        >
          <Navbar />
          <HeroSection />
          <Services />
          <Testimonials />
          <Faq />
          <Clients />
          <Project />
          <Contact />
          <Footer />

          {/* <div
        className="bg-cover w-full h-screen"
    
      ></div> */}
        </div>
      }
    </>

  );
}

export default App;
