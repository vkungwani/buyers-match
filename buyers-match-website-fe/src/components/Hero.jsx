import React from "react";
import { motion } from "framer-motion";
import usImg from "../assets/us-removebg.webp";
import ava1 from "../assets/aiface1.webp";
import ava2 from "../assets/aiface2.webp";
import ava3 from "../assets/aiface3.webp";
import ava4 from "../assets/aiface4.webp";
import { StaggerContainer, itemVariants } from "./Animations";

const Hero = ({ scrollToSection, openCalendly }) => {
  const handleNavClick = (e, hash) => {
    if (scrollToSection) {
      e.preventDefault();
      scrollToSection(hash);
    }
  };

  return (
    <>
      <style>{`
        @keyframes aurora-shift {
          0% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          100% { transform: scale(1.2) translate(5%, 5%); opacity: 1; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.7); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
        .hero-suburb-blocks-bg {
          background-image: 
            radial-gradient(ellipse 180px 80px at 20% 70%, rgba(80,70,40,0.18) 0%, transparent 100%),
            radial-gradient(ellipse 220px 60px at 45% 80%, rgba(70,80,50,0.14) 0%, transparent 100%),
            radial-gradient(ellipse 150px 90px at 72% 75%, rgba(90,75,40,0.16) 0%, transparent 100%),
            radial-gradient(ellipse 260px 50px at 60% 90%, rgba(60,65,45,0.12) 0%, transparent 100%),
            linear-gradient(92deg, transparent 30%, rgba(200,185,140,0.06) 30.5%, rgba(200,185,140,0.06) 31%, transparent 31.5%),
            linear-gradient(92deg, transparent 58%, rgba(200,185,140,0.05) 58.5%, rgba(200,185,140,0.05) 59.5%, transparent 60%),
            linear-gradient(182deg, transparent 55%, rgba(200,185,140,0.05) 55.5%, rgba(200,185,140,0.05) 56.5%, transparent 57%);
        }
        .hero-silhouette-bg {
          background: linear-gradient(to top, rgba(10,18,38,0.92) 0%, rgba(12,22,44,0.7) 25%, rgba(14,26,50,0.3) 55%, transparent 100%);
        }
        .hero-silhouette-rooftops {
          background: 
            linear-gradient(to top, rgba(8,15,32,0.98) 0%, rgba(8,15,32,0.98) 28%, transparent 29%),
            linear-gradient(90deg, rgba(8,15,32,0.95) 0%, rgba(8,15,32,0) 8%, rgba(8,15,32,0.95) 9%, rgba(8,15,32,0) 14%, rgba(8,15,32,0.95) 15%, rgba(8,15,32,0) 22%, rgba(8,15,32,0.95) 24%, rgba(8,15,32,0) 30%, rgba(8,15,32,0.95) 32%, rgba(8,15,32,0) 40%, rgba(8,15,32,0.95) 42%, rgba(8,15,32,0) 52%, rgba(8,15,32,0.95) 54%, rgba(8,15,32,0) 63%, rgba(8,15,32,0.95) 65%, rgba(8,15,32,0) 74%, rgba(8,15,32,0.95) 77%, rgba(8,15,32,0) 84%, rgba(8,15,32,0.95) 87%, rgba(8,15,32,0.95) 100%);
        }
      `}</style>
      <section id="hero" className="relative overflow-hidden">
        {/* Layered suburb backgrounds */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('bm/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#050C1C]/85 via-[#081840]/72 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,#080F23D1_0%,#0C1630B8_25%,#0F1C3780_50%,#0A142833_75%,#050A191A_100%)]" />
        </div>

        {/* Suburb blocks clusters */}
        <div className="absolute inset-0 z-[1] pointer-events-none hero-suburb-blocks-bg" />

        {/* Animated Glows */}
        <div
          className="absolute bottom-0 -right-[10%] w-[60vw] h-[60vh] rounded-full pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 60%)",
            animation: "aurora-shift 15s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vh] rounded-full pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(circle, rgba(42,191,191,0.1) 0%, transparent 60%)",
            animation:
              "aurora-shift 12s ease-in-out infinite alternate-reverse",
          }}
        />

        {/* Suburb Silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 z-[2] h-[200px] pointer-events-none hero-silhouette-bg">
          <div className="absolute inset-x-0 bottom-0 h-[90px] hero-silhouette-rooftops" />
        </div>

        <div className="max-w-[1200px] mx-auto px-[5%] relative z-[3] grid grid-cols-1 lg:grid-cols-[60fr_40fr] min-h-[calc(100vh-68px)] items-center">
          {/* LEFT 60% */}
          <StaggerContainer className="py-10 px-0 lg:pr-10 flex flex-col justify-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-[#2ABFBF1F] border border-[#2ABFBF4D] rounded-full px-[18px] py-[7px] text-[11px] font-bold text-[#2ABFBF] tracking-[0.1em] uppercase mb-7 w-fit"
            >
              <span
                className="w-[7px] h-[7px] bg-[#2ABFBF] rounded-full flex-shrink-0"
                style={{ animation: "pulse-ring 2s infinite" }}
              />
              Australia's Property Matchmakers for Serious Investors
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-playfair text-[clamp(38px,5vw,70px)] font-black text-white leading-[1.05] tracking-[-0.03em] mb-[18px]"
            >
              Where Property <br /> Investors
              <br />
              Find Their <br />
              <em className="text-[#2ABFBF] not-italic">
                {"Perfect Match.".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, display: "inline-block" }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.05,
                      delay: 0.8 + index * 0.06,
                      ease: "linear",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </em>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[clamp(15px,1.6vw,18px)] font-medium leading-[1.75] text-white/65 max-w-[500px] mb-6"
            >
              We're Australia's property investment matchmakers. Our proven
              approach connects serious investors with high-growth opportunities
              across the country.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-[10px] bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-9 text-[13.5px] font-semibold text-white tracking-[0.02em]"
            >
              <div
                className="w-2 h-2 bg-[#2ABFBF] rounded-full flex-shrink-0 shadow-[0_0_10px_#2ABFBF]"
                style={{ animation: "pulse-ring 2s infinite" }}
              />
              Helping investors build high-growth property portfolios since 2023
            </motion.div>

            {/* Investor → Market → Property → Strategy strip */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-0 mb-9 max-w-[480px]"
            >
              {[
                {
                  label: "Investor",
                  iconColor: "#2ABFBF",
                  path: (
                    <>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </>
                  ),
                },
                {
                  label: "Market",
                  iconColor: "#D4A843",
                  path: (
                    <>
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                      <line x1="8" y1="2" x2="8" y2="18" />
                      <line x1="16" y1="6" x2="16" y2="22" />
                    </>
                  ),
                },
                {
                  label: "Property",
                  iconColor: "#2ABFBF",
                  path: (
                    <>
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </>
                  ),
                },
                {
                  label: "Strategy",
                  iconColor: "#D4A843",
                  path: (
                    <>
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex-1 px-[6px] sm:px-[10px] py-[10px] sm:py-[13px] text-center bg-white/5 border border-[#2ABFBF33] border-l-0 transition-colors hover:bg-[#2ABFBF1A] ${idx === 0 ? "border-l rounded-l-[10px]" : ""} ${idx === 3 ? "rounded-r-[10px]" : ""}`}
                >
                  <div className="text-[18px] mb-1 flex justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={item.iconColor}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.path}
                    </svg>
                  </div>
                  <div className="text-[8px] sm:text-[9.5px] font-bold text-white/45 uppercase tracking-[0.04em] sm:tracking-[0.08em]">
                    {item.label}
                  </div>
                  <div className="text-[10px] sm:text-[12px] font-bold text-[#2ABFBF] mt-[2px]">
                    Match
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-3 flex-wrap mb-10"
            >
              <button
                onClick={openCalendly}
                className="relative overflow-hidden inline-flex items-center gap-2 bg-[#2ABFBF] text-[#1B2A4A] px-[34px] py-[16px] rounded-[10px] font-bold text-[15px] transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#1E9898] hover:text-white"
                style={{
                  boxShadow: "0 8px 24px rgba(42,191,191,0.35)",
                  border: "none",
                }}
              >
                <span className="relative z-10">Book Strategy Call</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="relative z-10"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                {/* Shimmer Effect */}
                <div
                  className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[20deg]"
                  style={{ animation: "shimmer 4s infinite" }}
                />
              </button>
              <a
                href="/#results"
                onClick={(e) => handleNavClick(e, "results")}
                className="inline-flex items-center justify-center px-7 bg-white/5 backdrop-blur-[10px] border border-white/15 text-white font-bold rounded-full transition-all hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 text-[13.5px]"
              >
                See Recent Purchases
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 px-[18px] py-[15px] bg-white/5 border border-[#2ABFBF2E] rounded-[10px] max-w-[460px]"
            >
              <div className="flex">
                {[ava1, ava2, ava3, ava4].map((ava, i) => (
                  <div
                    key={i}
                    className={`w-[30px] h-[30px] rounded-full border-2 border-[#1B2A4A]/90 overflow-hidden ${i > 0 ? "-ml-[6px]" : ""}`}
                  >
                    <img
                      src={ava}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-[30px] h-[30px] rounded-full border-2 border-[#1B2A4A]/90 ml-[-6px] bg-[#22345A] flex items-center justify-center text-[11px] font-bold text-white/80 font-playfair">
                  +
                </div>
              </div>
              <div>
                <div className="text-[12.5px] text-white/65">
                  <strong className="text-white font-bold">5.0 ★</strong> Google
                  Rating
                </div>
                <div className="text-[#D4A843] text-[11.5px] tracking-[2px] mt-px">
                  <svg width="68" height="12" viewBox="0 0 68 12" fill="none">
                    {[0, 14, 28, 42, 56].map((x) => (
                      <path
                        key={x}
                        d={`M${x + 6} 0L${x + 7.347} 4.146h4.36L${x + 8.18} 6.708l1.347 4.146L${x + 6} 8.292L${x + 2.473} 10.854L${x + 3.82} 6.708L${x + 0.293} 4.146h4.36L${x + 6} 0z`}
                        fill="#D4A843"
                      />
                    ))}
                  </svg>
                </div>
                <div className="text-[12.5px] text-white/65">
                  150+ transactions · $100M+ in property
                </div>
              </div>
            </motion.div>
          </StaggerContainer>

          {/* RIGHT 40% - Puja & Vish */}
          <div className="relative h-full hidden lg:flex items-center justify-center mt-[-240px]">
            <div
              className="relative w-full max-w-[480px] flex items-center justify-center rounded-full overflow-visible"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(42,191,191,0.15) 0%, transparent 60%)",
              }}
            >
              <img
                src={usImg}
                alt="Puja & Vish - BuyersMatch Founders"
                className="w-full h-auto object-contain object-center block brightness-[1.05] contrast-[1.02] saturate-[1.02] transition-all duration-400"
                style={{
                  filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 55% 75% at 50% 25%, black 40%, transparent 100%)",
                  maskImage:
                    "radial-gradient(ellipse 55% 75% at 50% 25%, black 40%, transparent 100%)",
                }}
              />

              <div
                className="absolute bottom-5 left-[-40px] z-[5] bg-[#0F1830EC] backdrop-blur-[14px] border border-[#2ABFBF38] rounded-[18px] p-[18px] hidden sm:flex gap-3 items-start max-w-[320px] shadow-[0_12px_36px_rgba(42,191,191,0.15),0_0_0_1px_rgba(42,191,191,0.1)]"
                style={{ animation: "float-y 6s ease-in-out infinite" }}
              >
                <div className="w-[38px] h-[38px] flex-shrink-0 bg-[#2ABFBF] rounded-lg flex items-center justify-center text-[17px]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[12.5px] text-white">
                    Sarah &amp; Michael K.
                  </div>
                  <div className="text-[10px] text-[#2ABFBF] mb-1 tracking-[0.04em]">
                    Sydney · Dual Income Investors
                  </div>
                  <div className="text-[11.5px] text-white/65 leading-[1.5]">
                    "22% growth in 18 months. Puja found a suburb we'd never
                    have found on our own."
                  </div>
                  <div className="flex text-[#D4A843] text-[10px] mt-1 tracking-[1.5px]">
                    <svg width="68" height="12" viewBox="0 0 68 12" fill="none">
                      {[0, 13, 26, 39, 52].map((x) => (
                        <path
                          key={x}
                          d={`M${x + 5} 0L${x + 6} 4h4L${x + 6.5} 6.5l1 3.5L${x + 5} 8l-2.5 2L${x + 3.5} 6.5L${x + 1} 4h4L${x + 5} 0z`}
                          fill="#D4A843"
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div
          className="animate-bounce absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-white/30 flex flex-col items-center gap-1 w-11 h-11 justify-center"
          onClick={() => scrollToSection("how-we-help")}
        >
          <span className="text-[10px] font-extrabold tracking-[0.15em] uppercase">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
