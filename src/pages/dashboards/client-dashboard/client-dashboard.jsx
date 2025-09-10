import HeaderNav from "../../../components/dashboard-header/dashboard-header"
import Card from "../../../components/cards/cards"
import Faqs from "../../../components/faq/faq"
import Vocals from "../../../components/vocal-input/vocal-input"
import LoadingPage from "../../../components/loading-page/loading-page"
import "./client-dashboard.css"
import { useKpis } from "../../../hooks/useKpis"
import { useAuthContext } from "../../../hooks/useAuthContext"

const Dashboard = () => {
  const { data: cardsData, isLoading, error } = useKpis();
  const { user } = useAuthContext();

  // Show loading page while KPI data is loading
  if (isLoading) {
    return <LoadingPage companyName={user?.userCompanyName || "Votre entreprise"} />;
  }


  return (
    // <div className="mt-5">
    //   <HeaderNav />
    //   <div className="boxes d-flex flex-lg-row flex-column justify-content-between gap-3 mx-3 my-5">
    //     {cardsData && cardsData.map((card) => (
    //       <Card key={card.id} data={card} />
    //     ))}
    //   </div>
    //   <Faqs />
    //   <Vocals />
    // </div>
    <div>
      <HeaderNav />
      <div className="boxes d-flex flex-lg-row flex-column justify-content-between gap-3 mx-3 my-5">
        {cardsData && cardsData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <Faqs />
      <Vocals />
    </div>
  );
};

export default Dashboard;