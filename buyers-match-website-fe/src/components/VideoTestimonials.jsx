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
        x: [0, -1500], // Adjust based on total width for loop
        transition: {
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <>
      <section id="video-testimonials" style={{ overflowX: "hidden" }}>
        <div className="wrap">
          <div
            className="rv"
            style={{ textAlign: "center", marginBottom: "52px" }}
          >
            <div className="eyebrow" style={{ color: "var(--teal)" }}>
              Real Clients. Real Results.
            </div>
            <AnimatedText
              className="section-h2"
              style={{ color: "#fff" }}
              textParts={[{ text: "Hear It Directly From Our Clients" }]}
            />
            <p
              className="section-sub"
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Nothing speaks louder than real stories from real investors. Watch
              what our clients have to say about their experience with
              BuyersMatch.
            </p>
          </div>
        </div>

        <div
          className="carousel-container"
          style={{ cursor: "grab" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="vt-grid"
            ref={carouselRef}
            drag="x"
            dragConstraints={{ left: -3000, right: 0 }}
            animate={controls}
            style={{
              display: "flex",
              gap: "24px",
              padding: "0 5% 40px",
              width: "max-content",
            }}
          >
            {allVideos.map((video, idx) => (
              <div
                key={`${video.id}-${idx}`}
                className="vt-card hover-lift"
                style={{ width: "420px", flexShrink: 0 }}
              >
                <div className="vt-thumb">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&controls=0`}
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="vt-body">
                  <div className="vt-name">{video.name}</div>
                  {video.subheading && (
                    <div className="vt-role">{video.subheading}</div>
                  )}
                  {video.quote && <p className="vt-quote">"{video.quote}"</p>}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="wrap">
          {/* Channel CTA */}
          <div className="vt-channel-cta rv" style={{ marginTop: "0" }}>
            <a
              href="https://www.youtube.com/@BuyersMatch"
              target="_blank"
              className="vt-channel-pill"
            >
              <span className="vt-yt-icon">▶</span>
              Watch more client stories on our YouTube channel
              <span
                style={{ color: "rgba(255,255,255,.5)", fontWeight: "400" }}
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoTestimonials;
