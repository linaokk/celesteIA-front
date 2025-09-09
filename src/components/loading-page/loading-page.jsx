import React from "react";
import "./loading-page.css";

const LoadingPage = ({ companyName = "Votre entreprise" }) => {
  return (
    <div className="loader-container d-flex justify-content-center align-items-center">
      <div className="logo">
        <div className="shape top-left"></div>
        <div className="shape top-right"></div>
        <div className="shape bottom-left"></div>
        <div className="shape bottom-right"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
