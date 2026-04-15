import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { PopupModal } from "react-calendly";
import { siteData } from "./config/siteData";
import LeadCaptureModal from "./components/LeadCaptureModal";
import "./index.css";
import StatsBar from "./components/StatsBar";
import WhoWeHelp from "./components/WhoWeHelp";
import Credentials from "./components/Credentials";
import HowWeHelp from "./components/HowWeHelp";
import VideoTestimonials from "./components/VideoTestimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RightFit from "./components/RightFit";
import LeadMagnet from "./components/LeadMagnet";
import Results from "./components/Results";
import Method from "./components/Method";
import Different from "./components/Different";
import GoogleReviews from "./components/GoogleReviews";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Awards from "./components/Awards";
import SocialBar from "./components/SocialBar";
import Contact from "./components/Contact";
import { WhatsAppFloatingButton } from "./components/WaButton";
import SuperNavbar from "./components/SuperNavbar";

// Pages
import BlogPage from "./pages/BlogPage";
import BlogsListPage from "./pages/BlogsListPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import CashflowCalculator from "./pages/cashflow-calculator";

function App() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const openLeadModal = (e) => {
    if (e) e.preventDefault();
    setIsLeadModalOpen(true);
  };

  const openCalendly = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsOpen(true);
  };

  const scrollToSection = (id) => {
    navigate(`/#${id}`);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const Home = () => {
    return (
      <>
        <Navbar scrollToSection={scrollToSection} openCalendly={openCalendly} />
        <Hero scrollToSection={scrollToSection} openCalendly={openCalendly} />
        <StatsBar />
        <Method
          scrollToSection={scrollToSection}
          openLeadModal={openLeadModal}
        />
        <HowWeHelp />

        {/* {
Method,HowWeHelp, Results, Testimonials
} */}

        <Different />
        <Results />
        <Process />
        <WhoWeHelp />
        <VideoTestimonials />
        <GoogleReviews />
        <SocialBar />
        <Awards />
        <Credentials />
        <LeadMagnet openLeadModal={openLeadModal} />
        <Blog />
        <RightFit
          scrollToSection={scrollToSection}
          openCalendly={openCalendly}
        />
        <Contact
          scrollToSection={scrollToSection}
          openCalendly={openCalendly}
          openLeadModal={openLeadModal}
        />
        <Footer scrollToSection={scrollToSection} openCalendly={openCalendly} openLeadModal={openLeadModal} />
      </>
    );
  };

  return (
    <div className="App">
      <SuperNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogsListPage openLeadModal={openLeadModal} openCalendly={openCalendly} />} />
        <Route path="/blog/:id" element={<BlogPage openLeadModal={openLeadModal} openCalendly={openCalendly} />} />
        <Route path="/case-studies" element={<CaseStudiesPage openLeadModal={openLeadModal} openCalendly={openCalendly} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy openLeadModal={openLeadModal} openCalendly={openCalendly} />} />
        <Route path="/terms" element={<TermsOfService openLeadModal={openLeadModal} openCalendly={openCalendly} />} />
        <Route path="/disclaimer" element={<Disclaimer openLeadModal={openLeadModal} openCalendly={openCalendly} />} />
        <Route path="/cashflow-calculator" element={<CashflowCalculator openLeadModal={openLeadModal} openCalendly={openCalendly} />} />
      </Routes>
      <PopupModal
        url={siteData.contact.calendly}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
      />
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
