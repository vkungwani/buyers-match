import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, itemVariants } from "./Animations";
import award1 from "../assets/award1_low.webp";
import award2 from "../assets/award2.jpeg";

const awards = [
  {
    img: award1,
    alt: "Buyer's Agent Institute Rising Star Award 2024 — Puja Dhanetwal",
    badge: { bg: "linear-gradient(135deg,#2ABFBF,#1a9999)", emoji: "⭐" },
    glow: "rgba(42,191,191,0.25)", // Teal glow
    year: "2024",
    title: "Rising Star Award",
    org: "Buyer's Agent Institute",
    desc: (
      <>
        It was presented to <strong>Puja Dhanetwal</strong> in recognition of
        outstanding achievement and truly exceptional client outcomes as a
        highly promising and emerging buyer's agent in Australia.
      </>
    ),
    ribbon: "🏆 Puja Dhanetwal · BAI 2024",
  },
  {
    img: award2,
    alt: "Monash Business Awards 2024/25 Nominee — BuyersMatch Professional Services",
    badge: { bg: "linear-gradient(135deg,#6B3FA0,#4a2880)", emoji: "🎖️" },
    glow: "rgba(107,63,160,0.25)", // Purple glow
    year: "2024 / 25",
    title: "Professional Services Nominee",
    org: "Monash Business Awards",
    desc: (
      <>
        BuyersMatch was nominated for the{" "}
        <strong>2024/25 Monash Business Awards</strong> in the Professional
        Services category — recognising excellence and impact in the local
        business community.
      </>
    ),
    ribbon: "🎖️ MBA Nominee · Presented 18 June 2025",
  },
];

const shimmerKeyframes = `
  @keyframes shimmerAcross {
    0% { transform: translateX(-150%) skewX(-20deg); }
    100% { transform: translateX(200%) skewX(-20deg); }
  }
`;

const Awards = () => {
  return (
    <section
      id="awards"
      className="py-[52px] bg-[#1B2A4A] relative overflow-hidden"
    >
      <style>{shimmerKeyframes}</style>

      {/* Top soft ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(42,191,191,.1)_0%,transparent_70%)]" />

      <div className="max-w-[1200px] mx-auto px-[5%] relative z-[1]">
        {/* Header - faded in on scroll */}
        <FadeUp inView y={30} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.15em] uppercase text-[#2ABFBF]/70 mb-4 before:content-[''] before:w-[22px] before:h-[2px] before:bg-[#2ABFBF] before:rounded-[2px] before:shrink-0">
            Recognition & Credentials
          </div>
          <AnimatedText
            className="font-['Playfair_Display',Georgia,serif] text-[clamp(26px,4vw,44px)] font-black text-white leading-[1.15] mb-3"
            textParts={[{ text: "Award-Winning Advocacy" }]}
          />
          <p className="text-[16px] text-white/50 leading-[1.7] max-w-[520px] mx-auto">
            Industry recognition that reflects our commitment to excellence and
            client outcomes.
          </p>
        </FadeUp>

        {/* Grid Container */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[900px] mx-auto"
          stagger={0.2}
          delay={0.2}
        >
          {awards.map((award, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Image & Backdrops Container */}
              <div className="relative mb-8 w-full max-w-[320px] mx-auto">
                {/* Animated Glowing Backdrop */}
                <div
                  className="absolute inset-x-8 -inset-y-4 rounded-[40px] blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[pulse_4s_ease-in-out_infinite]"
                  style={{ background: award.glow, zIndex: 0 }}
                />

                {/* The Image Wrapper (for shimmer masking) */}
                <div className="relative z-10 rounded-[16px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,.15)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,.25)] transition-shadow duration-[400ms]">
                  {/* Image */}
                  <img
                    src={award.img}
                    alt={award.alt}
                    className="w-full h-[280px] sm:h-[380px] md:h-[480px] object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-[1.05]"
                  />

                  {/* Shimmer Effect overlay */}
                  <div
                    className="absolute top-0 bottom-0 left-0 w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{ animation: "shimmerAcross 3s infinite" }}
                  />

                  {/* Persistent subtle inner border for premium feel */}
                  <div className="absolute inset-0 border border-white/20 rounded-[16px] pointer-events-none" />
                </div>

                {/* Pulsing Emoji Badge */}
                <div className="absolute top-[-16px] right-[-16px] z-20 group-hover:animate-[bounce_2s_infinite]">
                  <div
                    className="w-[56px] h-[56px] rounded-full flex items-center justify-center text-[24px] shadow-[0_8px_20px_rgba(0,0,0,.2)] relative"
                    style={{ background: award.badge.bg }}
                  >
                    {award.badge.emoji}
                    {/* Ring pinging effect behind badge */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-75"
                      style={{
                        border: `2px solid ${award.glow.replace("0.25", "0.6")}`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-[10.5px] font-black text-[#2ABFBF] tracking-[.12em] uppercase mb-2.5 transition-colors duration-300 group-hover:text-white">
                {award.year}
              </div>
              <h3 className="font-['Playfair_Display',Georgia,serif] text-[21px] font-black text-white leading-[1.25] mb-2">
                {award.title}
              </h3>
              <div className="text-[14px] text-white/40 font-medium mb-4">
                {award.org}
              </div>

              <p className="text-[14px] leading-[1.75] text-white/60 max-w-[320px] mb-6">
                {award.desc}
              </p>

              {/* Enhanced Ribbon */}
              <div className="inline-flex items-center gap-1.5 px-5 py-[8px] rounded-full text-[11.5px] font-bold tracking-[.05em] bg-[#2ABFBF]/10 group-hover:bg-[#2ABFBF] text-[#2ABFBF] group-hover:text-[#1B2A4A] transition-all duration-300 shadow-[inset_0_0_0_1px_rgba(42,191,191,.2)] group-hover:shadow-[0_8px_24px_rgba(42,191,191,.3)] mt-auto">
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                  {award.ribbon.split(" ")[0]}
                </span>
                {award.ribbon.split(" ").slice(1).join(" ")}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Awards;
