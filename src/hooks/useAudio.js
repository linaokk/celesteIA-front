// ...existing code...
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { SERVER_API_URL } from "../constants/serverApi";

export const useAudio = () => {
  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user?.agentId || !user?.token) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchAudios = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${SERVER_API_URL}/faq/audios?agentId=${user.agentId}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
            signal: controller.signal,
          }
        );
        setAudios(response.data);
        console.log("in use Audio ", response.data);
      } catch (err) {
        if (axios.isCancel?.(err) || err.name === "CanceledError") return;
        setError(err.message || "Erreur lors de la récupération des audios");
      } finally {
        setLoading(false);
      }
    };

    fetchAudios();

    return () => controller.abort();
  }, [user?.agentId, user?.token]);

  return { audios, loading, error };
};
// ...existing code...