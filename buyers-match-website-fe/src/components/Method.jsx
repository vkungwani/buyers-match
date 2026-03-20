import React from 'react';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import { StaggerContainer, itemVariants } from './Animations';

const arrowVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2
    }
  }
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
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
      <section id="method" style={{padding: '108px 0', background: 'var(--navy)', position: 'relative', overflow: 'hidden'}}>
  <div className="mm-grid-bg"></div>
  <div className="fw-bg"></div>
  <div className="wrap" style={{position: 'relative', zIndex: '1'}}>

    {/* Header */}
    <div className="rv" style={{textAlign: 'center', marginBottom: '56px'}}>
      <div className="eyebrow" style={{color: 'rgba(42,191,191,.7)'}}>Our Proprietary System</div>
      <AnimatedText style={{fontFamily: 'var(--ff-h)', fontSize: 'clamp(32px,5vw,52px)', fontWeight: '900', color: '#fff', lineHeight: '1.1', marginBottom: '16px'}} textParts={[{text:"The BuyersMatch Method"}]} />
      <p style={{fontSize: '19px', color: 'rgba(255,255,255,.55)', maxWidth: '520px', margin: '0 auto 8px', lineHeight: '1.6'}}>Successful property investing isn't about chasing hype.</p>
      <p style={{fontSize: '19px', color: '#fff', fontWeight: '700', maxWidth: '520px', margin: '0 auto 28px', lineHeight: '1.6'}}>It's about finding the right match.</p>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '0'}}>
        <span style={{fontSize: '13px', fontWeight: '700', color: 'var(--teal)', letterSpacing: '.08em', textTransform: 'uppercase'}}>Investor</span>
        <span style={{color: 'rgba(42,191,191,.3)', fontSize: '16px'}}>·</span>
        <span style={{fontSize: '13px', fontWeight: '700', color: 'var(--teal)', letterSpacing: '.08em', textTransform: 'uppercase'}}>Market</span>
        <span style={{color: 'rgba(42,191,191,.3)', fontSize: '16px'}}>·</span>
        <span style={{fontSize: '13px', fontWeight: '700', color: 'var(--teal)', letterSpacing: '.08em', textTransform: 'uppercase'}}>Property</span>
        <span style={{color: 'rgba(42,191,191,.3)', fontSize: '16px'}}>·</span>
        <span style={{fontSize: '13px', fontWeight: '700', color: 'var(--teal)', letterSpacing: '.08em', textTransform: 'uppercase'}}>Strategy</span>
      </div>
    </div>

    {/* Arrow flow */}
    <StaggerContainer className="rv" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: '64px', flexWrap: 'wrap'}} stagger={0.3} delay={0.4}>
      <motion.div variants={itemVariants} style={{textAlign: 'center', padding: '16px 28px', background: 'rgba(42,191,191,.1)', border: '1px solid rgba(42,191,191,.25)', borderRadius: '10px 0 0 10px'}}>
        <div style={{fontSize: '10px', fontWeight: '700', color: 'rgba(42,191,191,.7)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '4px'}}>Step 1</div>
        <div style={{fontSize: '17px', fontWeight: '800', color: '#fff'}}>Investor</div>
      </motion.div>
      
      <motion.div variants={arrowVariants} style={{padding: '0 8px', display: 'flex', alignItems: 'center'}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(42,191,191,.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <motion.path variants={pathVariants} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>

      <motion.div variants={itemVariants} style={{textAlign: 'center', padding: '16px 28px', background: 'rgba(42,191,191,.07)', border: '1px solid rgba(42,191,191,.18)', borderTop: '1px solid rgba(42,191,191,.18)', borderBottom: '1px solid rgba(42,191,191,.18)', borderLeft: 'none', borderRight: 'none'}}>
        <div style={{fontSize: '10px', fontWeight: '700', color: 'rgba(42,191,191,.7)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '4px'}}>Step 2</div>
        <div style={{fontSize: '17px', fontWeight: '800', color: '#fff'}}>Market</div>
      </motion.div>

      <motion.div variants={arrowVariants} style={{padding: '0 8px', display: 'flex', alignItems: 'center'}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(42,191,191,.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <motion.path variants={pathVariants} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>

      <motion.div variants={itemVariants} style={{textAlign: 'center', padding: '16px 28px', background: 'rgba(42,191,191,.07)', border: '1px solid rgba(42,191,191,.18)', borderLeft: 'none', borderRight: 'none'}}>
        <div style={{fontSize: '10px', fontWeight: '700', color: 'rgba(42,191,191,.7)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '4px'}}>Step 3</div>
        <div style={{fontSize: '17px', fontWeight: '800', color: '#fff'}}>Property</div>
      </motion.div>

      <motion.div variants={arrowVariants} style={{padding: '0 8px', display: 'flex', alignItems: 'center'}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(42,191,191,.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <motion.path variants={pathVariants} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>

      <motion.div variants={itemVariants} style={{textAlign: 'center', padding: '16px 28px', background: 'rgba(212,168,67,.12)', border: '1px solid rgba(212,168,67,.3)', borderRadius: '0 10px 10px 0'}}>
        <div style={{fontSize: '10px', fontWeight: '700', color: 'rgba(212,168,67,.8)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '4px'}}>Step 4</div>
        <div style={{fontSize: '17px', fontWeight: '800', color: '#fff'}}>Strategy</div>
      </motion.div>
    </StaggerContainer>

    {/* 4 Pillars */}
    <div className="fw-grid">
      <div className="fw-card rv d1">
        <div className="fw-ghost">1</div>
        <div className="fw-badge">M1</div>
        <div className="fw-title">Investor Match</div>
        <span className="fw-sub">Know exactly what you need</span>
        <div className="fw-div"></div>
        <ul className="fw-list">
          <li>Budget &amp; borrowing capacity</li>
          <li>Investment strategy &amp; goals</li>
          <li>Risk profile &amp; timeline</li>
          <li>Portfolio diversification needs</li>
          <li>Long-term wealth roadmap</li>
        </ul>
      </div>
      <div className="fw-card rv d2">
        <div className="fw-ghost">2</div>
        <div className="fw-badge" style={{background: 'var(--gold)', color: 'var(--navy)'}}>M2</div>
        <div className="fw-title">Market Match</div>
        <span className="fw-sub">States &amp; cities primed for growth</span>
        <div className="fw-div"></div>
        <ul className="fw-list">
          <li>Interstate migration patterns</li>
          <li>Employment diversity analysis</li>
          <li>$1B+ infrastructure pipeline</li>
          <li>Supply vs. demand projections</li>
          <li>Multi-market scoring model</li>
        </ul>
      </div>
      <div className="fw-card rv d3">
        <div className="fw-ghost">3</div>
        <div className="fw-badge" style={{background: 'rgba(42,191,191,.22)', color: 'var(--teal)'}}>M3</div>
        <div className="fw-title">Property Match</div>
        <span className="fw-sub">The suburb &amp; street decide everything</span>
        <div className="fw-div"></div>
        <ul className="fw-list">
          <li>Gentrification corridor mapping</li>
          <li>Transport &amp; school proximity</li>
          <li>Vacancy rate by postcode</li>
          <li>Zoning &amp; overlay check</li>
          <li>Street-level clearance rates</li>
        </ul>
      </div>
      <div className="fw-card rv d4">
        <div className="fw-ghost">4</div>
        <div className="fw-badge" style={{background: 'rgba(212,168,67,.18)', color: 'var(--gold)'}}>M4</div>
        <div className="fw-title">Strategy Match</div>
        <span className="fw-sub">Your goals. Your property.</span>
        <div className="fw-div"></div>
        <ul className="fw-list">
          <li>Tax strategy alignment</li>
          <li>Cashflow sustainability check</li>
          <li>Data-driven negotiation</li>
          <li>Full due diligence coordination</li>
          <li>Portfolio scaling plan</li>
        </ul>
      </div>
    </div>

    {/* CTA */}
    <div className="fw-cta rv" style={{marginTop: '44px'}}>
      <button onClick={openLeadModal} className="btn btn-teal btn-lg" style={{border:'none',cursor:'pointer'}}>Download the Free 4M Framework Guide →</button>
    </div>

  </div>
</section>
    </>
  );
};

export default Method;
