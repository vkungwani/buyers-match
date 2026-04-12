import React from "react";
import AnimatedText from "./AnimatedText";

const LeadMagnet = ({ openLeadModal }) => {
  return (
    <>
      <section id="leadmagnet">
        <div className="lm-bg"></div>
        <div className="lm-glow"></div>
        <div className="wrap" style={{ position: "relative", zIndex: "1" }}>
          <div className="lm-grid">
            {/* ── LEFT: Content + Inline Form ── */}
            <div className="lm-left rvl">
              <div className="eyebrow">Get it Free</div>
              <AnimatedText
                className="lm-h2"
                textParts={[
                  { text: "The 4M Framework\n" },
                  { br: true },
                  { text: "to Property Wealth", em: true },
                ]}
              />
              <p className="lm-lead">
                The exact four-pillar system Puja &amp; Vish use to find
                high-growth properties — condensed into a practical, actionable
                guide.
              </p>

              {/* Benefits — compact 2-col grid to save vertical space */}
              <div className="lm-benefits lm-benefits-2col">
                <div className="lm-benefit">
                  High-growth suburb identification
                </div>
                <div className="lm-benefit">10-point suburb filter system</div>
                <div className="lm-benefit">Market selection scorecard</div>
                <div className="lm-benefit">Emotional vs. strategic table</div>
                <div className="lm-benefit">Property match blueprint</div>
                <div className="lm-benefit">Micro-location decision guide</div>
              </div>
            </div>

            {/* ── RIGHT: Book Card ── */}
            <div className="rvr">
              <div className="lm-book">
                <div className="lm-book-head">
                  <div className="lm-pill">Free Guide</div>
                  <div className="lm-book-title">
                    The 4M Framework
                    <br />
                    to Property Wealth
                  </div>
                  <div className="lm-book-sub">
                    By Puja &amp; Vish · BuyersMatch
                  </div>
                  <div className="lm-m-row">
                    <div className="lm-m">M1</div>
                    <div className="lm-m">M2</div>
                    <div className="lm-m">M3</div>
                    <div className="lm-m">M4</div>
                  </div>
                </div>
                <div className="lm-book-body">
                  <ul className="lm-cl">
                    <li>
                      Investor Mindset: think like a pro, not an emotional buyer
                    </li>
                    <li>
                      Right Market: macro forces that drive property values
                    </li>
                    <li>
                      Micro Location: the suburb choice that makes or breaks
                      returns
                    </li>
                    <li>
                      Right Match: aligning property type to your personal
                      blueprint
                    </li>
                    <li>The 10-point BuyersMatch suburb filter checklist</li>
                    <li>
                      Market selection scorecard with weighted star ratings
                    </li>
                    <li>
                      Your match blueprint: goal → property type → key metric
                    </li>
                  </ul>
                </div>
                <div className="lm-book-cta">
                  <button
                    onClick={openLeadModal}
                    className="btn btn-teal btn-lg"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Grab Now — It's Free
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
