import React from "react";
import "./dashboard-header.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout"; // ajuste le chemin si besoin

const HeaderNav = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  // Debug: log user data to see the structure
  console.log('User data in header:', user);

  // Try different possible field names for company name
  const companyName = user?.userCompanyName || "COMPANY NAME";

  return (
    <div className="header-nav gap-3 mx-3 my-5">
      <div className="d-flex justify-content-between">
        <div>
          <div className="head d-flex align-items-center gap-3">
            <div
              className="bg-primary rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: "45px", height: "45px" }}
            >
              <i className="bi bi-telephone text-black fs-4 fw-bolder"></i>
            </div>
            <div className="head-text">
              <h3 className="fw-bolder text-white lh-1 mb-0 text-capitalize">
                Tableau de bord - Agent vocal {companyName}
              </h3>
              <span className="text-light opacity-50 lh-1">
                Analyse des conversations et performances en temps réel
              </span>
            </div>
          </div>
          <small className="text-light opacity-50">
            Derniere maj: 3 sept 2025 à 08:17
          </small>
        </div>
        <div className="d-flex align-items-center gap-4">
          <button className="btn-export" onClick={logout}>
            <div className="content">
              <i className="bi bi-box-arrow-right me-1"></i>
              <span>Se deconnecter</span>
            </div>
            <i className="bi bi-box-arrow-right me-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;