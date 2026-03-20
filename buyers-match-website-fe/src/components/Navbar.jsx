import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { siteData } from "../config/siteData";
// import logo from "../assets/logo_removebg.png";
import logo from "../assets/bm-logo-white-text.JPG";

const Navbar = ({ scrollToSection, openCalendly }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      <nav id="nav" className={isMobileMenuOpen ? "mobile-menu-open" : ""}>
        <div className="wrap nav-inner">
          <Link
            to="/"
            className="nav-logo"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src={logo}
              alt="BuyersMatch Buyers Advocacy"
              style={{ height: "64px" }}
            />
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <li>
              <a
                href="/#method"
                onClick={(e) => handleNavClick(e, "method")}
                className={activeSection === "method" ? "active" : ""}
              >
                Our Method
              </a>
            </li>
            <li>
              <a
                href="/#services"
                onClick={(e) => handleNavClick(e, "services")}
                className={activeSection === "services" ? "active" : ""}
              >
                How We Help
              </a>
            </li>
            <li>
              <a
                href="/#purchases"
                onClick={(e) => handleNavClick(e, "purchases")}
                className={activeSection === "purchases" ? "active" : ""}
              >
                Results
              </a>
            </li>
            <li>
              <a
                href="/#who"
                onClick={(e) => handleNavClick(e, "who")}
                className={activeSection === "who" ? "active" : ""}
              >
                Who We Help
              </a>
            </li>
            <li>
              <a
                href="/#testimonials"
                onClick={(e) => handleNavClick(e, "testimonials")}
                className={activeSection === "testimonials" ? "active" : ""}
              >
                Testimonials
              </a>
            </li>
            <li className="mobile-only">
              <div className="nav-cta-row mobile">
                <a
                  href={`tel:${siteData.contact.phones[0].replace(/\s/g, "")}`}
                  className="nav-phone"
                >
                  {siteData.contact.phones[0]}
                </a>
                <a
                  href={`tel:${siteData.contact.phones[1].replace(/\s/g, "")}`}
                  className="nav-phone"
                >
                  {siteData.contact.phones[1]}
                </a>
                <button
                  onClick={(e) => {
                    openCalendly(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn btn-teal"
                >
                  Free Strategy Call →
                </button>
              </div>
            </li>
          </ul>

          <div className="nav-cta-row desktop-only">
            <a
              href={`tel:${siteData.contact.phones[0].replace(/\s/g, "")}`}
              className="nav-phone"
            >
              {siteData.contact.phones[0]}
            </a>
            <span style={{ color: "rgba(255,255,255,.3)", margin: "0 2px" }}>
              ·
            </span>
            <a
              href={`tel:${siteData.contact.phones[1].replace(/\s/g, "")}`}
              className="nav-phone"
            >
              {siteData.contact.phones[1]}
            </a>
            <button
              onClick={openCalendly}
              className="btn btn-teal"
              style={{
                padding: "10px 20px",
                fontSize: "13px",
                border: "none",
                cursor: "pointer",
              }}
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
