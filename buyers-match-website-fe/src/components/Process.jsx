import processContent from '../content/home/process.json';
import React, { useRef, useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import { StaggerContainer, itemVariants } from './Animations';

const steps = processContent.steps.map((s, i) => ({
  num: String(i + 1).padStart(2, '0'),
  ...s,
}));

const checklistItems = processContent.checklist;

const Process = () => {
  const stepsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!stepsRef.current) return;
      const stepEls = stepsRef.current.querySelectorAll('[data-step]');
      const containerRect = stepsRef.current.getBoundingClientRect();
      const viewCenter = window.innerHeight * 0.5;
      const p = Math.max(0, Math.min(1, (viewCenter - containerRect.top) / containerRect.height));
      setProgress(p);
      let closestIdx = 0, closestDist = Infinity;
      stepEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - viewCenter);
        if (dist < closestDist) { closestDist = dist; closestIdx = i; }
      });
      setActiveIndex(closestIdx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-[52px] bg-[#1B2A4A] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}


        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[72px] items-start">
          {/* Steps Column */}
          <div className="flex flex-col">
            {/* Header moved here */}
            <div className="mb-10 lg:mb-14">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.15em] uppercase text-[#2ABFBF]/70 mb-3 before:content-[''] before:w-[22px] before:h-[2px] before:bg-[#2ABFBF] before:rounded-[2px] before:shrink-0">
                How We Work
              </div>
              <AnimatedText
                className="font-['Playfair_Display',Georgia,serif] text-[clamp(30px,4.2vw,50px)] font-bold text-white leading-[1.1] mb-5"
                textParts={[
                  { text: `${steps.length} steps from brief ` },
                  { br: true },
                  { text: "to settlement", em: true }
                ]}
              />
              <p className="text-[16px] text-white/55 leading-[1.7] max-w-[460px]">
                We don't just hand you a framework — we apply it for you, every step of the way.
              </p>
            </div>

            <div ref={stepsRef} className="flex flex-col relative">
            {/* Animated line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/[0.08] rounded-sm z-0">
              <div
                className="absolute top-0 left-0 right-0 bg-[#2ABFBF] rounded-sm transition-all duration-150"
                style={{ height: `${progress * 100}%` }}
              />
            </div>
            {steps.map((step, i) => (
              <div
                key={i}
                data-step
                className={`flex gap-4 py-5 border-b border-white/[0.08] last:border-b-0 last:pb-0 first:pt-0 relative z-[1] cursor-default transition-all duration-200 ${activeIndex === i ? 'bg-[rgba(42,191,191,.04)] rounded-[8px] -mx-2 px-2' : ''}`}
              >
                <div
                  className={`w-10 h-10 flex-shrink-0 rounded-[9px] flex items-center justify-center text-[11.5px] font-bold font-['Playfair_Display',Georgia,serif] border transition-all duration-200 ${
                    activeIndex === i
                      ? 'bg-[#2ABFBF] text-[#1B2A4A] border-transparent shadow-[0_0_15px_rgba(42,191,191,.4)]'
                      : 'bg-white/[0.06] text-[#2ABFBF] border-[rgba(42,191,191,.2)]'
                  }`}
                >
                  {step.num}
                </div>
                <div>
                  <div className="font-bold text-[14.5px] text-white mb-[3px]">{step.title}</div>
                  <div className="text-[12.5px] text-white/55 leading-[1.65]">{step.desc}</div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Panel */}
          <div className="bg-[#1B2A4A] rounded-[20px] p-[24px_20px] md:p-[38px_34px] md:sticky top-[86px] overflow-hidden relative border border-[rgba(42,191,191,.12)] md:mt-1 lg:mt-2">
            {/* Grid BG */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(42,191,191,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(42,191,191,.05)_1px,transparent_1px)] bg-[length:38px_38px]" />
            <div className="relative z-[1]">
              <h3 className="font-['Playfair_Display',Georgia,serif] text-[23px] text-white mb-[5px]">Our Suburb Filter</h3>
              <div className="text-[12.5px] text-white/50 mb-6">{checklistItems.length} of the 38 parameters we use to shortlist a suburb</div>
              <StaggerContainer className="flex flex-col gap-[9px]" stagger={0.08} once={true}>
                {checklistItems.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-2.5 bg-white/[0.05] border border-[rgba(42,191,191,.12)] rounded-[8px] px-[13px] py-2.5 text-[13px] text-white/75 transition-colors duration-200 hover:border-[rgba(42,191,191,.3)]"
                  >
                    <div className="w-[19px] h-[19px] flex-shrink-0 bg-[#2ABFBF] rounded-full flex items-center justify-center text-[9.5px] text-[#1B2A4A] font-black">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {item}
                  </motion.div>
                ))}
              </StaggerContainer>
              <div className="mt-3.5 px-[14px] py-2.5 bg-[rgba(42,191,191,.08)] border border-[rgba(42,191,191,.2)] rounded-[8px] text-[11.5px] text-white/50 text-center">
                <span className="text-[#2ABFBF] font-bold">{checklistItems.length} of 38 parameters</span> shown &nbsp;·&nbsp; Full analysis applied to every shortlisted suburb
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
