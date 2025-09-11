import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { REPORTS_HISTORY_SERVER_ENDPOINT } from "../constants/serverApi";

export const useReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();
useEffect(() => {
  if (!user?.agentId || reports.length > 0) return;

  const fetchReports = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${REPORTS_HISTORY_SERVER_ENDPOINT}?agentId=bc119fc8-b41b-4f90-a2b8-6a63e29edac3`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setReports(res.data.history || []);
    } catch (err) {
      setError("Erreur lors du chargement des rapports");
    } finally {
      setLoading(false);
    }
  };

  fetchReports();
}, [user, reports.length]);

  const getReportByDate = (month, year) => {
    const formattedMonth = String(month).padStart(2, "0"); 
    const searchKey = `${year}-${formattedMonth}`;
    return reports.find((r) => r.month === searchKey);
  };

  const downloadPDF = (pdfBase64, fileName = "rapport.pdf") => {
    const linkSource = `data:application/pdf;base64,${pdfBase64}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return { reports, loading, error, getReportByDate, downloadPDF };
};
