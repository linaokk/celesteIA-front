import { useEffect, useMemo, useState } from 'react';
import {KPI_DASHBOARD_CLIENT_ENDPOINT  } from '../constants/serverApi';
import { useAuthContext } from './useAuthContext';

// Fetch helper that includes auth header if available
const fetchWithAuth = async (url, token) => {
  const response = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
  if (!response.ok) {
    const message = await response.text().catch(() => '');
    throw new Error(message || `Request failed: ${response.status}`);
  }
  return response.json();
};

// Hook to fetch 4 KPI metrics from the backend
// API Response structures:
// - callsThisMonth: { calls: [...], callsThisMonthCount: number }
// - averageCallDuration: { averageDurationSeconds: number, averageDurationMinutes: number }
// - averageCallCost: { callsCount: number, pricingMode: string, totalCost: number, averageCost: number }
export const useKpis = () => {
  const { user } = useAuthContext();
  const authToken = user?.token;
  const agentId = user?.agentId;
console.log(agentId);
  const endpoints = useMemo(() => ({
    kpis:`${KPI_DASHBOARD_CLIENT_ENDPOINT}?agentId=${agentId}`, 
  }), [agentId]);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const load = async () => {
      // Ne pas charger les KPIs si l'agentId n'est pas disponible
      if (!agentId) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetchWithAuth(endpoints.kpis, authToken);

        const kpis = [
          {
            id: 1,
            icon: 'bi-clock',
            badgeColor: 'bg-info',
            title: "Durée moyenne d'appel",
            value: `${res.averageDurationMinutes.toFixed(1)}`,
            description: 'minutes par appel',
          },
          {
            id: 2,
            icon: 'bi-telephone',
            badgeColor: 'bg-success',
            title: 'Appels ce mois',
            value: String(res.callsThisMonthCount),
            description: 'appels ce mois',
          },
          {
            id: 3,
            icon: 'bi-currency-euro',
            badgeColor: 'bg-warning',
            title: 'Coût moyen par appel',
            value: `${res.averageCost.toFixed(2)}`,
            description: 'dirhams par appel',
          },
          {
            id: 4,
            icon: 'bi-graph-up-arrow',
            badgeColor: 'bg-info',
            title: 'Total des appels',
            value: String(res.callsCount),
            description: 'appels au total',
          },
        ];

        setData(kpis);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [endpoints, authToken, agentId]);
  

  return { data, isLoading, error };
};

export default useKpis;


