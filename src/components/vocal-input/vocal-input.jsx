// ...existing code...
import React, { useState, useRef } from "react";
import "./vocal-input.css";

const Vocals = ({ audios = [], loading = false, error = null }) => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  const agentAudios = audios[0]?.audios || [];

  // Calcul des audios pour la page courante
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAudios = agentAudios.slice(startIndex, endIndex);
  const totalPages = Math.max(1, Math.ceil(agentAudios.length / itemsPerPage));

  const handlePlayPause = async (index) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    // stop other audios
    audioRefs.current.forEach((a, i) => {
      if (a && i !== index) {
        a.pause();
        a.currentTime = 0;
      }
    });

    try {
      if (playingIndex === index) {
        currentAudio.pause();
        setPlayingIndex(null);
      } else {
        await currentAudio.play();
        setPlayingIndex(index);
      }
    } catch (err) {
      console.error("Audio play error:", err);
    }
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
{currentAudios.map((audio, index) => {
  const globalIndex = startIndex + index;

  // Formater la durée
  let durationText = "";
  if (audio.duration >= 60) {
    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);
    durationText = `${minutes} min ${seconds > 0 ? seconds + " s" : ""}`;
  } else {
    durationText = `${Math.floor(audio.duration)} s`;
  }

  // Formater la date
  const callDate = new Date(audio.callDate);
  const dateText = callDate.toLocaleDateString(); // format : dd/mm/yyyy
  const timeText = callDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div key={globalIndex} className="audio m-3 p-3 border-custom">
      <div className="audio-head d-flex flex-column flex-sm-row justify-content-between align-items-start align-sm-items-center mb-2">
        <div className="number d-flex gap-3 align-items-center">
          <div
            className="bg-transparent rounded border border-1 border-secondary d-flex align-items-center justify-content-center"
            style={{ width: "24px", height: "24px", cursor: "pointer" }}
            onClick={() => handlePlayPause(globalIndex)}
          >
            <i
              className={`bi fs-6 fw-bolder text-white ${
                playingIndex === globalIndex ? "bi-pause" : "bi-play"
              }`}
            ></i>
          </div>
          <div className="head-text">
            <h5 className="fw-bold text-white lh-1 mb-0">{audio.from_number}</h5>
            <small className="text-white opacity-25 lh-0 fs-sm">
              Audio enregistrement
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
            <small className="fw-normal text-white opacity-25">{dateText}</small>
          </div>
          <div className="d-flex gap-1">
            <div
              className="growth d-flex align-items-center justify-content-center"
              style={{ width: "20px", height: "20px" }}
            >
              <i className="bi bi-clock fs-6 text-white opacity-25"></i>
            </div>
            <small className="fw-normal text-white opacity-25">{durationText}</small>
          </div>
        </div>
      </div>
      <audio ref={(el) => (audioRefs.current[globalIndex] = el)} src={audio.url}></audio>
    </div>
  );
})}

      </div>

      {/* Pagination */}
      <div className="pagination d-flex justify-content-center gap-2 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="btn btn-sm btn-secondary"
        >
          Précédent
        </button>
        <span className="text-white align-self-center">
          {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="btn btn-sm btn-secondary"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Vocals;
// ...existing code...