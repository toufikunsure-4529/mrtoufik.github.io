import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function NavBar() {
  const Links = [
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
    { name: "Testimonials", link: "/testimonials" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 ${
        isSticky ? "sticky-nav " : "absolute top-0 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Toufik Logo"
                className="w-12 h-12 object-fit-cover bg-white rounded-full"
              />
              <span className="text-white font-bold text-lg md:text-xl font-sans">
                Toufik Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Links.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Book a Call Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Book a Call</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              {isNavOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isNavOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 px-4">
            {Links.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setIsNavOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 mt-4"
              onClick={() => setIsNavOpen(false)}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
