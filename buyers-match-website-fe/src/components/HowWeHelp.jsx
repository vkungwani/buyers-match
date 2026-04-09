import React from "react";
import AnimatedText from "./AnimatedText";
import TiltCard from "./TiltCard";
import { StaggerContainer, FadeUp, itemVariants } from "./Animations";

const HowWeHelp = () => {
  return (
    <>
      <section
        id="how-we-help"
        style={{
          padding: "52px 0",
          background: "var(--stone)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* subtle bg watermark */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "60px solid rgba(42,191,191,.05)",
            pointerEvents: "none",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-60px",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            border: "40px solid rgba(27,42,74,.04)",
            pointerEvents: "none",
          }}
        ></div>

        <div className="wrap" style={{ position: "relative", zIndex: "1" }}>
          {/* Header */}
          <FadeUp
            className="sec-head c"
            style={{ marginBottom: "14px" }}
            inView
            y={30}
          >
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              How We Help
            </div>
            <AnimatedText
              className="sec-h2"
              textParts={[
                { text: "How We Help Investors Build\n" },
                { br: true },
                { text: "Property Portfolios", em: true },
              ]}
            />
            <p
              className="sec-sub"
              style={{ maxWidth: "580px", margin: "0 auto 10px" }}
            >
              We don't just help you buy property.{" "}
              <strong style={{ color: "var(--navy)" }}>
                We help you buy the right property for your portfolio.
              </strong>
            </p>
          </FadeUp>

          {/* M1→M4 pipeline bar */}
          <FadeUp
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "52px",
            }}
            delay={0.2}
            inView
            y={30}
          >
            <div className="hwh-pipeline">
              <div
                style={{
                  padding: "11px 28px",
                  background: "var(--teal)",
                  fontSize: "11px",
                  fontWeight: "800",
                  color: "var(--navy)",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "10px 0 0 10px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "var(--navy)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "9px",
                    color: "var(--teal)",
                    fontWeight: "900",
                    flexShrink: "0",
                  }}
                >
                  M1
                </span>
                Investor
              </div>
              <div
                className="hwh-chevron"
                style={{
                  padding: "11px 6px",
                  background: "rgba(212,168,67,.08)",
                  display: "flex",
                  alignItems: "center",
                  color: "var(--gold)",
                  fontSize: "14px",
                  fontWeight: "900",
                }}
              >
                ›
              </div>
              <div
                style={{
                  padding: "11px 28px",
                  background: "rgba(212,168,67,.12)",
                  fontSize: "11px",
                  fontWeight: "800",
                  color: "#8a6a10",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "var(--gold)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "9px",
                    color: "var(--navy)",
                    fontWeight: "900",
                    flexShrink: "0",
                  }}
                >
                  M2
                </span>
                Market
              </div>
              <div
                className="hwh-chevron"
                style={{
                  padding: "11px 6px",
                  background: "rgba(59,91,165,.08)",
                  display: "flex",
                  alignItems: "center",
                  color: "#3B5BA5",
                  fontSize: "14px",
                  fontWeight: "900",
                }}
              >
                ›
              </div>
              <div
                style={{
                  padding: "11px 28px",
                  background: "rgba(59,91,165,.18)",
                  fontSize: "11px",
                  fontWeight: "800",
                  color: "#2c408a",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#3B5BA5",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "9px",
                    color: "#fff",
                    fontWeight: "900",
                    flexShrink: "0",
                  }}
                >
                  M3
                </span>
                Property
              </div>
              <div
                className="hwh-chevron"
                style={{
                  padding: "11px 6px",
                  background: "rgba(34,166,109,.08)",
                  display: "flex",
                  alignItems: "center",
                  color: "#22A66D",
                  fontSize: "14px",
                  fontWeight: "900",
                }}
              >
                ›
              </div>
              <div
                style={{
                  padding: "11px 28px",
                  background: "rgba(34,166,109,.12)",
                  fontSize: "11px",
                  fontWeight: "800",
                  color: "#176845",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "0 10px 10px 0",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#22A66D",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "9px",
                    color: "#fff",
                    fontWeight: "900",
                    flexShrink: "0",
                  }}
                >
                  M4
                </span>
                Strategy
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html: `
              .hwh-pipeline{display:grid;grid-template-columns:1fr 1fr;gap:4px;border-radius:12px;overflow:hidden;border:1.5px solid rgba(42,191,191,.25);box-shadow:0 4px 20px rgba(42,191,191,.1)}
              .hwh-pipeline>div{border-radius:0!important}
              .hwh-chevron{display:none!important}
              @media(min-width:640px){
                .hwh-pipeline{display:inline-flex;grid-template-columns:none;gap:0}
                .hwh-chevron{display:flex!important}
                .hwh-pipeline>div:first-child{border-radius:10px 0 0 10px!important}
                .hwh-pipeline>div:last-child{border-radius:0 10px 10px 0!important}
              }
            `,
              }}
            />
          </FadeUp>

          {/* 4 equal cards */}
          <StaggerContainer
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "20px",
              alignItems: "stretch",
            }}
            className="m4-grid"
            stagger={0.15}
          >
            {/* M1 */}
            <TiltCard
              variants={itemVariants}
              style={{
                background: "var(--white)",
                borderRadius: "24px",
                border: "1.5px solid rgba(42,191,191,.2)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Card header band */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg,var(--teal) 0%,var(--teal-d) 100%)",
                  padding: "28px 26px 22px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.08)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    right: "10px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.05)",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "14px",
                    position: "relative",
                  }}
                >
                  <div
                    className="animate-spin-slow"
                    style={{ fontSize: "32px" }}
                  >
                    🧭
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,.2)",
                      border: "1.5px solid rgba(255,255,255,.4)",
                      borderRadius: "8px",
                      padding: "4px 10px",
                      fontSize: "10px",
                      fontWeight: "900",
                      color: "#fff",
                      letterSpacing: ".12em",
                    }}
                  >
                    M1
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "800",
                    color: "rgba(255,255,255,.7)",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                    position: "relative",
                  }}
                >
                  Investor Match
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ff-h)",
                    fontSize: "19px",
                    fontWeight: "900",
                    color: "#fff",
                    lineHeight: "1.2",
                    position: "relative",
                    whiteSpace: "nowrap",
                  }}
                >
                  Portfolio Strategy
                </h3>
              </div>
              {/* Body */}
              <div
                style={{
                  padding: "24px 26px",
                  display: "flex",
                  flexDirection: "column",
                  flex: "1",
                }}
              >
                <p
                  style={{
                    fontSize: "13.5px",
                    lineHeight: "1.75",
                    color: "var(--muted)",
                    marginBottom: "18px",
                  }}
                >
                  We start with you — your goals, borrowing capacity, risk
                  profile and timeline — before a single property is considered.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0 0 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    flex: "1",
                  }}
                >
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(42,191,191,.15)",
                        color: "var(--teal-d)",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Borrowing capacity review
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(42,191,191,.15)",
                        color: "var(--teal-d)",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Long-term wealth goals
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(42,191,191,.15)",
                        color: "var(--teal-d)",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Risk profile &amp; time horizon
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(42,191,191,.15)",
                        color: "var(--teal-d)",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Portfolio expansion plan
                  </li>
                </ul>
                <div
                  style={{
                    background: "var(--teal-l)",
                    borderLeft: "3px solid var(--teal)",
                    borderRadius: "0 8px 8px 0",
                    padding: "10px 14px",
                    fontSize: "12px",
                    color: "var(--navy)",
                    fontWeight: "700",
                  }}
                >
                  <span
                    style={{
                      color: "var(--teal-d)",
                      fontSize: "10px",
                      fontWeight: "800",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "2px",
                    }}
                  >
                    Outcome
                  </span>
                  A clear roadmap for your multi-property portfolio
                </div>
              </div>
            </TiltCard>

            {/* M2 */}
            <TiltCard
              variants={itemVariants}
              style={{
                background: "var(--white)",
                borderRadius: "24px",
                border: "1.5px solid rgba(212,168,67,.3)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg,#D4A843 0%,#b88a2e 100%)",
                  padding: "28px 26px 22px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.08)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    right: "10px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.05)",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "14px",
                    position: "relative",
                  }}
                >
                  <div
                    className="animate-spin-slow"
                    style={{ fontSize: "32px" }}
                  >
                    🗺️
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,.25)",
                      border: "1.5px solid rgba(255,255,255,.5)",
                      borderRadius: "8px",
                      padding: "4px 10px",
                      fontSize: "10px",
                      fontWeight: "900",
                      color: "var(--navy)",
                      letterSpacing: ".12em",
                    }}
                  >
                    M2
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "800",
                    color: "rgba(27,42,74,.6)",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                    position: "relative",
                  }}
                >
                  Market Match
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ff-h)",
                    fontSize: "19px",
                    fontWeight: "900",
                    color: "var(--navy)",
                    lineHeight: "1.2",
                    position: "relative",
                    whiteSpace: "nowrap",
                  }}
                >
                  Market Research
                </h3>
              </div>
              <div
                style={{
                  padding: "24px 26px",
                  display: "flex",
                  flexDirection: "column",
                  flex: "1",
                }}
              >
                <p
                  style={{
                    fontSize: "13.5px",
                    lineHeight: "1.75",
                    color: "var(--muted)",
                    marginBottom: "18px",
                  }}
                >
                  We pinpoint locations with the strongest growth fundamentals
                  across Australia using 38 data-driven parameters.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0 0 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    flex: "1",
                  }}
                >
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(212,168,67,.15)",
                        color: "#8a6a10",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Population &amp; economic growth
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(212,168,67,.15)",
                        color: "#8a6a10",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Infrastructure investment
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(212,168,67,.15)",
                        color: "#8a6a10",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Demand–supply imbalance
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(212,168,67,.15)",
                        color: "#8a6a10",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    38-parameter suburb filter
                  </li>
                </ul>
                <div
                  style={{
                    background: "rgba(212,168,67,.1)",
                    borderLeft: "3px solid #D4A843",
                    borderRadius: "0 8px 8px 0",
                    padding: "10px 14px",
                    fontSize: "12px",
                    color: "var(--navy)",
                    fontWeight: "700",
                  }}
                >
                  <span
                    style={{
                      color: "#8a6a10",
                      fontSize: "10px",
                      fontWeight: "800",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "2px",
                    }}
                  >
                    Outcome
                  </span>
                  Data-backed suburbs with the highest growth potential
                </div>
              </div>
            </TiltCard>

            {/* M3 — Indigo */}
            <TiltCard
              variants={itemVariants}
              style={{
                background: "var(--white)",
                borderRadius: "24px",
                border: "1.5px solid rgba(59,91,165,.3)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg,#3B5BA5 0%,#2c408a 100%)",
                  padding: "28px 26px 22px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.08)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    right: "10px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.05)",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "14px",
                    position: "relative",
                  }}
                >
                  <div
                    className="animate-spin-slow"
                    style={{ fontSize: "32px" }}
                  >
                    🏡
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,.2)",
                      border: "1.5px solid rgba(255,255,255,.4)",
                      borderRadius: "8px",
                      padding: "4px 10px",
                      fontSize: "10px",
                      fontWeight: "900",
                      color: "#fff",
                      letterSpacing: ".12em",
                    }}
                  >
                    M3
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "800",
                    color: "rgba(255,255,255,.7)",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                    position: "relative",
                  }}
                >
                  Property Match
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ff-h)",
                    fontSize: "18px",
                    fontWeight: "900",
                    color: "#fff",
                    lineHeight: "1.2",
                    position: "relative",
                    whiteSpace: "nowrap",
                  }}
                >
                  Property Acquisition
                </h3>
              </div>
              <div
                style={{
                  padding: "24px 26px",
                  display: "flex",
                  flexDirection: "column",
                  flex: "1",
                }}
              >
                <p
                  style={{
                    fontSize: "13.5px",
                    lineHeight: "1.75",
                    color: "var(--muted)",
                    marginBottom: "18px",
                  }}
                >
                  Using deep agent relationships and rigorous price analysis, we
                  give you access and an edge other buyers simply don't have."
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0 0 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    flex: "1",
                  }}
                >
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(59,91,165,.15)",
                        color: "#2c408a",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    On &amp; off-market sourcing
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(59,91,165,.15)",
                        color: "#2c408a",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Price analysis &amp; strategy
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(59,91,165,.15)",
                        color: "#2c408a",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Agent relationship leverage
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(59,91,165,.15)",
                        color: "#2c408a",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Auction representation
                  </li>
                </ul>
                <div
                  style={{
                    background: "rgba(59,91,165,.08)",
                    borderLeft: "3px solid #3B5BA5",
                    borderRadius: "0 8px 8px 0",
                    padding: "10px 14px",
                    fontSize: "12px",
                    color: "var(--navy)",
                    fontWeight: "700",
                  }}
                >
                  <span
                    style={{
                      color: "#2c408a",
                      fontSize: "10px",
                      fontWeight: "800",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "2px",
                    }}
                  >
                    Outcome
                  </span>
                  Right property secured at the right price, every single time
                </div>
              </div>
            </TiltCard>

            {/* M4 — Emerald */}
            <TiltCard
              variants={itemVariants}
              style={{
                background: "var(--white)",
                borderRadius: "24px",
                border: "1.5px solid rgba(34,166,109,.3)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg,#22A66D 0%,#176845 100%)",
                  padding: "28px 26px 22px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.12)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    right: "10px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.08)",
                  }}
                ></div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "14px",
                    position: "relative",
                  }}
                >
                  <div
                    className="animate-spin-slow"
                    style={{ fontSize: "32px" }}
                  >
                    🎯
                  </div>
                  <div
                    style={{
                      background: "rgba(255,255,255,.25)",
                      border: "1.5px solid rgba(255,255,255,.5)",
                      borderRadius: "8px",
                      padding: "4px 10px",
                      fontSize: "10px",
                      fontWeight: "900",
                      color: "#fff",
                      letterSpacing: ".12em",
                    }}
                  >
                    M4
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "800",
                    color: "rgba(255,255,255,.7)",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                    position: "relative",
                  }}
                >
                  Strategy Match
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ff-h)",
                    fontSize: "19px",
                    fontWeight: "900",
                    color: "#fff",
                    lineHeight: "1.2",
                    position: "relative",
                    whiteSpace: "nowrap",
                  }}
                >
                  Portfolio Strategy
                </h3>
              </div>
              <div
                style={{
                  padding: "24px 26px",
                  display: "flex",
                  flexDirection: "column",
                  flex: "1",
                }}
              >
                <p
                  style={{
                    fontSize: "13.5px",
                    lineHeight: "1.75",
                    color: "var(--muted)",
                    marginBottom: "18px",
                  }}
                >
                  Every property is put through a rigorous evaluation covering
                  comparable sales, yield, risk and long-term growth potential.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0 0 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    flex: "1",
                  }}
                >
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(34,166,109,.15)",
                        color: "#176845",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Comparable sales analysis
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(34,166,109,.15)",
                        color: "#176845",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Building &amp; pest risk review
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(34,166,109,.15)",
                        color: "#176845",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Rental yield &amp; vacancy data
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--ink)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(34,166,109,.15)",
                        color: "#176845",
                        fontSize: "9px",
                        fontWeight: "900",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    Long-term growth potential
                  </li>
                </ul>
                <div
                  style={{
                    background: "rgba(34,166,109,.08)",
                    borderLeft: "3px solid #22A66D",
                    borderRadius: "0 8px 8px 0",
                    padding: "10px 14px",
                    fontSize: "12px",
                    color: "var(--navy)",
                    fontWeight: "700",
                  }}
                >
                  <span
                    style={{
                      color: "#176845",
                      fontSize: "10px",
                      fontWeight: "800",
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "2px",
                    }}
                  >
                    Outcome
                  </span>
                  Confidence the asset fits & strengthens your long-term
                  portfolio strategy
                </div>
              </div>
            </TiltCard>
          </StaggerContainer>

          {/* responsive */}
          <style
            dangerouslySetInnerHTML={{
              __html: `@media(max-width:900px){.m4-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:520px){.m4-grid{grid-template-columns:1fr!important}}`,
            }}
          />
        </div>
      </section>
    </>
  );
};

export default HowWeHelp;
