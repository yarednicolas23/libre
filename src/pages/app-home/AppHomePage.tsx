import "./AppHome.css";
import AppIcons from "./AppIcons";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import CreditCard from "./CreditCard";
import NextPayment from "./NextPayment";
import QuickActions from "./QuickActions";
import MovementsSection from "./MovementsSection";
import OfferCard from "./OfferCard";
import CreditSummary from "./CreditSummary";
import HelpButton from "./HelpButton";
import TabBar from "./TabBar";

export default function AppHomePage() {
  return (
    <div className="app-home">
      <AppIcons />

      <div className="app">
        <Sidebar />

        <div className="screen">
          <TopBar />

          <div className="body">
            <CreditCard />

            <div className="stack-a">
              <NextPayment />
              <QuickActions />
              <MovementsSection />
            </div>

            <div className="col-b">
              <OfferCard />
              <CreditSummary />
              <HelpButton />
              <p className="applegal">Los valores mostrados corresponden al último corte de nómina reportado por tu pagaduría.</p>
            </div>
          </div>
        </div>
      </div>

      <TabBar />
    </div>
  );
}
