import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./AppHome.css";
import { getSession } from "../../lib/auth";
import { fetchHome, type HomeData } from "../../lib/home";
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
  const session = getSession();
  const [data, setData] = useState<HomeData | null>(null);

  useEffect(() => {
    document.title = "Libre — Inicio";
    if (!session) return;
    let alive = true;
    fetchHome().then((d) => alive && setData(d));
    return () => { alive = false; };
  }, [session?.document]);

  if (!session) return <Navigate to="/login" replace />;

  return (
    <div className="app-home">
      <AppIcons />

      <div className="app">
        <Sidebar />

        <div className="screen" aria-busy={!data}>
          {data && (
            <>
              <TopBar user={data.user} upToDate={data.credit.upToDate} unread={data.unreadNotifications} />

              <div className="body">
                <CreditCard credit={data.credit} />

                <div className="stack-a">
                  <NextPayment next={data.nextDeduction} />
                  <QuickActions />
                  <MovementsSection movements={data.movements} />
                </div>

                <div className="col-b">
                  {data.offer && <OfferCard offer={data.offer} paidInstallments={data.credit.paidInstallments} />}
                  <CreditSummary credit={data.credit} />
                  <HelpButton />
                  <p className="applegal">Los valores mostrados corresponden al último corte de nómina reportado por tu pagaduría.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <TabBar />
    </div>
  );
}
