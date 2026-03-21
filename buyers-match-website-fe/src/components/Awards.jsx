import React from 'react';
import AnimatedText from './AnimatedText';
import award1 from '../assets/award1_low.webp';
import award2 from '../assets/award2.jpeg';

const Awards = () => {
  return (
    <>
      <section id="awards">
        <div className="wrap">
          <div className="rv" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="eyebrow">Recognition &amp; Credentials</div>
            <AnimatedText className="section-h2" style={{color: 'var(--navy)'}} textParts={[{text:"Award-Winning Advocacy"}]} />
            <p className="section-sub" style={{ maxWidth: '520px', margin: '0 auto', color: 'var(--muted)' }}>Industry recognition that reflects our commitment to excellence and client outcomes.</p>
          </div>

          <div className="awards-grid">

            {/* Award 1: BAI Rising Star */}
            <div className="award-card rv d1">
              <div className="award-img-wrap">
                <img src={award1} alt="Buyer's Agent Institute Rising Star Award 2024 — Puja Dhanetwal" className="award-img" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
                <div className="award-badge" style={{ background: 'linear-gradient(135deg,#2ABFBF,#1a9999)' }}>⭐</div>
              </div>
              <div className="award-year">2024</div>
              <div className="award-title">Rising Star Award</div>
              <div className="award-org">Buyer's Agent Institute</div>
              <p className="award-desc">It was presented to <strong>Puja Dhanetwal</strong> in recognition of outstanding achievement and truly exceptional client outcomes as a highly promising an emerging buyer's agent in Australia.</p>
              <div className="award-ribbon">🏆 Puja Dhanetwal · BAI 2024</div>
            </div>

            {/* Award 2: Monash Business Awards */}
            <div className="award-card rv d2">
              <div className="award-img-wrap">
                <img src={award2} alt="Monash Business Awards 2024/25 Nominee — BuyersMatch Professional Services" className="award-img" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
                <div className="award-badge" style={{ background: 'linear-gradient(135deg,#6B3FA0,#4a2880)' }}>🎖️</div>
              </div>
              <div className="award-year">2024 / 25</div>
              <div className="award-title">Professional Services Nominee</div>
              <div className="award-org">Monash Business Awards</div>
              <p className="award-desc">BuyersMatch was nominated for the <strong>2024/25 Monash Business Awards</strong> in the Professional Services category — recognising excellence and impact in the local business community.</p>
              <div className="award-ribbon">🎖️ MBA Nominee · Presented 18 June 2025</div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
