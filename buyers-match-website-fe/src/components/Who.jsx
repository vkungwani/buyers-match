import React from 'react';
import AnimatedText from './AnimatedText';
import TiltCard from './TiltCard';
import { StaggerContainer, FadeUp, itemVariants } from './Animations';

// Premium SVG icons for the Who section
const icons = {
  investor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:'26px',height:'26px'}}>
      <path d="M3 3v18h18"/><path d="M18 10l-5 5-2-2-3 3"/>
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:'26px',height:'26px'}}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  firstHome: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:'26px',height:'26px'}}>
      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/>
    </svg>
  ),
  renovate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:'26px',height:'26px'}}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  interstate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:'26px',height:'26px'}}>
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  smsf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width:'26px',height:'26px'}}>
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
    </svg>
  ),
};

const cardData = [
  { icon: icons.investor, title: 'Property Investors', desc: 'Build a high-growth, high-yield portfolio with data-driven acquisitions' },
  { icon: icons.home, title: 'Owner Occupiers', desc: 'Find and secure the right home without competing blind at auction' },
  { icon: icons.firstHome, title: 'First Home Buyers', desc: 'Navigate your first purchase with expert guidance from day one' },
  { icon: icons.renovate, title: 'Renovators & Flippers', desc: 'Find undervalued properties with strong renovation or flip potential' },
  { icon: icons.interstate, title: 'Interstate Buyers', desc: 'Invest anywhere in Australia with local knowledge on the ground' },
  { icon: icons.smsf, title: 'SMSF Investors', desc: 'Grow your self-managed super fund with the right compliant property strategy' },
];

const Who = () => {
  return (
    <>
      <section id="who">
  <div className="wrap">
    <FadeUp className="sec-head c" inView y={30} style={{maxWidth: '800px', margin: '0 auto 52px'}}>
      <div className="eyebrow">Who We Help</div>
      <AnimatedText className="sec-h2" textParts={[{text:"Built for "}, {text:"every type", em:true}, {text:" of buyer"}]} />
      <p className="sec-sub">No matter where you are in your property journey, BuyersMatch has a service designed for your situation.</p>
    </FadeUp>
    <StaggerContainer className="who-grid">
      {cardData.map((card, i) => (
        <TiltCard 
          key={i}
          variants={itemVariants} 
          className="who-card"
        >
          <div className="who-icon who-icon-svg">{card.icon}</div>
          <div className="who-title">{card.title}</div>
          <div className="who-desc">{card.desc}</div>
        </TiltCard>
      ))}
    </StaggerContainer>
  </div>
</section>
    </>
  );
};

export default Who;
