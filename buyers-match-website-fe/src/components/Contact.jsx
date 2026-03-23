import React from "react";
import { siteData } from "../config/siteData";
import AnimatedText from "./AnimatedText";

const Contact = ({ scrollToSection, openCalendly, openLeadModal }) => {
  return (
    <section
      id="ctabanner"
      className="py-[60px] bg-[#2ABFBF] text-center relative overflow-hidden"
    >
      {/* Diagonal stripe BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(45deg,transparent,transparent 42px,rgba(27,42,74,.04) 42px,rgba(27,42,74,.04) 84px)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-[5%] relative z-[1]">
        <div className="text-[11px] font-bold text-[rgba(27,42,74,.6)] tracking-[.14em] uppercase mb-3.5">
          Start with a free call
        </div>

        <AnimatedText
          className="font-['Playfair_Display',Georgia,serif] text-[clamp(30px,5vw,58px)] font-black text-[#1B2A4A] leading-[1.06] mb-4"
          textParts={[
            { text: "Ready to find your" },
            { br: true },
            { text: "perfect property match?" },
          ]}
        />

        <p className="text-[17px] text-[rgba(27,42,74,.7)] mb-10 leading-[1.6]">
          Book a free 30-minute strategy session with Puja &amp; Vish.
          <br />
          No obligation. No generic advice. Just clarity on your next move.
        </p>

        <div className="flex gap-3 justify-center flex-wrap mb-6">
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 font-['DM_Sans',system-ui,sans-serif] font-bold rounded-[10px] cursor-pointer transition-all duration-200 bg-[#1B2A4A] text-white px-6 md:px-10 py-[14px] md:py-[18px] text-[14px] md:text-[16px] hover:bg-[#0e1b2e] hover:-translate-y-0.5 hover:shadow-xl border-none"
          >
            📅 Book Your Free Strategy Call
          </button>
          <button
            onClick={openLeadModal}
            className="inline-flex items-center gap-3 font-['DM_Sans',system-ui,sans-serif] font-bold rounded-[10px] cursor-pointer transition-all duration-300 bg-white/10 backdrop-blur-sm text-[#1B2A4A] px-6 md:px-10 py-[14px] md:py-[18px] text-[14px] md:text-[16px] border-2 border-[#1B2A4A]/30 hover:bg-white hover:border-[#1B2A4A] hover:-translate-y-0.5 hover:shadow-lg group"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            Grab a free copy of 4M Framework Guide
          </button>
        </div>

        <div className="flex items-center justify-center gap-7 text-[13.5px] text-[rgba(27,42,74,.65)] flex-wrap">
          <span>
            📞 Puja:{" "}
            <a
              href={`tel:${siteData.contact.phones[0].replace(/\s/g, "")}`}
              className="text-[#1B2A4A] font-bold hover:underline"
            >
              {siteData.contact.phones[0]}
            </a>
          </span>
          <span>
            📞 Vish:{" "}
            <a
              href={`tel:${siteData.contact.phones[1].replace(/\s/g, "")}`}
              className="text-[#1B2A4A] font-bold hover:underline"
            >
              {siteData.contact.phones[1]}
            </a>
          </span>
          <span>
            ✉️{" "}
            <a
              href={`mailto:${siteData.contact.email}`}
              className="text-[#1B2A4A] font-bold hover:underline"
            >
              {siteData.contact.email}
            </a>
          </span>
          <span>
            🌐{" "}
            <a href="/" className="text-[#1B2A4A] font-bold hover:underline">
              {siteData.name}.com.au
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
