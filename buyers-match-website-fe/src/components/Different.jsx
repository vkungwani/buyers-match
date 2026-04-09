import React from 'react';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import { StaggerContainer, itemVariants } from './Animations';

const points = [
  "Every property reviewed personally by Puja & Vish — not outsourced",
  "Nationwide investment opportunities across all Australian states",
  "Research-driven acquisition strategy — 38 parameters, zero guesswork",
  "Focus on long-term portfolio growth, not single one-off purchases",
  "No developer kickbacks — 100% in your corner, always",
];

const Different = () => {
  return (
    <section
      id="different"
      className="py-[52px] bg-[#1B2A4A] relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_80%_at_100%_50%,rgba(42,191,191,.06)_0%,transparent_65%)]" />

      <div className="max-w-[1200px] mx-auto px-[5%] relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.15em] uppercase text-[#2ABFBF]/70 mb-4 before:content-[''] before:w-[22px] before:h-[2px] before:bg-[#2ABFBF] before:rounded-[2px] before:shrink-0">
              Our Edge
            </div>
            <h2 className="font-['Playfair_Display',Georgia,serif] text-[clamp(28px,3.5vw,42px)] font-black text-white leading-[1.15] mb-4">
              <span className="block">What Makes</span>
              <span className="block">BuyersMatch</span>
              <em className="block not-italic text-[#2ABFBF]">Different</em>
            </h2>
            <p className="text-[16px] text-white/60 leading-[1.75]">
              Most buyers agents find you a property.<br />
              We build you a <strong className="text-white">portfolio strategy first</strong> — then find the right property to match it.
            </p>
          </div>

          {/* Right — checklist */}
          <StaggerContainer className="flex flex-col gap-3" stagger={0.15} delay={0.3}>
            {points.map((point, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-3 bg-white/[0.04] border border-[rgba(42,191,191,.15)] rounded-[14px] p-[18px_20px]"
              >
                <div className="w-[26px] h-[26px] rounded-full bg-[#2ABFBF] flex items-center justify-center text-[12px] font-black text-[#1B2A4A] flex-shrink-0">
                  ✓
                </div>
                <div className="text-[15px] text-white font-semibold leading-[1.5]">
                  {point}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
};

export default Different;
