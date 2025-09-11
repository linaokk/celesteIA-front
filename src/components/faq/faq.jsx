import { useState, React, useRef, useEffect } from "react";
import { useFaqs } from "../../hooks/useFaqs";
import "./faq.css";
import { useReports } from "../../hooks/useReports"; 
const Faqs = ({ options, selected, onChange }) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from({ length: 20 }, (_, i) => 2010 + i);

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState();
    const { reports, getReportByDate, downloadPDF } = useReports();
  const pickerRef = useRef(null);
  const { faqs, loading, error } = useFaqs();
  const [showHistory, setShowHistory] = useState(false);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const handleOpenHistory = () => {
    setShowHistory(true);
  };

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [validated, setValidated] = useState(false);

  const handleDownloadPDF = () => {
    const report = getReportByDate(month, year);
    if (report) {
      downloadPDF(report.pdfData, `rapport-${month}-${year}.pdf`);
    } else {
      alert("Aucun rapport trouvé pour cette période");
    }
  };
  useEffect(() => {
    if (month && year) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [month, year]);




  useEffect(() => {
    if (showHistory && monthRef.current) {
      const index = months.indexOf(selectedMonth);
      monthRef.current.scrollTo({
        top: index * 40,
        behavior: "auto",
      });
    }
    if (showHistory && yearRef.current) {
      const index = years.indexOf(selectedYear);
      yearRef.current.scrollTo({
        top: index * 40,
        behavior: "auto",
      });
    }
  }, [showHistory, selectedMonth, selectedYear]);

  const handleCancel = () => {
    setShowHistory(false);
  };

  // const handleValidate = () => {
  //   console.log("Validated!");
  //   setShowHistory(false);
  // };



  if (loading) return <p className="text-white">Chargement...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!faqs.length) return <p className="text-white">Aucune FAQ trouvée</p>;

  return (
    <div className="faqs gap-3 mx-3 my-5 border-custom">
      <div className="head d-flex align-items-center gap-3 mx-3 my-5 justify-content-between">
        {/* Left side */}
        <div className="d-flex align-items-center gap-3">
          <div
            className="bg-primary bg-opacity-25 rounded-3 d-flex align-items-center justify-content-center"
            style={{ width: "45px", height: "45px" }}
          >
            <i className="bi bi-chat text-primary fs-4"></i>
          </div>
          <div className="head-text">
            <h3 className="fw-bolder text-white lh-1 mb-0 text-capitalize">
              Top {faqs.length} questions Fréquentes
            </h3>
            <span className="text-white opacity-50 lh-1">
              Questions les plus posées cette Semaine
            </span>
          </div>
        </div>

        {/* Right side - History button */}
        <button className="btn-export" onClick={handleOpenHistory}>
          <div className="content">
            <i className="bi bi-clock-history"></i>
            <span>History</span>
          </div>
          <i className="bi bi-clock-history"></i>
        </button>

        {showHistory && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
            style={{ zIndex: 1050 }}
          >
            <div className="bg-dark p-4" style={{ width: "400px" }}>
              <h6 className="mb-3 text-white">Select Month & Year</h6>

              {/* Month & Year Select */}
              <div className="d-flex gap-4 mb-3">
                <select
                  className="custom-select"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  size={5}
                >
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((m, i) => (
                    <option key={i} value={i + 1}>
                      {m}
                    </option>
                  ))}
                </select>

                <select
                  className="custom-select"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  size={5}
                >
                  {Array.from({ length: 15 }, (_, i) => 2020 + i).map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              {/* Actions */}
              <div className="d-flex justify-content-end gap-2">
                {/* Download button appears only if validated */}
                {validated && (
                  <div className="text-center">            
                    <button className="btn-export" onClick={handleDownloadPDF}>
                      <div className="content">
                        <i className="bi bi-file-earmark-pdf"></i>
                        <span>Download PDF</span>
                      </div>
                      <i className="bi bi-file-earmark-pdf"></i>
                    </button>
                  </div>
                )}
                <button className="btn-cancel" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
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


