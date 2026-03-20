import React from 'react';
import { motion } from 'framer-motion';
import usImg from '../assets/us.jpg';
import { StaggerContainer, itemVariants } from './Animations';

const Hero = ({ scrollToSection, openCalendly }) => {
  const handleNavClick = (e, hash) => {
    if (scrollToSection) {
      e.preventDefault();
      scrollToSection(hash);
    }
  };

  return (
    <>
      <section id="hero">
        {/* Layered suburb backgrounds */}
        <div className="hero-aerial-bg"></div>
        <div className="hero-suburb-grid"></div>
        <div className="hero-suburb-blocks"></div>
        <div className="hero-sunset-glow"></div>
        <div className="hero-horizon"></div>
        <div className="hero-teal-glow"></div>
        <div className="hero-suburb-silhouette"></div>

        <div className="wrap hero-layout">

          {/* LEFT 60% */}
          <StaggerContainer className="hero-left">
            <motion.div variants={itemVariants} className="hero-pill">
              <span className="hero-pill-dot"></span>
              Australia's Property Matchmakers for Serious Investors
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-h1">
              Where Property <br /> Investors<br />Find Their <br />
              <em>
                {"Perfect Match.".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, display: 'inline-block' }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.05,
                      delay: 0.8 + index * 0.06, 
                      ease: "linear"
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </em>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-sub">
              We're Australia's property investment matchmakers. Our proven approach connects serious investors with high-growth opportunities across the country.
            </motion.p>
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
              <div style={{ width: '24px', height: '2px', background: '#2ABFBF', flexShrink: '0', borderRadius: '2px' }}></div>
              <p style={{ margin: '0', fontSize: '14px', fontWeight: '800', color: '#fff', letterSpacing: '.01em', lineHeight: '1.4' }}>Helping investors build high-growth property portfolios since 2023</p>
            </motion.div>

            {/* Investor → Market → Property → Strategy strip */}
            <motion.div variants={itemVariants} className="hero-match-strip">
              <div className="hero-match-item">
                <div className="hmi-icon">👤</div>
                <div className="hmi-label">Investor</div>
                <div className="hmi-val">Match</div>
              </div>
              <div className="hero-match-item">
                <div className="hmi-icon">🗺️</div>
                <div className="hmi-label">Market</div>
                <div className="hmi-val">Match</div>
              </div>
              <div className="hero-match-item">
                <div className="hmi-icon">🏡</div>
                <div className="hmi-label">Property</div>
                <div className="hmi-val">Match</div>
              </div>
              <div className="hero-match-item">
                <div className="hmi-icon">📈</div>
                <div className="hmi-label">Strategy</div>
                <div className="hmi-val">Match</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-btns">
              <button onClick={openCalendly} className="btn btn-teal btn-lg btn-glow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: 'none' }}>
                Book Strategy Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <a href="/#purchases" onClick={(e) => handleNavClick(e, 'purchases')} className="btn btn-outline-w btn-lg">See Recent Purchases</a>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-proof">
              <div className="hero-avatars">
                <div className="hero-ava">S</div>
                <div className="hero-ava">D</div>
                <div className="hero-ava">P</div>
                <div className="hero-ava">J</div>
                <div className="hero-ava">+</div>
              </div>
              <div>
                <div className="proof-text"><strong>5.0 ★</strong> Google Rating</div>
                <div className="proof-stars">★★★★★</div>
                <div className="proof-text">Trusted by 200+ Australian families</div>
              </div>
            </motion.div>
          </StaggerContainer>

          {/* RIGHT 40% - Puja & Vish */}
          <div className="hero-right">
            <div className="hero-photo-container">
              <img src={usImg} alt="Puja & Vish - BuyersMatch Founders" className="hero-photo rv d5 hover-lift" />
              <div className="hero-float-card rv d6 hover-lift">
                <div className="hfc-icon">⭐</div>
                <div>
                  <div className="hfc-name">Sarah &amp; Michael K.</div>
                  <div className="hfc-loc">Sydney · Dual Income Investors</div>
                  <div className="hfc-q">"22% growth in 18 months. Puja found a suburb we'd never have found on our own."</div>
                  <div className="hfc-stars">★★★★★</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Arrow */}
        <div 
          className="animate-bounce" 
          style={{ 
            position: 'absolute', 
            bottom: '32px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            zIndex: '10', 
            cursor: 'pointer',
            color: 'rgba(255,255,255,.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px'
          }}
          onClick={() => scrollToSection('services')}
        >
          <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '.15em', textTransform: 'uppercase' }}>Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
