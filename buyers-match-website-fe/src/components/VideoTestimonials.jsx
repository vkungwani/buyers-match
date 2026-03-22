import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { siteData } from "../config/siteData";

const allVideos = [
  ...siteData.videoTestimonials,
  ...siteData.videoTestimonials,
];

const VideoTestimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [0, -1500],
        transition: { duration: 35, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <section id="video-testimonials" className="py-[52px] bg-[#1B2A4A] relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(42,191,191,.1)_0%,transparent_70%)]" />

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-[5%] relative z-[1]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.15em] uppercase text-[#2ABFBF] mb-4 before:content-[''] before:w-[22px] before:h-[2px] before:bg-[#2ABFBF] before:rounded-[2px] before:shrink-0">
            Real Clients. Real Results.
          </div>
          <AnimatedText
            className="font-['Playfair_Display',Georgia,serif] text-[clamp(26px,4vw,44px)] font-black text-white leading-[1.15] mb-3"
            textParts={[{ text: "Hear It Directly From Our Clients" }]}
          />
          <p className="text-[16px] text-white/60 leading-[1.7] max-w-[560px] mx-auto">
            Nothing speaks louder than real stories from real investors. Watch what our clients have to say about their experience with BuyersMatch.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="overflow-hidden cursor-grab"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={{ left: -3000, right: 0 }}
          animate={controls}
          className="flex gap-6"
          style={{ padding: "0 5% 40px", width: "max-content" }}
        >
          {allVideos.map((video, idx) => (
            <div
              key={`${video.id}-${idx}`}
              className="rounded-[16px] overflow-hidden bg-white/[0.04] border border-[rgba(42,191,191,.15)] transition-all duration-300 cursor-pointer hover:-translate-y-[5px] hover:shadow-[0_24px_60px_rgba(0,0,0,.4)] hover:border-[rgba(42,191,191,.4)]"
              style={{ width: "min(420px, 85vw)", flexShrink: 0 }}
            >
              {/* Video thumbnail */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&controls=0`}
                  title={video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0 block"
                />
              </div>
              {/* Card body */}
              <div className="p-[18px_20px]">
                <div className="font-bold text-[14px] text-white mb-[3px]">{video.name}</div>
                {video.subheading && (
                  <div className="text-[11.5px] text-[#2ABFBF] font-semibold uppercase tracking-[.07em] mb-2.5">{video.subheading}</div>
                )}
                {video.quote && (
                  <p className="text-[13px] leading-[1.7] text-white/60 italic">"{video.quote}"</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* YouTube CTA */}
      <div className="max-w-[1200px] mx-auto px-[5%] relative z-[1]">
        <div className="text-center">
          <a
            href="https://www.youtube.com/@BuyersMatch"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#FF0000] hover:bg-[#CC0000] rounded-[50px] px-7 py-3.5 text-white text-[14px] font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(255,0,0,.25)]"
          >
            <span className="w-7 h-7 bg-white/20 rounded-[6px] flex items-center justify-center text-[13px] flex-shrink-0">▶</span>
            Watch more client stories on our YouTube channel
            <span className="text-white/50 font-normal">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
