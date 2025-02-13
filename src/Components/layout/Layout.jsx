import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show spinner when route changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading completion
    }, 100);

    return () => clearTimeout(timer); // Cleanup timer
  }, [location.pathname]); // Run effect on route change

  return (
    <div className="layout">
      {loading && (
        <div className="spinner-overlay">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      )}
      {!loading && children}
    </div>
  );
};

export default Layout;
