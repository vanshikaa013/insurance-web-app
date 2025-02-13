import React from 'react';
import './BikeNav.css'; 

const BikeNav = () => {
  return (
    <header className="container d-flex flex-column bikemedia-nav align-items-start text-center mt-3">
      <h5 className="p-0 m-0">Bike Insurance</h5>
      <p className="p-0 m-0" style={{ fontSize: "0.9rem" }}>
        Secure your bike with insurance
      </p>
    </header>
  );
};

export default BikeNav;
