import React from "react";
import { useFaqs } from "../../hooks/useFaqs";
import "./faq.css";

const Faqs = () => {
  const { faqs, loading, error } = useFaqs();

  if (loading) return <p className="text-white">Chargement...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!faqs.length) return <p className="text-white">Aucune FAQ trouvée</p>;

  return (
    <div className="faqs gap-3 mx-3 my-5 border-custom">
      <div className="head d-flex align-items-center gap-3 mx-3 my-5">
        <div className="bg-primary bg-opacity-25 rounded-3 d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}>
          <i className="bi bi-chat text-primary fs-4"></i>
        </div>
        <div className="head-text">
          <h3 className="fw-bolder text-white lh-1 mb-0 text-capitalize">
            Top {faqs.length} questions Fréquentes
          </h3>
          <span className="text-white opacity-50 lh-1">Questions les plus posées cette Semaine</span>
        </div>
      </div>

      <div className="bars mx-3 my-5">
        {faqs.map((faq, index) => (
          <div key={faq._id} className="bar m-3">
            <div className="bar-head d-flex justify-content-between align-items-center mb-2">
              <div className="question d-flex gap-2 align-items-center">
                <div className={`${index === 0 ? "bg-primary" : "bg-secondary bg-opacity-25"} rounded-circle d-flex align-items-center justify-content-center`} style={{ width: "25px", height: "25px" }}>
                  <small className="fw-normal text-white">{index + 1}</small>
                </div>
                <span className="fw-bolder text-white">{faq.question}</span>
              </div>
              <div className="growth-down d-flex gap-2 align-items-center">
                <div className="growth d-flex align-items-center justify-content-center" style={{ width: "20px", height: "20px" }}>
                  <i className="bi bi-graph-up-arrow text-success fs-6"></i>
                </div>
                <small className="fw-bold text-white">{faq.frequency}</small>
              </div>
            </div>

            <div className="bar-body mb-1">
              <div className="progress" style={{ height: "6px" }}>
                <div
                  className="progress-bar custom-progress"
                  role="progressbar"
                  style={{ width: `${Math.min(faq.frequency * 10, 100)}%` }}
                  aria-valuenow={faq.frequency}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="bar-head d-flex justify-content-between align-items-center mb-2">
              <div className="lh-0">
                <span className="fw-normal fs-sm text-white opacity-25">
                  {Math.min(faq.frequency * 10, 100)}% du total
                </span>
              </div>
              <div className="growth-down d-flex gap-2 align-items-center">
                <small className="fw-normal fs-sm text-white opacity-25">
                  {faq.frequency} demandes
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
