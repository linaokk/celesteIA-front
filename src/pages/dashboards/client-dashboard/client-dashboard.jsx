// ...existing code...
import HeaderNav from "../../../components/dashboard-header/dashboard-header"
import Card from "../../../components/cards/cards"
import Faqs from "../../../components/faq/faq"
import Vocals from "../../../components/vocal-input/vocal-input"
import LoadingPage from "../../../components/loading-page/loading-page"
import "./client-dashboard.css"
import { useKpis } from "../../../hooks/useKpis"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { useAudio } from "../../../hooks/useAudio"

const Dashboard = () => {
  const { data: cardsData, isLoading, error } = useKpis();
  const { user } = useAuthContext();
  const { audios, loading: audioLoading, error: audioError } = useAudio();

  // Show loading page while KPI data OR audio data is loading
  if (isLoading || audioLoading) {
    return <LoadingPage companyName={user?.userCompanyName || "Votre entreprise"} />;
  }


  return (
    <div>
      <HeaderNav />
      <div className="boxes d-flex flex-lg-row flex-column justify-content-between gap-3 mx-3 my-5">
        {cardsData && cardsData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <Faqs />
      <Vocals audios={audios} loading={audioLoading} error={audioError} />
    </div>
  );
};

export default Dashboard;
// ...existing code...