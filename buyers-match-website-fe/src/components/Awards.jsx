import React, { useState } from "react";
import AnimatedText from "./AnimatedText";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerContainer, itemVariants } from "./Animations";
import awardsContent from "../content/home/awards.json";

// Colour themes selectable in the CMS
const awardThemes = {
  teal: { bg: "linear-gradient(135deg,#2ABFBF,#1a9999)", glow: "rgba(42,191,191,0.25)" },
  purple: { bg: "linear-gradient(135deg,#6B3FA0,#4a2880)", glow: "rgba(107,63,160,0.25)" },
  gold: { bg: "linear-gradient(135deg,#D4A843,#a8812a)", glow: "rgba(212,168,67,0.25)" },
  navy: { bg: "linear-gradient(135deg,#2C4070,#1B2A4A)", glow: "rgba(44,64,112,0.25)" },
};

// Turns **bold** text from the CMS into <strong> tags
const withBold = (text = "") =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );

const awards = awardsContent.items.map((a) => {
  const theme = awardThemes[a.colour] || awardThemes.teal;
  return {
    img: a.image,
    alt: a.alt,
    badge: { bg: theme.bg, emoji: a.emoji },
    glow: theme.glow,
    year: a.year,
    title: a.title,
    org: a.org,
    desc: withBold(a.desc),
    ribbon: a.ribbon,
  };
});

const shimmerKeyframes = `
  @keyframes shimmerAcross {
    0% { transform: translateX(-150%) skewX(-20deg); }
    100% { transform: translateX(200%) skewX(-20deg); }
  }
`;

const Awards = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => {
    setSelectedImage(img);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };
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
                <div
                  className="relative z-10 rounded-[16px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,.15)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,.25)] transition-shadow duration-[400ms] cursor-pointer"
                  onClick={() => openLightbox(award.img)}
                >
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

                  {/* Look closer hint */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md text-white text-[12px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      View Full
                    </div>
                  </div>

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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[9999] bg-[#0A1224]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 sm:top-0 sm:-right-16 text-white/50 hover:text-white transition-colors p-2"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Full Image */}
              <img
                src={selectedImage}
                alt="Award Full View"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Helper text */}
              <div className="mt-4 text-white/40 text-[12px] font-bold uppercase tracking-[0.2em] animate-pulse">
                Click anywhere to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Awards;
