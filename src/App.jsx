import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Footer from './Components/Footer';
import MobNavbar from "./Components/MobNavbar";
import Foter from "./Components/Foter";
import Layout from "./Components/layout/Layout";
// import Foter from '../krishna-shop/src/Components/Foter';
import { useState, useEffect } from "react"
const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    
       <button
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#003d2b",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        textAlign: "center",
        lineHeight: "50px",
        fontSize: "20px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        transition: "opacity 0.3s ease",
      }}
    >
      {/* <i class="fa-solid fa-arrow-up"></i> */}
      <i class="fa-solid fa-angle-up"></i>
    </button>
      <div className="container-fluid p-0">
        <header>
          <div className="bannerbg desknavbar">
            <Navbar />
          </div>
          <div className="mobnavbar">
            <MobNavbar />
          </div>
        </header>
        <main>
          <Outlet /> {/* This works correctly */}
          <Foter />
        </main>
      </div>
    </>
  );
};

export default App;
