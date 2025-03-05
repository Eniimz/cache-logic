import React from "react";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturesSection2 from "@/components/FeaturesSection2";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSections from "@/components/ContactSections";
import ContactPage from "@/components/ContactPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";

function App() {
  return (
    <main className="min-h-screen"
    style={{ backgroundImage: "url('bg_pattern.png')" }}
    >
      <Header />
      <Hero />
      <ClientLogos />
      <FeaturesSection />
      <FeaturesSection2 />
      <PortfolioSection />
      <div className="bg-white">
        <TeamSection />
      </div>
      <ContactSections />
      <ContactPage />
      <Footer />
    </main>
  );
}

export default App;
