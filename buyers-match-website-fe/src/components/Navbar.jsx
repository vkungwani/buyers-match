import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteData } from "../config/siteData";
import logo from "../assets/bm-logo-white-text-1B2A4A.jpg";

const Navbar = ({ scrollToSection, openCalendly }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    const sections = ["method", "services", "purchases", "who", "testimonials"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, hash) => {
    if (scrollToSection) {
      e.preventDefault();
      scrollToSection(hash);
      setIsMobileMenuOpen(false);
    }
  };

  const navItem = (id, label) => {
    const isActive = activeSection === id;
    const path = `/#${id}`;

    return (
      <li className="relative">
        <a
          href={path}
          onClick={(e) => handleNavClick(e, id)}
          className={`relative text-[13px] font-semibold transition-colors duration-200 ${
            isActive
              ? "text-[#2ABFBF] font-extrabold"
              : "text-white/60 hover:text-[#2ABFBF]"
          }`}
        >
          {label}
          {isActive && (
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2ABFBF] transition-all duration-300 transform scale-100" />
          )}
        </a>
      </li>
    );
  };

  return (
    <>
      <nav
        id="nav"
        className={`sticky top-0 left-0 right-0 z-[300] bg-[#1B2A4A] border-none transition-all duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
          scrolled ? "h-[54px] shadow-2xl" : "h-[92px]"
        }`}
      >
        <div
          className={`max-w-[1200px] mx-auto px-[5%] flex items-center justify-between gap-5 h-full transition-all duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)]`}
        >
          <Link
            to="/"
            className="flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src={logo}
              alt="BuyersMatch"
              className={`object-contain transition-all duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
                scrolled ? "h-[38px]" : "h-[86px]"
              }`}
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 border border-[#2ABFBF]/25 rounded-lg z-[400]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`relative w-5 h-[2px] bg-[#2ABFBF] transition-all duration-300 ${isMobileMenuOpen ? "bg-transparent" : ""}`}
            >
              <div
                className={`absolute w-5 h-0.5 bg-[#2ABFBF] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`}
              />
              <div
                className={`absolute w-5 h-0.5 bg-[#2ABFBF] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`}
              />
            </div>
          </button>

          {/* Nav Links */}
          <ul
            className={`lg:flex items-center gap-6 list-none transition-all duration-300 ${
              isMobileMenuOpen
                ? "fixed inset-0 top-[92px] bg-[#1B2A4A] flex-col p-8 z-[350] h-screen overflow-y-auto"
                : "hidden"
            }`}
          >
            {navItem("method", "Our Method")}
            {navItem("services", "How We Help")}
            {navItem("purchases", "Results")}
            {navItem("who", "Who We Help")}
            {navItem("testimonials", "Testimonials")}

            <li className="lg:hidden mt-8 w-full space-y-4">
              <button className="w-full bg-white/5 text-[#2ABFBF] py-3 rounded-lg font-bold border border-[#2ABFBF]/30">
                CFA Calculator
              </button>
              <button
                onClick={(e) => {
                  openCalendly(e);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-[#2ABFBF] text-[#1B2A4A] py-3 rounded-lg font-bold shadow-lg shadow-[#2ABFBF]/30"
              >
                Free Strategy Call →
              </button>
            </li>
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              className="inline-flex items-center px-4 py-2 border-1.5 border-white/20 text-white text-[12px] font-bold rounded-lg hover:border-[#2ABFBF] hover:text-[#2ABFBF] transition-all duration-200"
              style={{ borderWidth: "1.5px" }}
            >
              CFA Calculator
            </button>
            <button
              onClick={openCalendly}
              className="inline-flex items-center px-5 py-2.5 bg-[#2ABFBF] text-[#1B2A4A] text-[13px] font-bold rounded-lg hover:bg-[#1E9898] hover:text-white transition-all duration-200 shadow-[0_8px_24px_rgba(42,191,191,0.35)]"
            >
              Free Strategy Call →
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
