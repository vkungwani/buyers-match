import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import { siteData } from "../config/siteData";

const allBlogs = [...siteData.blogs, ...siteData.blogs];

const Blog = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [0, -2000],
        transition: {
          duration: 45,
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
      <section id="blog" style={{ overflow: "hidden" }}>
        <div className="wrap">
          <div className="blog-top rv" style={{ marginBottom: "48px" }}>
            <div>
              <div className="eyebrow" style={{ color: "var(--teal)" }}>
                Property Insights
              </div>
              <AnimatedText
                className="sec-h2"
                style={{ color: "#0b0000ff" }}
                textParts={[
                  { text: "Data-backed " },
                  { text: "market intelligence", em: true },
                ]}
              />
            </div>
            <Link
              to="/blog"
              className="btn btn-teal-ghost"
              style={{ fontSize: "12px", fontWeight: "800" }}
            >
              Explore the Knowledge Hub →
            </Link>
          </div>
        </div>

        <div
          className="blog-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ cursor: "grab" }}
        >
          <motion.div
            className="blog-carousel-inner"
            ref={carouselRef}
            drag="x"
            dragConstraints={{ left: -4000, right: 0 }}
            animate={controls}
            style={{
              display: "flex",
              gap: "20px",
              padding: "0 5% 40px",
              width: "max-content",
            }}
          >
            {allBlogs.map((blog, idx) => (
              <Link
                to={`/blog/${blog.id}`}
                key={`${blog.id}-${idx}`}
                className="bcard hover-lift"
                style={{
                  width: "400px",
                  flexShrink: 0,
                  textDecoration: "none",
                  background: "#fff",
                }}
              >
                <div
                  className="bcard-img"
                  style={{
                    height: "240px",
                    backgroundImage: `url(${blog.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderBottom: "3px solid var(--teal)",
                  }}
                >
                  {!blog.image && <div className="bcard-img-grid"></div>}
                </div>
                <div className="bcard-body">
                  <div
                    className="bcard-title"
                    style={{
                      fontSize: "19px",
                      fontWeight: "900",
                      color: "var(--navy)",
                      marginBottom: "12px",
                    }}
                  >
                    {blog.title}
                  </div>
                  <div
                    className="bcard-excerpt"
                    style={{
                      fontSize: "13.5px",
                      color: "var(--muted)",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                    }}
                  >
                    {blog.excerpt}
                  </div>
                  <div
                    className="bcard-meta"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "11px",
                      fontWeight: "800",
                      color: "var(--teal-d)",
                      textTransform: "uppercase",
                    }}
                  >
                    <span>{blog.date}</span>
                    <span style={{ opacity: 0.3 }}>|</span>
                    <span>Read Article</span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
