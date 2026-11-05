import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "./AnimatedText";
import CaseStudyCard from "./CaseStudyCard";
import { siteData } from "../config/siteData";
import { FadeUp } from "./Animations";

// The scrolling strip repeats the list four times so it loops
// seamlessly. The build-time pre-render only needs one copy (search
// engines don't need the repeats), which keeps the home page HTML small.
const allProperties =
  typeof window === "undefined"
    ? siteData.successStories
    : [
        ...siteData.successStories,
        ...siteData.successStories,
        ...siteData.successStories,
        ...siteData.successStories,
      ];

const Results = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [0, -1200],
        transition: { duration: 25, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <section id="results" className="py-[52px] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <FadeUp className="flex items-end justify-between mb-7" inView y={30}>
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.15em] uppercase text-[#2ABFBF] mb-3 before:content-[''] before:w-[22px] before:h-[2px] before:bg-[#2ABFBF] before:rounded-[2px] before:shrink-0">
              Proven Results
            </div>
            <AnimatedText
              className="font-['Playfair_Display',Georgia,serif] text-[clamp(26px,3.8vw,44px)] font-bold text-[#1B2A4A] mb-4 leading-[1.15]"
              textParts={[
                { text: "Properties we've " },
                { text: "secured", em: true },
              ]}
            />
            <p className="text-[16px] text-[#1B2A4A]/70 leading-[1.7] max-w-[680px]">
              We source on and off-market opportunities, then negotiate hard to
              secure the right property at the right price.
              <span className="font-bold text-[#1B2A4A]">
                {" "}
                Using deep agent relationships and rigorous price analysis, we
                give you access and an edge other buyers simply don't have.
              </span>
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E9898] text-[13px] font-bold text-white no-underline hover:bg-[#178080] transition-colors duration-200 shrink-0"
          >
            View all case studies →
          </Link>
        </FadeUp>
      </div>

      <div
        className="overflow-hidden cursor-grab"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={{ left: -2400, right: 0 }}
          animate={controls}
          className="flex gap-5"
          style={{ padding: "0 5% 40px", width: "max-content" }}
        >
          {allProperties.map((prop, i) => (
            <CaseStudyCard
              key={i}
              story={prop}
              style={{ width: "min(380px, 85vw)", flexShrink: 0 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
