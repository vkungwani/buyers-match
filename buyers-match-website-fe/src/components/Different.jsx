import React from 'react';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import { StaggerContainer, itemVariants } from './Animations';

const Different = () => {
  return (
    <>
      <section id="different" style={{padding: '80px 0', background: 'var(--navy)', position: 'relative', overflow: 'hidden'}}>
  <div style={{position: 'absolute', inset: '0', background: 'radial-gradient(ellipse 70% 80% at 100% 50%,rgba(42,191,191,.06) 0%,transparent 65%)', pointerEvents: 'none'}}></div>
  <div className="wrap" style={{position: 'relative', zIndex: '1'}}>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}} className="rv diff-grid">

      <div>
        <div className="eyebrow" style={{color: 'rgba(42,191,191,.7)'}}>Our Edge</div>
        <AnimatedText style={{fontFamily: 'var(--ff-h)', fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: '900', color: '#fff', lineHeight: '1.15', marginBottom: '16px', wordBreak: 'keep-all', overflowWrap: 'break-word'}} textParts={[{text:"What Makes BuyersMatch "}, {text:"Different", em:true}]} />
        <p style={{fontSize: '16px', color: 'rgba(255,255,255,.6)', lineHeight: '1.75', marginBottom: '0'}}>Most buyers agents find you a property.<br />We build you a <strong style={{color: '#fff'}}>portfolio strategy first</strong> — then find the right property to match it.</p>
      </div>

      <StaggerContainer style={{display: 'flex', flexDirection: 'column', gap: '14px'}} stagger={0.2} delay={0.3}>
        <motion.div variants={itemVariants} style={{display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(42,191,191,.15)', borderRadius: 'var(--rad-l)', padding: '18px 20px'}}>
          <div style={{width: '26px', height: '26px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '900', color: 'var(--navy)', flexShrink: '0'}}>✓</div>
          <div style={{fontSize: '15px', color: '#fff', fontWeight: '600', lineHeight: '1.5'}}>Every property reviewed personally by Puja &amp; Vish — not outsourced</div>
        </motion.div>
        <motion.div variants={itemVariants} style={{display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(42,191,191,.15)', borderRadius: 'var(--rad-l)', padding: '18px 20px'}}>
          <div style={{width: '26px', height: '26px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '900', color: 'var(--navy)', flexShrink: '0'}}>✓</div>
          <div style={{fontSize: '15px', color: '#fff', fontWeight: '600', lineHeight: '1.5'}}>Nationwide investment opportunities across all Australian states</div>
        </motion.div>
        <motion.div variants={itemVariants} style={{display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(42,191,191,.15)', borderRadius: 'var(--rad-l)', padding: '18px 20px'}}>
          <div style={{width: '26px', height: '26px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '900', color: 'var(--navy)', flexShrink: '0'}}>✓</div>
          <div style={{fontSize: '15px', color: '#fff', fontWeight: '600', lineHeight: '1.5'}}>Research-driven acquisition strategy — 38 parameters, zero guesswork</div>
        </motion.div>
        <motion.div variants={itemVariants} style={{display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(42,191,191,.15)', borderRadius: 'var(--rad-l)', padding: '18px 20px'}}>
          <div style={{width: '26px', height: '26px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '900', color: 'var(--navy)', flexShrink: '0'}}>✓</div>
          <div style={{fontSize: '15px', color: '#fff', fontWeight: '600', lineHeight: '1.5'}}>Focus on long-term portfolio growth, not single one-off purchases</div>
        </motion.div>
        <motion.div variants={itemVariants} style={{display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(42,191,191,.15)', borderRadius: 'var(--rad-l)', padding: '18px 20px'}}>
          <div style={{width: '26px', height: '26px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '900', color: 'var(--navy)', flexShrink: '0'}}>✓</div>
          <div style={{fontSize: '15px', color: '#fff', fontWeight: '600', lineHeight: '1.5'}}>No developer kickbacks — 100% in your corner, always</div>
        </motion.div>
      </StaggerContainer>

    </div>
  </div>
</section>
    </>
  );
};

export default Different;
