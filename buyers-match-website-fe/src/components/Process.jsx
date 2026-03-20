import React, { useRef, useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import { StaggerContainer, itemVariants } from './Animations';

const Process = () => {
  const stepsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!stepsRef.current) return;
      const steps = stepsRef.current.querySelectorAll('.proc-step');
      const containerRect = stepsRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const viewCenter = window.innerHeight * 0.5;

      // Calculate scroll progress through the steps container
      const progress = Math.max(0, Math.min(1, (viewCenter - containerTop) / containerHeight));
      stepsRef.current.style.setProperty('--proc-progress', `${Math.round(progress * 100)}%`);

      // Determine which step is closest to viewport center
      let closestIdx = 0;
      let closestDist = Infinity;
      steps.forEach((step, i) => {
        const rect = step.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const dist = Math.abs(stepCenter - viewCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });
      setActiveIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { num: '01', title: 'Free Strategy Session', desc: 'Understand your goals, budget & timeline. Zero obligation, complete clarity.' },
    { num: '02', title: 'Custom Investment Brief', desc: 'Define the ideal asset profile matched to your M4 goals and financial position.' },
    { num: '03', title: 'Market & Suburb Research', desc: 'Full M2 & M3 analysis — we save you 200+ hours of research time.' },
    { num: '04', title: 'Property Shortlisting', desc: 'Only pre-vetted, high-conviction opportunities land in your inbox. No noise.' },
    { num: '05', title: 'Due Diligence & Negotiation', desc: 'We coordinate inspections, reports and price negotiation with hard data.' },
    { num: '06', title: 'Settlement & Beyond', desc: 'PM referrals and ongoing portfolio advice. The relationship continues.' },
  ];

  return (
    <>
      <section id="process">
  <div className="wrap">
    <div className="sec-head rv" style={{marginBottom: '48px'}}>
      <div className="eyebrow">How We Work</div>
      <AnimatedText className="sec-h2" style={{color: '#fff'}} textParts={[{text:"6 steps from brief "}, {text:"to settlement", em:true}]} />
      <p className="sec-sub" style={{maxWidth: '460px'}}>We don't just hand you a framework — we apply it for you, every step of the way.</p>
    </div>
    <div className="proc-grid">
      <div className="proc-steps rvl" ref={stepsRef}>
        {steps.map((step, i) => (
          <div 
            key={i}
            className={`proc-step${activeIndex === i ? ' active' : ''}`} 
          >
            <div className="ps-num">{step.num}</div>
            <div>
              <div className="ps-title">{step.title}</div>
              <div className="ps-desc">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="proc-panel rvr">
        <div className="proc-pg"></div>
        <div className="proc-pi">
          <h3>Our Suburb Filter</h3>
          <div className="proc-pi-sub">15 of the 38 parameters we use to shortlist a suburb</div>
          <StaggerContainer className="checklist" stagger={0.08} once={true}>
            {['Renter proportion','Vacancy rate','Auction clearance rate','Days on market','Average vendor discounting','Stock on market','Online search interest','Gross yield','Demand supply ratio','Median value growth','Rental growth',"'Accessibility' infrastructure","'Job' infrastructure",'Building approvals','Developable land supply'].map((item, i) => (
              <motion.div variants={itemVariants} className="cl-item" key={i}><div className="cl-tick">{String(i+1).padStart(2,'0')}</div>{item}</motion.div>
            ))}
          </StaggerContainer>
          <div style={{marginTop: '14px', padding: '10px 14px', background: 'rgba(42,191,191,.08)', border: '1px solid rgba(42,191,191,.2)', borderRadius: '8px', fontSize: '11.5px', color: 'rgba(255,255,255,.5)', textAlign: 'center'}}>
            <span style={{color: 'var(--teal)', fontWeight: '700'}}>15 of 38 parameters</span> shown &nbsp;·&nbsp; Full analysis applied to every shortlisted suburb
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Process;
