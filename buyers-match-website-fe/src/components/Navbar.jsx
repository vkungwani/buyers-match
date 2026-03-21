import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteData } from "../config/siteData";
import logo from "../assets/bm-logo-white-text-1B2A4A.jpg";
import {
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  TikTokIcon,
} from "./SocialIcons";

const getSocialIcon = (name) => {
  switch (name.toLowerCase()) {
    case "facebook": return FacebookIcon;
    case "instagram": return InstagramIcon;
    case "linkedin": return LinkedInIcon;
    case "youtube": return YouTubeIcon;
    case "tiktok": return TikTokIcon;
    default: return FacebookIcon;
  }
};

const getSocialColor = (name) => {
  switch (name.toLowerCase()) {
    case "facebook": return "#0866FF";
    case "instagram": return "#E4405F";
    case "linkedin": return "#004182";
    case "youtube": return "#FF0000";
    case "tiktok": return "#ffffff";
    default: return "#2ABFBF";
  }
};

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

  // Lock body scroll and set state class when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }
    return () => { 
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

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
          className={`relative text-[13.5px] font-semibold transition-colors duration-200 ${
            isActive && !isMobileMenuOpen
              ? "text-[#2ABFBF] font-extrabold"
              : "text-white hover:text-[#2ABFBF]"
          }`}
        >
          {label}
          {isActive && !isMobileMenuOpen && (
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
            className={`flex-shrink-0 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0 invisible pointer-events-none" : "opacity-100"}`}
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
                ? "fixed inset-0 bg-[#1B2A4A] flex flex-col pt-16 px-[8%] pb-6 z-[350] h-screen w-screen overflow-hidden"
                : "hidden"
            }`}
          >
            <div className="space-y-4 mb-auto">
              {navItem("method", "Our Method")}
              {navItem("services", "How We Help")}
              {navItem("purchases", "Results")}
              {navItem("who", "Who We Help")}
              {navItem("testimonials", "Testimonials")}
            </div>

            <li className="lg:hidden w-full space-y-5 border-t border-white/10 pt-6">
              <div className="grid grid-cols-1 gap-3">
                <a href={`mailto:${siteData.contact.email}`} className="flex items-center gap-2.5 text-white text-[11px] font-bold tracking-tight">
                   <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center">
                     <MailIcon className="w-2.5 h-2.5 text-[#2ABFBF]" />
                   </div>
                   {siteData.contact.email}
                </a>
                
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {siteData.contact.phones.map((phone, i) => (
                    <a key={i} href={`tel:+61${phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2.5 text-white text-[11px] font-bold tracking-tight">
                       <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center">
                         <PhoneIcon className="w-2.5 h-2.5 text-[#2ABFBF]" />
                       </div>
                       {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                {siteData.socials.map((social) => {
                  const Icon = getSocialIcon(social.name);
                  const color = getSocialColor(social.name);
                  return (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                       <Icon className="w-3.5 h-3.5" style={{ color }} />
                    </a>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-2.5 pt-1">
                <button className="w-full bg-white/5 text-[#2ABFBF] py-2.5 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] border border-[#2ABFBF]/20">
                  CFA Calculator
                </button>
                <button
                  onClick={(e) => {
                    openCalendly(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#2ABFBF] text-[#1B2A4A] py-2.5 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-[#2ABFBF]/10"
                >
                  Free Strategy Call →
                </button>
              </div>
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
