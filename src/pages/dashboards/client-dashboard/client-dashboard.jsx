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

  // Show error state
  // if (error) {
  //   return (
  //     <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
  //       <div className="text-center">
  //         <i className="bi bi-exclamation-triangle text-danger" style={{ fontSize: "4rem" }}></i>
  //         <h2 className="mt-3 text-danger">Erreur de chargement</h2>
  //         <p className="text-muted">{error}</p>
  //         <button 
  //           className="btn btn-primary mt-3" 
  //           onClick={() => window.location.reload()}
  //         >
  //           Réessayer
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

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