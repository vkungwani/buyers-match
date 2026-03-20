import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const CountUp = ({ to, prefix = "", suffix = "", duration = 2, decimals = 0 }) => {
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
        }
      });
      return controls.stop;
    }
  }, [isInView, to, duration]);

  const formattedValue = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.floor(displayValue).toString();

  return <span ref={nodeRef}>{prefix}{formattedValue}{suffix}</span>;
};

const StatsBar = () => {
  return (
    <>
      <div id="statsbar">
  <div className="stats-row">
    <div className="stat-cell rv"><span className="stat-n"><CountUp to={150} suffix="+" duration={2} /></span><span className="stat-l">Properties Secured</span></div>
    <div className="stat-cell rv d1"><span className="stat-n"><CountUp to={5} decimals={1} suffix="★" duration={1.5} /></span><span className="stat-l">All 5 Star Reviews</span></div>
    <div className="stat-cell rv d2"><span className="stat-n"><CountUp to={100} prefix="$" suffix="M+" duration={2.5} /></span><span className="stat-l">Properties Purchased</span></div>
    <div className="stat-cell rv d3"><span className="stat-n"><CountUp to={30} prefix="$" suffix="M+" duration={2.2} /></span><span className="stat-l">Equity Generated</span></div>
  </div>
</div>
    </>
  );
};

export default StatsBar;
