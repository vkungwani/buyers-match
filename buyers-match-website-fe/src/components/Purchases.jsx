import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import AnimatedText from './AnimatedText';
import TiltCard from './TiltCard';
import { StaggerContainer, FadeUp, itemVariants } from './Animations';

const propertyData = [
  {
    state: "🏙️ Brisbane, QLD", type: "Investment", suburb: "Stafford Heights", 
    desc: "3 bed house · Off-market · Under-value negotiation",
    metrics: [
      { val: "+22%", lbl: "Growth 18mo", cls: "g" },
      { val: "5.8%", lbl: "Rental Yield", cls: "t" },
      { val: "$38K", lbl: "Below Asking", cls: "n" },
      { val: "1.1%", lbl: "Vacancy Rate", cls: "t" }
    ],
    foot: "Secured in 18 days"
  },
  {
    state: "🏖️ Gold Coast, QLD", type: "Home Buyer", suburb: "Mudgeeraba", 
    desc: "4 bed family home · Off-market acquisition",
    metrics: [
      { val: "+18%", lbl: "Growth 24mo", cls: "g" },
      { val: "Off-Mkt", lbl: "Sourced", cls: "n" },
      { val: "$52K", lbl: "Below Comparables", cls: "n" },
      { val: "8.2", lbl: "School Score", cls: "t" }
    ],
    foot: "Secured in 24 days"
  },
  {
    state: "🏢 Melbourne, VIC", type: "Investment", suburb: "Preston", 
    desc: "2 bed apartment · High-yield growth corridor",
    metrics: [
      { val: "+14%", lbl: "Growth 12mo", cls: "g" },
      { val: "6.1%", lbl: "Gross Yield", cls: "t" },
      { val: "$21K", lbl: "Negotiated", cls: "n" },
      { val: "0.8%", lbl: "Vacancy Rate", cls: "t" }
    ],
    foot: "Secured in 31 days"
  }
];

// Combine more for infinite feel
const allProperties = [...propertyData, ...propertyData, ...propertyData, ...propertyData];

const Purchases = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [0, -1200], // Move as far as needed for seamless loop
        transition: {
          duration: 25,
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
      <section id="purchases" style={{overflowX: 'hidden'}}>
        <div className="wrap">
          <FadeUp className="purch-top" inView y={30}>
            <div>
              <div className="eyebrow">Proven Results</div>
              <AnimatedText className="sec-h2" textParts={[{text:"Properties we've "}, {text:"secured", em:true}]} />
            </div>
            <Link to="/case-studies" style={{fontSize: '13px', fontWeight: '700', color: 'var(--teal-d)'}}>View all case studies →</Link>
          </FadeUp>
        </div>

        <div 
          className="carousel-container" 
          style={{ cursor: 'grab' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="purch-grid"
            ref={carouselRef}
            drag="x"
            dragConstraints={{ left: -2400, right: 0 }}
            animate={controls}
            style={{ display: 'flex', gap: '20px', padding: '0 5% 40px', width: 'max-content' }}
          >
            {allProperties.map((prop, i) => (
              <TiltCard key={i} className="pcard" style={{ width: '380px', flexShrink: 0 }}>
                <div className="pcard-head">
                  <div className="pcard-state">{prop.state}</div>
                  <span className="chip" style={{background: 'rgba(42,191,191,.15)', color: 'var(--teal)', fontSize: '10px', padding: '3px 9px'}}>{prop.type}</span>
                </div>
                <div className="pcard-body">
                  <div className="pcard-suburb">{prop.suburb}</div>
                  <div className="pcard-desc">{prop.desc}</div>
                  <div className="pcard-metrics">
                    {prop.metrics.map((m, mi) => (
                      <div className="pmet" key={mi}>
                        <div className={`pmet-val ${m.cls}`}>{m.val}</div>
                        <div className="pmet-lbl">{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                  <div className="pcard-foot">⏱ {prop.foot}</div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Purchases;
