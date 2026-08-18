import Icons from "./landing-components/Icons";
import Header from "./landing-components/Header";
import Hero from "./landing-components/Hero";
import PersonasSection from "./landing-components/PersonasSection";
import ComoSection from "./landing-components/ComoSection";
import StatsBand from "./landing-components/StatsBand";
import EmpresasSection from "./landing-components/EmpresasSection";
import QuoteSection from "./landing-components/QuoteSection";
import FaqSection from "./landing-components/FaqSection";
import CtaSection from "./landing-components/CtaSection";
import Footer from "./landing-components/Footer";

export default function LandingPage() {
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
