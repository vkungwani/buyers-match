import React from 'react';
import AnimatedText from './AnimatedText';
import { siteData } from '../config/siteData';

const RightFit = ({ openCalendly }) => {
  return (
    <>
      <section id="rightfit">
  <div className="wrap">

    <div className="rv" style={{textAlign: 'center', marginBottom: '56px'}}>
      <div className="eyebrow">Is This You?</div>
      <AnimatedText className="section-h2" textParts={[{text:"Is BuyersMatch the Right Fit for You?"}]} />
      <p className="section-sub" style={{maxWidth: '600px', margin: '0 auto'}}>BuyersMatch works with serious investors who want to build long-term property portfolios, not chase quick wins.<br />If the following sounds like you, we're likely a great match.</p>
    </div>

    <div className="rf-grid rv">

      <div className="rf-col rf-col-yes">
        <div className="rf-col-title">
          <div className="rf-icon rf-icon-yes">✓</div>
          This is perfect for you if:
        </div>
        <ul className="rf-list">
          <li className="rf-item"><div className="rf-tick rf-tick-yes">✓</div>You want to build a long-term property portfolio</li>
          <li className="rf-item"><div className="rf-tick rf-tick-yes">✓</div>You value strategy and research over speculation</li>
          <li className="rf-item"><div className="rf-tick rf-tick-yes">✓</div>You're open to investing across Australia</li>
          <li className="rf-item"><div className="rf-tick rf-tick-yes">✓</div>You want experts negotiating and sourcing the best opportunities</li>
          <li className="rf-item"><div className="rf-tick rf-tick-yes">✓</div>You prefer a done-for-you approach</li>
        </ul>
      </div>

      <div className="rf-col rf-col-no">
        <div className="rf-col-title">
          <div className="rf-icon rf-icon-no">✕</div>
          BuyersMatch may not be the right fit if:
        </div>
        <ul className="rf-list">
          <li className="rf-item"><div className="rf-tick rf-tick-no">✕</div>You're looking for quick flips or speculative deals</li>
          <li className="rf-item"><div className="rf-tick rf-tick-no">✕</div>You only want to buy in one suburb because you like it</li>
          <li className="rf-item"><div className="rf-tick rf-tick-no">✕</div>You want to bid at auctions yourself</li>
          <li className="rf-item"><div className="rf-tick rf-tick-no">✕</div>You're not ready to invest within the next 3–6 months</li>
        </ul>
      </div>

    </div>

    <div className="rf-footer rv">
      <p className="rf-footer-text">If you're serious about building wealth through property and want expert guidance along the way, <strong>we'd love to help you find your perfect property match.</strong></p>
      <button onClick={openCalendly} className="btn btn-teal btn-lg" style={{whiteSpace: 'nowrap', flexShrink: '0', border: 'none', cursor: 'pointer'}}>
        📅 Book Your Strategy Call
      </button>
    </div>

  </div>
</section>
    </>
  );
};

export default RightFit;
