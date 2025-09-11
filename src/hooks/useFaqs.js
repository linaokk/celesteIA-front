import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext"; // pour récupérer agentId
import { FAQ_DASHBOARD_SERVER_ENDPOINT } from "../constants/serverApi";

export const useFaqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user?.agentId) return;

    const fetchFaqs = async () => {
      try {
        const res = await axios.get(`${FAQ_DASHBOARD_SERVER_ENDPOINT}?agentId=${user.agentId}`, {
          headers: {
            Authorization: `Bearer ${user.token}`, // 🔑 ajoute le token ici
          },
        });
        setFaqs(res.data.faq.questions || []);
        setAudios(res.data?.faq.audios || []);

      } catch (err) {
        setError(err.message || "Erreur lors du chargement des FAQs");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [user?.agentId]);

  return { faqs, loading, error , audios};
};
