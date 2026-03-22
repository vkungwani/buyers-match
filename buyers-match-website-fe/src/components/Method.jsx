import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { StaggerContainer, itemVariants } from "./Animations";

const arrowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Method = ({ scrollToSection, openLeadModal }) => {
  const handleNavClick = (e, hash) => {
    if (scrollToSection) {
      e.preventDefault();
      scrollToSection(hash);
    }
  };

  return (
    <>
      <section
        id="method"
        className="py-[52px] bg-[#1B2A4A] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(42,191,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(42,191,191,0.05)_1px,transparent_1px)] bg-[length:48px_48px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(42,191,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(42,191,191,0.05)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-[5%] relative z-[1]">
          {/* Header */}
          <div className="text-center mb-[32px] transition-all duration-700 ease-in-out">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-[#2ABFBF]/70 mb-[16px] before:content-[''] before:w-[22px] before:h-[2px] before:bg-[#2ABFBF] before:rounded-[2px] before:shrink-0">
              Our Proprietary System
            </div>
            <AnimatedText
              className="font-['Playfair_Display',Georgia,serif] text-[32px] md:text-[40px] lg:text-[52px] font-black text-white leading-[1.1] mb-[16px]"
              textParts={[{ text: "The BuyersMatch Method" }]}
            />
            <p className="text-[19px] text-white/55 max-w-[520px] mx-auto mb-2 leading-[1.6]">
              Successful property investing isn't about chasing hype.
            </p>
            <p className="text-[19px] text-white font-bold max-w-[520px] mx-auto mb-[28px] leading-[1.6]">
              It's about finding the right match.
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap mb-0">
              <span className="text-[13px] font-bold text-[#2ABFBF] tracking-[0.08em] uppercase">
                Investor
              </span>
              <span className="text-[#2ABFBF]/30 text-[16px]">·</span>
              <span className="text-[13px] font-bold text-[#2ABFBF] tracking-[0.08em] uppercase">
                Market
              </span>
              <span className="text-[#2ABFBF]/30 text-[16px]">·</span>
              <span className="text-[13px] font-bold text-[#2ABFBF] tracking-[0.08em] uppercase">
                Property
              </span>
              <span className="text-[#2ABFBF]/30 text-[16px]">·</span>
              <span className="text-[13px] font-bold text-[#2ABFBF] tracking-[0.08em] uppercase">
                Strategy
              </span>
            </div>
          </div>

          {/* Arrow flow */}
          <StaggerContainer
            className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-2 md:gap-0 mb-[36px] transition-all duration-700 ease-in-out"
            stagger={0.3}
            delay={0.4}
          >
            <motion.div
              variants={itemVariants}
              className="text-center p-[16px_20px] md:p-[16px_28px] bg-[#2ABFBF]/10 border border-[#2ABFBF]/25 rounded-[10px] md:rounded-none md:rounded-l-[10px]"
            >
              <div className="text-[10px] font-bold text-[#2ABFBF]/70 tracking-[0.1em] uppercase mb-[4px]">
                Step 1
              </div>
              <div className="text-[17px] font-extrabold text-white">
                Investor
              </div>
            </motion.div>

            <motion.div
              variants={arrowVariants}
              className="px-2 items-center hidden md:flex"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(42,191,191,.4)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  variants={pathVariants}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-[16px_20px] md:p-[16px_28px] bg-[#D4A843]/10 border border-[#D4A843]/25 md:border-y md:border-x-0 rounded-[10px] md:rounded-none"
            >
              <div className="text-[10px] font-bold text-[#D4A843]/80 tracking-[0.1em] uppercase mb-[4px]">
                Step 2
              </div>
              <div className="text-[17px] font-extrabold text-white">
                Market
              </div>
            </motion.div>

            <motion.div
              variants={arrowVariants}
              className="px-2 items-center hidden md:flex"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(42,191,191,.4)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  variants={pathVariants}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-[16px_20px] md:p-[16px_28px] bg-[#2ABFBF]/10 border border-[#2ABFBF]/25 md:border-y md:border-x-0 rounded-[10px] md:rounded-none"
            >
              <div className="text-[10px] font-bold text-[#2ABFBF]/70 tracking-[0.1em] uppercase mb-[4px]">
                Step 3
              </div>
              <div className="text-[17px] font-extrabold text-white">
                Property
              </div>
            </motion.div>

            <motion.div
              variants={arrowVariants}
              className="px-2 items-center hidden md:flex"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(42,191,191,.4)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  variants={pathVariants}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center p-[16px_20px] md:p-[16px_28px] bg-[#D4A843]/10 border border-[#D4A843]/25 rounded-[10px] md:rounded-none md:rounded-r-[10px]"
            >
              <div className="text-[10px] font-bold text-[#D4A843]/80 tracking-[0.1em] uppercase mb-[4px]">
                Step 4
              </div>
              <div className="text-[17px] font-extrabold text-white">
                Strategy
              </div>
            </motion.div>
          </StaggerContainer>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[44px]">
            <div className="bg-white/5 border border-[#2ABFBF]/12 rounded-[26px] p-[30px_22px] transition-all duration-300 relative overflow-hidden cursor-default hover:border-[#2ABFBF]/40 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)] delay-[100ms]">
              <div className="absolute -bottom-[18px] -right-2 font-['Playfair_Display',Georgia,serif] text-[96px] font-black text-[#2ABFBF]/5 leading-none pointer-events-none">
                1
              </div>
              <div className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-[10px] bg-[#2ABFBF] text-[#1B2A4A] font-['Playfair_Display',Georgia,serif] font-black text-[15px] mb-[18px]">
                M1
              </div>
              <div className="font-['Playfair_Display',Georgia,serif] text-[20px] font-bold text-white mb-[5px] leading-tight">
                Investor Match
              </div>
              <span className="text-[11px] text-[#2ABFBF] font-bold tracking-[0.08em] uppercase mb-[16px] block min-h-[35px]">
                Know exactly what you need
              </span>
              <div className="h-px bg-[#2ABFBF]/15 mb-[16px]"></div>
              <ul className="list-none flex flex-col gap-2">
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Budget &amp; borrowing capacity
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Investment strategy &amp; goals
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Risk profile &amp; timeline
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Portfolio diversification needs
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Long-term wealth roadmap
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-[#2ABFBF]/12 rounded-[26px] p-[30px_22px] transition-all duration-300 relative overflow-hidden cursor-default hover:border-[#2ABFBF]/40 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)] delay-[180ms]">
              <div className="absolute -bottom-[18px] -right-2 font-['Playfair_Display',Georgia,serif] text-[96px] font-black text-[#2ABFBF]/5 leading-none pointer-events-none">
                2
              </div>
              <div className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-[10px] bg-[#D4A843] text-[#1B2A4A] font-['Playfair_Display',Georgia,serif] font-black text-[15px] mb-[18px]">
                M2
              </div>
              <div className="font-['Playfair_Display',Georgia,serif] text-[20px] font-bold text-white mb-[5px] leading-tight">
                Market Match
              </div>
              <span className="text-[11px] text-[#2ABFBF] font-bold tracking-[0.08em] uppercase mb-[16px] block min-h-[35px]">
                States &amp; cities primed for growth
              </span>
              <div className="h-px bg-[#2ABFBF]/15 mb-[16px]"></div>
              <ul className="list-none flex flex-col gap-2">
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Interstate migration patterns
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Employment diversity analysis
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  $1B+ infrastructure pipeline
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Supply vs. demand projections
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Multi-market scoring model
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-[#2ABFBF]/12 rounded-[26px] p-[30px_22px] transition-all duration-300 relative overflow-hidden cursor-default hover:border-[#2ABFBF]/40 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)] delay-[260ms]">
              <div className="absolute -bottom-[18px] -right-2 font-['Playfair_Display',Georgia,serif] text-[96px] font-black text-[#2ABFBF]/5 leading-none pointer-events-none">
                3
              </div>
              <div className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-[10px] bg-[#2ABFBF] text-[#1B2A4A] font-['Playfair_Display',Georgia,serif] font-black text-[15px] mb-[18px]">
                M3
              </div>
              <div className="font-['Playfair_Display',Georgia,serif] text-[20px] font-bold text-white mb-[5px] leading-tight">
                Property Match
              </div>
              <span className="text-[11px] text-[#2ABFBF] font-bold tracking-[0.08em] uppercase mb-[16px] block min-h-[35px]">
                The suburb &amp; street decide everything
              </span>
              <div className="h-px bg-[#2ABFBF]/15 mb-[16px]"></div>
              <ul className="list-none flex flex-col gap-2">
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Gentrification corridor mapping
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Transport &amp; school proximity
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Vacancy rate by postcode
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Zoning &amp; overlay check
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Street-level clearance rates
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-[#2ABFBF]/12 rounded-[26px] p-[30px_22px] transition-all duration-300 relative overflow-hidden cursor-default hover:border-[#2ABFBF]/40 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)] delay-[340ms]">
              <div className="absolute -bottom-[18px] -right-2 font-['Playfair_Display',Georgia,serif] text-[96px] font-black text-[#2ABFBF]/5 leading-none pointer-events-none">
                4
              </div>
              <div className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-[10px] bg-[#D4A843] text-[#1B2A4A] font-['Playfair_Display',Georgia,serif] font-black text-[15px] mb-[18px]">
                M4
              </div>
              <div className="font-['Playfair_Display',Georgia,serif] text-[20px] font-bold text-white mb-[5px] leading-tight">
                Strategy Match
              </div>
              <span className="text-[11px] text-[#2ABFBF] font-bold tracking-[0.08em] uppercase mb-[16px] block min-h-[35px]">
                Your goals. Your property.
              </span>
              <div className="h-px bg-[#2ABFBF]/15 mb-[16px]"></div>
              <ul className="list-none flex flex-col gap-2">
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Tax strategy alignment
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Cashflow sustainability check
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Data-driven negotiation
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Full due diligence coordination
                </li>
                <li className="text-[12.5px] text-white/60 flex gap-2 items-baseline leading-relaxed before:content-['→'] before:text-[#2ABFBF] before:text-[11px] before:shrink-0">
                  Portfolio scaling plan
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-[24px] transition-all duration-700 ease-in-out">
            <button
              onClick={openLeadModal}
              className="inline-flex items-center gap-2 font-['DM_Sans',system-ui,sans-serif] font-bold rounded-[10px] cursor-pointer transition-all duration-200 ease-in-out bg-[#2ABFBF] text-[#1B2A4A] px-[20px] sm:px-[34px] py-[14px] sm:py-[16px] text-[13px] sm:text-[15px] hover:bg-[#1E9898] hover:text-white hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(42,191,191,0.35)] border-none text-center"
            >
              Download the Free 4M Framework Guide →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Method;
