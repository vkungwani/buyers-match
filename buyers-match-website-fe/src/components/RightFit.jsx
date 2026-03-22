import React from 'react';
import AnimatedText from './AnimatedText';
import { siteData } from '../config/siteData';

const yesPoints = [
  "You want to build a long-term property portfolio",
  "You value strategy and research over speculation",
  "You're open to investing across Australia",
  "You want experts negotiating and sourcing the best opportunities",
  "You prefer a done-for-you approach",
];

const noPoints = [
  "You're looking for quick flips or speculative deals",
  "You only want to buy in one suburb because you like it",
  "You want to bid at auctions yourself",
  "You're not ready to invest within the next 3–6 months",
];

const RightFit = ({ openCalendly }) => {
  return (
    <section id="rightfit" className="py-[52px] bg-[#1B2A4A] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(42,191,191,.08)_0%,transparent_70%)]" />

      <div className="max-w-[1200px] mx-auto px-[5%] relative z-[1]">
        {/* Header */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.15em] uppercase text-[#2ABFBF]/70 mb-4 before:content-[''] before:w-[22px] before:h-[2px] before:bg-[#2ABFBF] before:rounded-[2px] before:shrink-0">
            Is This You?
          </div>
          <AnimatedText
            className="font-['Playfair_Display',Georgia,serif] text-[clamp(26px,4vw,44px)] font-black text-white leading-[1.15] mb-3"
            textParts={[{ text: "Is BuyersMatch the Right Fit for You?" }]}
          />
          <p className="text-[16px] text-white/60 leading-[1.7] max-w-[600px] mx-auto">
            BuyersMatch works with serious investors who want to build long-term property portfolios, not chase quick wins.<br />
            If the following sounds like you, we're likely a great match.
          </p>
        </div>

        {/* Yes / No Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* YES */}
          <div className="rounded-[16px] p-9 bg-white/[0.04] border border-[rgba(42,191,191,.25)]">
            <div className="font-['Playfair_Display',Georgia,serif] text-[17px] font-black text-[#2ABFBF] mb-5 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#2ABFBF] flex items-center justify-center text-[13px] font-black text-[#1B2A4A]">✓</div>
              This is perfect for you if:
            </div>
            <ul className="flex flex-col gap-3">
              {yesPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.55] text-white/75">
                  <div className="w-[22px] h-[22px] rounded-full bg-[#2ABFBF] flex items-center justify-center text-[11px] font-black text-[#1B2A4A] flex-shrink-0 mt-0.5">✓</div>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* NO */}
          <div className="rounded-[16px] p-9 bg-white/[0.025] border border-[rgba(249,112,102,.15)]">
            <div className="font-['Playfair_Display',Georgia,serif] text-[17px] font-black text-[#f97066] mb-5 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[rgba(249,112,102,.18)] flex items-center justify-center text-[13px] font-black text-[#f97066]">✕</div>
              BuyersMatch may not be the right fit if:
            </div>
            <ul className="flex flex-col gap-3">
              {noPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.55] text-white/75">
                  <div className="w-[22px] h-[22px] rounded-full bg-[rgba(249,112,102,.15)] flex items-center justify-center text-[13px] font-black text-[#f97066] flex-shrink-0 mt-0.5">✕</div>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="relative group/cta mt-12">
          {/* Decorative Glow behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2ABFBF]/20 to-transparent rounded-[20px] blur-xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-white/[0.07] backdrop-blur-sm border border-[#2ABFBF]/30 rounded-[20px] p-8 md:p-12 flex items-center justify-between gap-10 flex-wrap shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-[#2ABFBF]/50 transition-all duration-500">
            <div className="max-w-[640px]">
              <p className="text-[18px] md:text-[20px] leading-[1.6] text-white/90 font-medium">
                If you're serious about building wealth through property and want expert guidance along the way,{' '}
                <span className="text-white font-bold block mt-2 text-[19px] md:text-[22px] tracking-tight">
                  we'd love to help you find your perfect property match.
                </span>
              </p>
            </div>
            
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-3 font-['DM_Sans',system-ui,sans-serif] font-black rounded-xl cursor-pointer transition-all duration-300 bg-[#2ABFBF] text-[#1B2A4A] px-6 md:px-10 py-4 md:py-5 text-[15px] md:text-[16px] hover:bg-white hover:shadow-[0_15px_35px_rgba(42,191,191,0.4)] hover:-translate-y-1 active:scale-95 border-none flex-shrink-0"
            >
              📅 Book Your Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightFit;
