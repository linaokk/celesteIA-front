import React from "react";
import "./vocal-input.css"; 

const Vocals = () => {
  // Example click handlers (instead of inline onclick)
  const handlePauseClick = () => {
    alert("Pause clicked!");
  };

  const handlePlayClick = () => {
    alert("Play clicked!");
  };

  return (
    <div className="vocals gap-3 mx-3 my-5 border-custom">
      {/* Header */}
      <div className="head mx-3 my-5 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <div
            className="bg-warning bg-opacity-25 rounded-3 d-flex align-items-center justify-content-center"
            style={{ width: "45px", height: "45px" }}
          >
            <i className="bi bi-play text-warning fs-2"></i>
          </div>
          <div className="head-text">
            <h3 className="fw-bolder lh-1 mb-0 text-capitalize text-white">
              Enregistrements d'Appels
            </h3>
            <span className="text-white opacity-25 lh-1">
              Derniers appels enregistres
            </span>
          </div>
        </div>
        <button className="btn-export">
          <div className="content">
            <i className="bi bi-download"></i>
            <span>Exporter tout</span>
          </div>
          <i className="bi bi-download"></i>
        </button>
      </div>

      {/* Audio List */}
      <div className="audios mx-3 my-5">
        
        {/* Audio 1 */}
        <div className="audio m-3 p-3 border-custom">
          <div className="audio-head d-flex flex-column flex-sm-row justify-content-between align-items-start align-sm-items-center mb-2">
            <div className="number d-flex gap-3 align-items-center">
              <div
                className="bg-transparent rounded border border-1 border-secondary d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                onClick={handlePauseClick}
              >
                <i className="bi bi-pause text-white fs-6 fw-bolder"></i>
              </div>
              <div className="head-text">
                <h5 className="fw-bold text-white lh-1 mb-0">06 10 04 35 27</h5>
                <small className="text-white opacity-25 lh-0 fs-sm">
                  Questions sur les horaires d'ouverture
                </small>
              </div>
            </div>
            <div className="growth-down d-flex gap-3 align-items-center text-muted">
              <div className="d-flex gap-1">
                <div
                  className="growth d-flex align-items-center justify-content-center"
                  style={{ width: "20px", height: "20px" }}
                >
                  <i className="bi bi-calendar fs-6 text-white opacity-25"></i>
                </div>
                <small className="fw-normal text-white opacity-25">
                  12/04/2024
                </small>
              </div>
              <div className="d-flex gap-1">
                <div
                  className="growth d-flex align-items-center justify-content-center"
                  style={{ width: "20px", height: "20px" }}
                >
                  <i className="bi bi-clock fs-6 text-white opacity-25"></i>
                </div>
                <small className="fw-normal text-white opacity-25">2:34</small>
              </div>
            </div>
          </div>
        </div>

        {/* Audio 2 */}
        <div className="audio m-3 p-3 border-custom">
          <div className="audio-head d-flex flex-column flex-sm-row justify-content-between align-items-start align-sm-items-center mb-2">
            <div className="number d-flex gap-3 align-items-center">
              <div
                className="bg-transparent rounded border border-1 border-secondary d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                onClick={handlePlayClick}
              >
                <i className="bi bi-play text-white fs-6 fw-bolder"></i>
              </div>
              <div className="head-text">
                <h5 className="fw-bold text-white lh-1 mb-0">06 35 27 10 04</h5>
                <small className="text-white opacity-25 lh-0 fs-sm">
                  Demande d'annulation de commande
                </small>
              </div>
            </div>
            <div className="growth-down d-flex gap-3 align-items-center text-muted">
              <div className="d-flex gap-1">
                <div
                  className="growth d-flex align-items-center justify-content-center"
                  style={{ width: "20px", height: "20px" }}
                >
                  <i className="bi bi-calendar fs-6 text-white opacity-25"></i>
                </div>
                <small className="fw-normal text-white opacity-25">
                  10/08/2025
                </small>
              </div>
              <div className="d-flex gap-1">
                <div
                  className="growth d-flex align-items-center justify-content-center"
                  style={{ width: "20px", height: "20px" }}
                >
                  <i className="bi bi-clock fs-6 text-white opacity-25"></i>
                </div>
                <small className="fw-normal text-white opacity-25">9:41</small>
              </div>
            </div>
          </div>
        </div>

        {/* Audio 3 */}
        <div className="audio m-3 p-3 border-custom">
          <div className="audio-head d-flex flex-column flex-sm-row justify-content-between align-items-start align-sm-items-center mb-2">
            <div className="number d-flex gap-3 align-items-center">
              <div
                className="bg-transparent rounded border border-1 border-secondary d-flex align-items-center justify-content-center"
                style={{ width: "24px", height: "24px", cursor: "pointer" }}
                onClick={handlePlayClick}
              >
                <i className="bi bi-play text-white fs-6 fw-bolder"></i>
              </div>
              <div className="head-text">
                <h5 className="fw-bold text-white lh-1 mb-0">06 04 35 27 10</h5>
                <small className="lh-0 fs-sm text-white opacity-25">
                  Suivi de livraison
                </small>
              </div>
            </div>
            <div className="growth-down d-flex gap-3 align-items-center text-muted">
              <div className="d-flex gap-1">
                <div
                  className="growth d-flex align-items-center justify-content-center"
                  style={{ width: "20px", height: "20px" }}
                >
                  <i className="bi bi-calendar fs-6 text-white opacity-25"></i>
                </div>
                <small className="fw-normal text-white opacity-25">
                  17/11/2024
                </small>
              </div>
              <div className="d-flex gap-1">
                <div
                  className="growth d-flex align-items-center justify-content-center"
                  style={{ width: "20px", height: "20px" }}
                >
                  <i className="bi bi-clock fs-6 text-white opacity-25"></i>
                </div>
                <small className="fw-normal text-white opacity-25">11:16</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Vocals;