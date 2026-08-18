import Icons from "./components/Icons";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PersonasSection from "./components/PersonasSection";
import ComoSection from "./components/ComoSection";
import StatsBand from "./components/StatsBand";
import EmpresasSection from "./components/EmpresasSection";
import QuoteSection from "./components/QuoteSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Icons />
      <Header />
      <main id="top">
        <Hero />
        <PersonasSection />
        <ComoSection />
        <StatsBand />
        <EmpresasSection />
        <QuoteSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
