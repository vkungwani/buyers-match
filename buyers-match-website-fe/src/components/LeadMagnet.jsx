import React, { useState } from 'react';
import AnimatedText from './AnimatedText';

const LeadMagnet = ({ openLeadModal }) => {
  const [form, setForm] = useState({ name: '', email: '', mobileNumber: '' });
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const isValid =
    form.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    /^[0-9+\-\s()]{7,15}$/.test(form.mobileNumber);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDownload = async () => {
    if (!isValid) return;
    setLoading(true);
    try {
      await fetch('http://localhost:8080/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'Website - 4M Guide Section',
          category: 'Lead Magnet',
          quality: 'New',
          remark: 'Downloaded 4M Framework Guide from LeadMagnet section.',
        }),
      });
    } catch (e) {
      // allow download even if backend is offline
    } finally {
      setLoading(false);
    }

    const link = document.createElement('a');
    link.href = '/BuyersMatch_4M_Guide.pdf';
    link.download = 'BuyersMatch_4M_Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };

  return (
    <>
      <section id="leadmagnet">
        <div className="lm-bg"></div>
        <div className="lm-glow"></div>
        <div className="wrap" style={{ position: 'relative', zIndex: '1' }}>
          <div className="lm-grid">

            {/* ── LEFT: Content + Inline Form ── */}
            <div className="lm-left rvl">
              <div className="eyebrow">Free Download</div>
              <AnimatedText className="lm-h2" textParts={[{text:"The 4M Framework\n"}, {br:true}, {text:"to Property Wealth", em:true}]} />
              <p className="lm-lead">The exact four-pillar system Puja &amp; Vish use to find high-growth properties — condensed into a practical, actionable guide.</p>

              {/* Benefits — compact 2-col grid to save vertical space */}
              <div className="lm-benefits lm-benefits-2col">
                <div className="lm-benefit">High-growth suburb identification</div>
                <div className="lm-benefit">10-point suburb filter system</div>
                <div className="lm-benefit">Market selection scorecard</div>
                <div className="lm-benefit">Emotional vs. strategic table</div>
                <div className="lm-benefit">Property match blueprint</div>
                <div className="lm-benefit">Micro-location decision guide</div>
              </div>

              {/* Inline Form */}
              <div className="lm-inline-form">
                <div className="lm-inline-row">
                  <input
                    className="lm-input lm-input-sm"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                  <input
                    className="lm-input lm-input-sm"
                    type="tel"
                    name="mobileNumber"
                    value={form.mobileNumber}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="lm-form" style={{ marginTop: '10px' }}>
                  <input
                    className="lm-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                  />
                  <button
                    onClick={handleDownload}
                    disabled={!isValid || loading || downloaded}
                    className="btn btn-teal"
                    style={{
                      whiteSpace: 'nowrap',
                      opacity: isValid && !downloaded ? 1 : 0.55,
                      cursor: isValid && !downloaded ? 'pointer' : 'not-allowed',
                      transition: 'opacity .2s',
                      border: 'none',
                    }}
                  >
                    {downloaded ? '✓ Downloaded!' : loading ? 'Saving…' : 'Get Free Guide →'}
                  </button>
                </div>
                <div className="lm-fine">No spam. Unsubscribe anytime. Trusted by 1,200+ investors.</div>
              </div>
            </div>

            {/* ── RIGHT: Book Card ── */}
            <div className="rvr">
              <div className="lm-book">
                <div className="lm-book-head">
                  <div className="lm-pill">Free Guide</div>
                  <div className="lm-book-title">The 4M Framework<br />to Property Wealth</div>
                  <div className="lm-book-sub">By Puja &amp; Vish · BuyersMatch</div>
                  <div className="lm-m-row">
                    <div className="lm-m">M1</div>
                    <div className="lm-m">M2</div>
                    <div className="lm-m">M3</div>
                    <div className="lm-m">M4</div>
                  </div>
                </div>
                <div className="lm-book-body">
                  <ul className="lm-cl">
                    <li>Investor Mindset: think like a pro, not an emotional buyer</li>
                    <li>Right Market: macro forces that drive property values</li>
                    <li>Micro Location: the suburb choice that makes or breaks returns</li>
                    <li>Right Match: aligning property type to your personal blueprint</li>
                    <li>The 10-point BuyersMatch suburb filter checklist</li>
                    <li>Market selection scorecard with weighted star ratings</li>
                    <li>Your match blueprint: goal → property type → key metric</li>
                  </ul>
                </div>
                <div className="lm-book-cta">
                  <button
                    onClick={openLeadModal}
                    className="btn btn-teal btn-lg"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Download Now — It's Free
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default LeadMagnet;
