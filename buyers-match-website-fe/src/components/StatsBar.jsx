import React, { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";

const CountUp = ({
  to,
  prefix = "",
  suffix = "",
  duration = 2,
  decimals = 0,
}) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px 0px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplayValue(value);
        },
      });
      return controls.stop;
    }
  }, [isInView, to, duration]);

  const formattedValue =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.floor(displayValue).toString();

  return (
    <span ref={nodeRef}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};

const StatsBar = () => {
  return (
    <div id="statsbar" className="bg-[#2ABFBF] relative">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {[
          { to: 170, suffix: "+", label: "Properties Secured", delay: 0 },
          {
            to: 5,
            decimals: 1,
            suffix: "★",
            label: "All 5 Star Reviews",
            delay: 0.1,
          },
          {
            to: 100,
            prefix: "$",
            suffix: "M+",
            label: "Properties Purchased",
            delay: 0.2,
          },
          {
            to: 30,
            prefix: "$",
            suffix: "M+",
            label: "Equity Generated",
            delay: 0.3,
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="py-6 px-5 text-center border-r border-[rgba(27,42,74,.14)] last:border-r-0"
          >
            <span className="font-['Playfair_Display',Georgia,serif] text-[28px] sm:text-[36px] md:text-[42px] font-black text-[#1B2A4A] leading-none block">
              <CountUp
                to={stat.to}
                prefix={stat.prefix || ""}
                suffix={stat.suffix}
                duration={2 + i * 0.2}
                decimals={stat.decimals || 0}
              />
            </span>
            <span className="text-[11px] font-bold text-[rgba(27,42,74,.6)] uppercase tracking-[.1em] mt-[5px] block">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
