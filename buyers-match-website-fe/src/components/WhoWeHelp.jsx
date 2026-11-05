import whoWeHelp from "../content/home/who-we-help.json";
import React, { useState } from "react";
import AnimatedText from "./AnimatedText";
import { FadeUp } from "./Animations";

const cardData = whoWeHelp.cards;

const WhoWeHelp = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="who-we-help" className="py-24 bg-[#f7f5f0]">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <FadeUp inView y={30} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[.15em] uppercase text-[#2ABFBF] mb-3 before:content-[''] before:w-[22px] before:h-[2px] before:bg-[#2ABFBF] before:rounded-[2px] before:shrink-0">
            Who We Help
          </div>
          <AnimatedText
            className="sec-h2"
            textParts={[
              { text: "Built for " },
              { text: "every type", em: true },
              { text: " of buyer" },
            ]}
          />
          <p className="text-[16px] text-[#7a8595] leading-[1.7] max-w-[560px] mx-auto">
            No matter where you are in your property journey, BuyersMatch has a
            service designed for your situation.
          </p>
        </FadeUp>

        {/* 3 x 2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardData.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-default"
            >
              {/* Image top */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay on hover */}
                <div
                  className={`absolute inset-0 bg-[#1B2A4A] transition-opacity duration-500 ${hovered === i ? "opacity-40" : "opacity-20"}`}
                />

                {/* Teal gradient bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16"
                  style={{
                    background:
                      "linear-gradient(to top, white 0%, transparent 100%)",
                  }}
                />

                {/* Tag pill top-right */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#1E9898] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-teal-100">
                  {card.tag}
                </div>

                {/* Number badge top-left */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#1B2A4A]/80 backdrop-blur-sm flex items-center justify-center text-white text-[11px] font-black">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pt-4 pb-7">
                {/* Teal accent line */}
                <div
                  className="h-[2px] rounded-full mb-4 transition-all duration-500"
                  style={{
                    width: hovered === i ? "48px" : "28px",
                    background: "linear-gradient(90deg, #2ABFBF, #1E9898)",
                  }}
                />

                <h3 className="font-black text-[#1B2A4A] text-[17px] mb-2.5 leading-snug">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-[13px] leading-relaxed mb-5">
                  {card.desc}
                </p>

                {/* Learn more link */}
              </div>

              {/* Bottom teal bar — slides up on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] transition-transform duration-300 origin-left"
                style={{
                  background: "linear-gradient(90deg, #2ABFBF, #1E9898)",
                  transform: hovered === i ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
