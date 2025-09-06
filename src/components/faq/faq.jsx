import React from "react";
import "./faq.css";

const Faqs = () => {
  return (
    <div className="faqs gap-3 mx-3 my-5 border-custom">
      
      {/* Header */}
      <div className="head d-flex align-items-center gap-3 mx-3 my-5">
        <div
          className="bg-primary bg-opacity-25 rounded-3 d-flex align-items-center justify-content-center"
          style={{ width: "45px", height: "45px" }}
        >
          <i className="bi bi-chat text-primary fs-4"></i>
        </div>
        <div className="head-text">
          <h3 className="fw-bolder text-white lh-1 mb-0 text-capitalize">
            Top 3 questions Fréquentes
          </h3>
          <span className="text-white opacity-50 lh-1">
            Questions les plus posées ce mois
          </span>
        </div>
      </div>

      {/* Bars */}
      <div className="bars mx-3 my-5">
        
        {/* Bar 1 */}
        <div className="bar m-3">
          <div className="bar-head d-flex justify-content-between align-items-center mb-2">
            <div className="question d-flex gap-2 align-items-center">
              <div
                className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "25px", height: "25px" }}
              >
                <small className="fw-normal text-white">1</small>
              </div>
              <span className="fw-bolder text-white">C'est trop wallah!</span>
            </div>
            <div className="growth-down d-flex gap-2 align-items-center">
              <div
                className="growth d-flex align-items-center justify-content-center"
                style={{ width: "20px", height: "20px" }}
              >
                <i className="bi bi-graph-up-arrow text-success fs-6"></i>
              </div>
              <small className="fw-bold text-white">124</small>
            </div>
          </div>
          <div className="bar-body mb-1">
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar custom-progress"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="bar-head d-flex justify-content-between align-items-center mb-2">
            <div className="lh-0">
              <span className="fw-normal fs-sm text-white opacity-25">
                42% du total
              </span>
            </div>
            <div className="growth-down d-flex gap-2 align-items-center">
              <small className="fw-normal fs-sm text-white opacity-25">
                124 demandes
              </small>
            </div>
          </div>
        </div>

        {/* Bar 2 */}
        <div className="bar m-3">
          <div className="bar-head d-flex justify-content-between align-items-center mb-2">
            <div className="question d-flex gap-2 align-items-center">
              <div
                className="bg-secondary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "25px", height: "25px" }}
              >
                <small className="fw-normal text-white">2</small>
              </div>
              <span className="fw-bolder text-white">Pas de temps pour s'engager</span>
            </div>
            <div className="growth-down d-flex gap-2 align-items-center">
              <div
                className="growth d-flex align-items-center justify-content-center"
                style={{ width: "20px", height: "20px" }}
              >
                <i className="bi bi-graph-up-arrow text-success fs-6"></i>
              </div>
              <small className="fw-bold text-white">209</small>
            </div>
          </div>
          <div className="bar-body mb-1">
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar custom-progress"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="bar-head d-flex justify-content-between align-items-center mb-2">
            <div className="lh-0">
              <span className="fw-normal fs-sm text-white opacity-25">
                20% du total
              </span>
            </div>
            <div className="growth-down d-flex gap-2 align-items-center">
              <small className="fw-normal fs-sm text-white opacity-25">
                209 demandes
              </small>
            </div>
          </div>
        </div>

        {/* Bar 3 */}
        <div className="bar m-3">
          <div className="bar-head d-flex justify-content-between align-items-center mb-2">
            <div className="question d-flex gap-2 align-items-center">
              <div
                className="bg-secondary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "25px", height: "25px" }}
              >
                <small className="fw-normal text-white">3</small>
              </div>
              <span className="fw-bolder text-white">C'est finançable pour le CPF?</span>
            </div>
            <div className="growth-down d-flex gap-2 align-items-center">
              <div
                className="growth d-flex align-items-center justify-content-center"
                style={{ width: "20px", height: "20px" }}
              >
                <i className="bi bi-graph-up-arrow text-success fs-6"></i>
              </div>
              <small className="fw-bold text-white">115</small>
            </div>
          </div>
          <div className="bar-body mb-1">
            <div className="progress" style={{ height: "8px" }}>
              <div
                className="progress-bar custom-progress"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="bar-head d-flex justify-content-between align-items-center mb-2">
            <div className="lh-0">
              <span className="fw-normal fs-sm text-white opacity-25">
                80% du total
              </span>
            </div>
            <div className="growth-down d-flex gap-2 align-items-center">
              <small className="fw-normal fs-sm text-white opacity-25">
                115 demandes
              </small>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Faqs;