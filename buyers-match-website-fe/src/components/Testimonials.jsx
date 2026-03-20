import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import { siteData } from '../config/siteData';

const Testimonials = () => {
  const mapsUrl = siteData.socials.find(s => s.name === 'maps')?.url || '#';

  return (
    <>
      <section id="testimonials">
        <div className="wrap">
          <div className="testi-head rv">
            <div className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>Client Stories</div>
            <AnimatedText style={{ fontFamily: 'var(--ff-h)', fontSize: 'clamp(26px,3.8vw,44px)', fontWeight: '700', color: 'var(--navy)', marginBottom: '6px' }} textParts={[{text:"What our clients "}, {text:"say", em:true}]} />
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Real people. Real results. No paid reviews.</p>
          </div>
          <div className="testi-grid">
            {siteData.reviews.map((review, index) => (
              <div
                key={index}
                className={`tc ${index === 0 ? 'hero' : ''} rv d${(index % 3) + 1}`}
              >
                <div className="tc-stars">★★★★★</div>
                <span className="tc-qmark" style={index !== 0 ? { color: 'var(--teal)' } : {}}>"</span>
                <p className="tc-text">{review.text}</p>
                <div className="tc-author">
                  <div className="tc-ava">{review.name.charAt(0)}</div>
                  <div>
                    <div className="tc-name">{review.name}</div>
                    <div className="tc-out">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rv" style={{ textAlign: 'center' }}>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="g-row" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              <div className="g-logo">
                <span className="g-b">G</span>
                <span className="g-r">o</span>
                <span className="g-y">o</span>
                <span className="g-b">g</span>
                <span className="g-g">l</span>
                <span className="g-r">e</span>
              </div>
              <div>
                <div className="g-rating">5.0</div>
                <div className="g-stars">★★★★★</div>
                <div className="g-count">100% Five Star Reviews</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;


