import React from "react";
import "./loading-page.css";

const LoadingPage = ({ companyName = "Votre entreprise" }) => {
  return (
    <div className="loading-page">
      <div className="loading-container">
        <div className="loading-header">
          <div className="logo-container">
            <div className="logo-icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
          </div>
          <h1 className="loading-title">
            Tableau de bord - Agent vocal {companyName}
          </h1>
          <p className="loading-subtitle">
            Préparation de vos indicateurs de performance
          </p>
        </div>

        <div className="loading-content">
          <div className="loading-animation">
            <div className="loading-spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
          </div>
          
          <div className="loading-steps">
            <div className="step active">
              <div className="step-icon">
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <span>Connexion établie</span>
            </div>
            
            <div className="step active">
              <div className="step-icon">
                <i className="bi bi-arrow-clockwise"></i>
              </div>
              <span>Récupération des données d'appels</span>
            </div>
            
            <div className="step">
              <div className="step-icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <span>Calcul des indicateurs</span>
            </div>
            
            <div className="step">
              <div className="step-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Préparation du tableau de bord</span>
            </div>
          </div>

          <div className="loading-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <p className="progress-text">Chargement en cours...</p>
          </div>
        </div>

        <div className="loading-footer">
          <p className="loading-tip">
            <i className="bi bi-lightbulb me-2"></i>
            Vos données sont sécurisées et mises à jour en temps réel
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
