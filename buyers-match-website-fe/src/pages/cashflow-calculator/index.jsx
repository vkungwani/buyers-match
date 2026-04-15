import React, { useState, useEffect } from 'react';
import { useNavigate }   from 'react-router-dom';
import Navbar            from '../../components/Navbar';
import Footer            from '../../components/Footer';
import PropertyDetails   from './components/PropertyDetails';
import FinanceDetails    from './components/FinanceDetails';
import AnnualExpenses    from './components/AnnualExpenses';
import PurchaseCosts     from './components/PurchaseCosts';
import ResultsPanel      from './components/ResultsPanel';
import useCalcEngine     from './hooks/useCalcEngine';
import {
  DEFAULT_INPUTS,
  STATE_PROPERTY_MANAGEMENT,
  STATE_COUNCIL_RATES,
  BUILD_YEAR_DEPRECIATION,
} from './data/defaults';
import { siteData }      from '../../config/siteData';
import './styles/calculator.css';

// ── CashflowCalculator ────────────────────────────────────────────────────────

const CashflowCalculator = ({ openLeadModal, openCalendly }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(DEFAULT_INPUTS);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // ── State updater ──────────────────────────────────────────────────────────
  const handleChange = (field, value) => {
    setInputs(prev => {
      const updated = { ...prev, [field]: value };

      // Auto-apply state defaults when state changes
      if (field === 'state') {
        updated.propMgtPct   = STATE_PROPERTY_MANAGEMENT[value];
        updated.councilRates = STATE_COUNCIL_RATES[value];
      }

      // Auto-apply depreciation when build year changes
      if (field === 'buildYear') {
        updated.depreciation = BUILD_YEAR_DEPRECIATION[value];
      }

      return updated;
    });
  };

  // ── Calculations ───────────────────────────────────────────────────────────
  const results = useCalcEngine(inputs);

  // Deposit % for display in FinanceDetails
  const depositPct = Number(inputs.purchasePrice) > 0
    ? ((Number(inputs.depositAmount) / Number(inputs.purchasePrice)) * 100).toFixed(1)
    : '0.0';

  // Loan breakdown panel data for FinanceDetails
  const loanBreakdown = {
    purchasePrice: inputs.purchasePrice,
    depositAmount: inputs.depositAmount,
    equityUsed:    inputs.equityUsed   ?? 0,
    lmiPremium:    results.lmiResult?.lmi ?? 0,
    totalLoan:     results.loanPost    ?? 0,
    lvr:           results.lvr         ?? 0,
  };

  // ── Navigation helpers ─────────────────────────────────────────────────────
  const scrollToSection = (id) => navigate(`/#${id}`);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="calc-page" style={{ minHeight: '100vh', background: '#F2F4F8' }}>
      <Navbar scrollToSection={scrollToSection} openCalendly={openCalendly} />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background:    'linear-gradient(135deg, #1B2A4A 0%, #22345A 100%)',
        paddingTop:    48,
        paddingBottom: 52,
        position:      'relative',
        overflow:      'hidden',
      }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: -60,  right: -60,  width: 280, height: 280, borderRadius: '50%', background: 'rgba(42,191,191,0.05)',  pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: '40%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(212,168,67,0.04)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>

            {/* Left: title + tags */}
            <div>
              {/* Eyebrow */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2ABFBF', marginBottom: 14 }}>
                <span style={{ width: 22, height: 2, background: '#2ABFBF', borderRadius: 2, display: 'inline-block' }} />
                Free Tool
              </div>

              {/* H1 */}
              <h1 style={{
                fontFamily:    "'Playfair Display', Georgia, serif",
                fontSize:      'clamp(28px, 4vw, 50px)',
                fontWeight:    900,
                color:         '#fff',
                lineHeight:    1.1,
                letterSpacing: '-0.01em',
                marginBottom:  14,
              }}>
                Property Cashflow<br />
                <span style={{ color: '#2ABFBF' }}>Analyser</span>
              </h1>

              {/* Subtitle */}
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 480, marginBottom: 22 }}>
                Model your investment returns instantly. Accurate stamp duty, LMI,
                and after-tax cashflow for every Australian state.
              </p>

              {/* Feature pills */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['State stamp duty', 'LMI calculator', 'Tax benefit', 'Min / max rent'].map(tag => (
                  <span key={tag} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    padding: '5px 13px', borderRadius: 20,
                    background: 'rgba(42,191,191,0.1)', border: '1px solid rgba(42,191,191,0.2)',
                    fontSize: 11.5, fontWeight: 700, color: '#2ABFBF',
                  }}>
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <circle cx="5" cy="5" r="4" stroke="#2ABFBF" strokeWidth="1.5" />
                      <path d="M3 5l1.5 1.5L7 3.5" stroke="#2ABFBF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: reset button */}
            <button
              onClick={() => setInputs(DEFAULT_INPUTS)}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '10px 18px', borderRadius: 11,
                border: '1.5px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.06)', cursor: 'pointer',
                fontSize: 12.5, fontWeight: 700, color: 'rgba(255,255,255,0.55)',
                transition: 'all 0.2s', flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#2ABFBF';
                e.currentTarget.style.color       = '#2ABFBF';
                e.currentTarget.style.background  = 'rgba(42,191,191,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color       = 'rgba(255,255,255,0.55)';
                e.currentTarget.style.background  = 'rgba(255,255,255,0.06)';
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
              </svg>
              Reset to defaults
            </button>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MAIN — two-column grid
      ══════════════════════════════════════════════════════════════════════ */}
      <main style={{ maxWidth: 1240, margin: '0 auto', padding: '32px 24px 80px' }}>
        <div className="calc-layout">

          {/* ── Left column — stacked input cards ─────────────────────────── */}
          <div className="calc-inputs">

            {/* 1. Property Details */}
            <PropertyDetails
              inputs={inputs}
              onChange={handleChange}
              stampDuty={results.stampDutyResult}
            />

            {/* 2. Finance Details */}
            <FinanceDetails
              inputs={inputs}
              onChange={handleChange}
              depositPct={depositPct}
              loanBreakdown={loanBreakdown}
              lmiResult={results.lmiResult}
            />

            {/* 3. Annual Expenses */}
            <AnnualExpenses
              inputs={inputs}
              onChange={handleChange}
            />

            {/* 4. Purchase Costs */}
            <PurchaseCosts
              inputs={inputs}
              onChange={handleChange}
            />

          </div>

          {/* ── Right column — sticky results panel ───────────────────────── */}
          <div className="calc-results-col">
            <ResultsPanel results={results} inputs={inputs} />
          </div>

        </div>
      </main>

      <Footer scrollToSection={scrollToSection} openCalendly={openCalendly} openLeadModal={openLeadModal} />
    </div>
  );
};

export default CashflowCalculator;
