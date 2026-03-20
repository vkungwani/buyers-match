import React from 'react';
import { siteData } from '../config/siteData';
import AnimatedText from './AnimatedText';

const Contact = ({ scrollToSection, openCalendly, openLeadModal }) => {
  const handleNavClick = (e, hash) => {
    if (scrollToSection) {
      e.preventDefault();
      scrollToSection(hash);
    }
  };

  return (
    <>
      <section id="ctabanner">
        <div className="cta-bg"></div>
        <div className="wrap cta-inner">
          <div className="rv">
            <div className="cta-pre">Start with a free call</div>
            <AnimatedText className="cta-h2" textParts={[{text:"Ready to find your"}, {br:true}, {text:"perfect property match?"}]} />
            <p className="cta-body">Book a free 30-minute strategy session with Puja &amp; Vish.<br />No obligation. No generic advice. Just clarity on your next move.</p>
            <div className="cta-btns">
              <button onClick={openCalendly} className="btn btn-navy btn-lg" style={{ fontSize: '16px', padding: '18px 40px', border: 'none', cursor: 'pointer' }}>
                📅 Book Your Free Strategy Call
              </button>
              <button onClick={openLeadModal} className="btn btn-outline btn-lg" style={{ border: 'none', cursor: 'pointer' }}>Download Free 4M Guide</button>
            </div>
            <div className="cta-contacts">
              <span>📞 Puja: <a href={`tel:${siteData.contact.phones[0].replace(/\s/g, '')}`}>{siteData.contact.phones[0]}</a></span>
              <span>📞 Vish: <a href={`tel:${siteData.contact.phones[1].replace(/\s/g, '')}`}>{siteData.contact.phones[1]}</a></span>
              <span>✉️ <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a></span>
              <span>🌐 <a href="/">{siteData.name}.com.au</a></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
