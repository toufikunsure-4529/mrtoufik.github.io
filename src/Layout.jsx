import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Headers/NavBar";
import "aos/dist/aos.css";
import AOS from "aos";

function Layout() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setShowModal(true); // Show the modal when right-click is attempted
    };

    // document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const closeModal = () => setShowModal(false); // Function to close the modal

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Right-Click Disabled</h2>

            <p>
              For security reasons, right-clicking on this page has been
              disabled. This measure helps protect the content and integrity of
              the site.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
