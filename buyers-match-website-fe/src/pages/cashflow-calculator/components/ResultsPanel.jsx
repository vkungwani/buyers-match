import React, { useState } from 'react';
import YieldMeter    from './YieldMeter';
import CashflowTable from './CashflowTable';

// ── Formatters ────────────────────────────────────────────────────────────────
const fmtAbs = n  => '$' + Math.abs(Math.round(n)).toLocaleString('en-AU');
const fmtCf  = n  => n < 0 ? `(${fmtAbs(n)})` : fmtAbs(n);

// ── Dark-palette colors ───────────────────────────────────────────────────────
const C_POS   = '#4ADE80';
const C_NEG   = '#F87171';
const C_TEAL  = '#2ABFBF';
const C_WHITE = 'rgba(255,255,255,0.88)';
const C_MID   = 'rgba(255,255,255,0.5)';
const C_HINT  = 'rgba(255,255,255,0.28)';
const C_DIV   = 'rgba(255,255,255,0.07)';

// ── Section header ────────────────────────────────────────────────────────────
const SectionHeader = ({ title, collapsible, open, onToggle, highlight }) => (
  <div
    onClick={collapsible ? onToggle : undefined}
    style={{
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: collapsible ? 'pointer' : 'default',
      background: highlight ? 'linear-gradient(135deg, rgba(42,191,191,0.15) 0%, rgba(42,191,191,0.02) 100%)' : 'rgba(255,255,255,0.025)',
      borderBottom: highlight ? `1px solid rgba(42,191,191,0.4)` : `1px solid ${C_DIV}`,
      borderTop: highlight ? `1px solid rgba(42,191,191,0.4)` : 'none',
      userSelect: 'none',
    }}
  >
    <span style={{
      fontSize: highlight ? 10.5 : 9.5,
      fontWeight: highlight ? 900 : 800,
      textTransform: 'uppercase',
      letterSpacing: '0.13em',
      color: highlight ? C_TEAL : C_HINT,
    }}>
      {highlight && <span style={{marginRight: 6}}>⭐</span>}
      {title}
    </span>
    {collapsible && (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d={open ? 'M2 8l4-4 4 4' : 'M2 4l4 4 4-4'}
          stroke={highlight ? C_TEAL : C_HINT}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </div>
);

// ── Expense row ───────────────────────────────────────────────────────────────
const ExpenseRow = ({ label, value, valueMin, valueMax }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '7px 20px',
    borderBottom: `1px solid rgba(255,255,255,0.04)`,
  }}>
    <span style={{ fontSize: 12, fontWeight: 500, color: C_MID }}>{label}</span>
    <span style={{ fontSize: 12, fontWeight: 700, color: C_WHITE, whiteSpace: 'nowrap' }}>
      {valueMin != null
        ? `${fmtAbs(valueMin)} – ${fmtAbs(valueMax)}`
        : fmtAbs(value ?? 0)
      }
    </span>
  </div>
);

// ── Purchase cost row ─────────────────────────────────────────────────────────
const CostRow = ({ label, value, isBold, isTotal, isNegative }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isTotal ? '11px 20px' : '7px 20px',
    borderBottom: isTotal ? 'none' : `1px solid rgba(255,255,255,0.04)`,
    background: isTotal ? 'rgba(42,191,191,0.07)' : 'transparent',
  }}>
    <span style={{
      fontSize: isTotal ? 13 : 12,
      fontWeight: isTotal || isBold ? 800 : 500,
      color: isTotal ? C_WHITE : C_MID,
    }}>
      {label}
    </span>
    <span style={{
      fontSize: isTotal ? 17 : 12.5,
      fontWeight: isTotal ? 900 : 700,
      color: isTotal ? C_TEAL : (isNegative ? C_NEG : C_WHITE),
      fontFamily: isTotal ? "'Playfair Display', Georgia, serif" : 'inherit',
      whiteSpace: 'nowrap',
    }}>
      {isNegative ? `(${fmtAbs(value ?? 0)})` : fmtAbs(value ?? 0)}
    </span>
  </div>
);

// ── ResultsPanel ──────────────────────────────────────────────────────────────
const ResultsPanel = ({ results, inputs }) => {
  const [expensesOpen, setExpensesOpen] = useState(true);

  // ── Results ────────────────────────────────────────────────────────────────
  const {
    minAfterTax = 0, maxAfterTax = 0,
    minCashflowBT = 0, maxCashflowBT = 0,
    minGrossYield = 0, maxGrossYield = 0,
    minAnnualRent = 0, maxAnnualRent = 0,
    interest = 0,
    propMgtMin = 0, propMgtMax = 0,
    leasingFee = 0, advertising = 0, vacancy = 0,
    councilRates = 0,
    minTotalExpenses = 0, maxTotalExpenses = 0,
    stampDutyResult = { amount: 0, note: '' },
    lmiResult = { lmi: 0, tier: 1 },
    totalCashRequired = 0,
    loanPre = 0, loanPost = 0,
    depreciation = 0,
  } = results ?? {};

  // ── Inputs ─────────────────────────────────────────────────────────────────
  const {
    depositAmount = 0, equityUsed = 0,
    waterRates = 0, homeInsurance = 0,
    landlordInsurance = 0, maintenance = 0,
    bankCharges = 0, strata = 0, landTax = 0,
    conveyancing = 0, buildingPest = 0,
    depSchedule = 0, compliance = 0, settlementLegal = 0,
    minWeeklyRent = 0, maxWeeklyRent = 0,
    purchasePrice = 0,
  } = inputs ?? {};

  // ── Overlay guard ──────────────────────────────────────────────────────────
  const formStarted = Number(purchasePrice) > 0;
  const minRentMissing = minWeeklyRent === '' || Number(minWeeklyRent) === 0;
  const showOverlay = formStarted && minRentMissing;

  // ── Derived ────────────────────────────────────────────────────────────────
  const minATcolor = minAfterTax >= 0 ? C_POS : C_NEG;
  const maxATcolor = maxAfterTax >= 0 ? C_POS : C_NEG;
  const otherCosts = (Number(depSchedule) || 0) + (Number(compliance) || 0);

  // Expenses list (hide strata/landTax if 0)
  const expenseItems = [
    { label: 'Interest',            value: interest },
    { label: 'Property Management', valueMin: propMgtMin, valueMax: propMgtMax },
    { label: 'Leasing Fee',         value: leasingFee },
    { label: 'Advertising',         value: advertising },
    { label: 'Vacancy Allowance',   value: vacancy },
    { label: 'Council Rates',       value: councilRates },
    { label: 'Water Rates',         value: waterRates },
    { label: 'Home Insurance',      value: homeInsurance },
    { label: 'Landlord Insurance',  value: landlordInsurance },
    { label: 'Maintenance',         value: maintenance },
    { label: 'Bank Charges',        value: bankCharges },
    ...(Number(strata)   > 0 ? [{ label: 'Strata / Body Corp', value: strata }]   : []),
    ...(Number(landTax)  > 0 ? [{ label: 'Land Tax',           value: landTax }]  : []),
  ];

  return (
    <div style={{ position: 'relative', borderRadius: 20 }}>

      {/* ── Required field overlay ─────────────────────────────────────── */}
      {showOverlay && (
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          borderRadius: 20,
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          background: 'rgba(15, 23, 42, 0.82)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
          padding: 32,
          textAlign: 'center',
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: 'rgba(229,62,62,0.15)',
            border: '1.5px solid rgba(229,62,62,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="#e53e3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>
            Min Weekly Rent required
          </div>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 220 }}>
            Enter a <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Min Weekly Rent</strong> in Property Details to see your cashflow results.
          </div>
          <div style={{
            marginTop: 4,
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 11, fontWeight: 700, color: '#e53e3e',
            background: 'rgba(229,62,62,0.1)',
            border: '1px solid rgba(229,62,62,0.25)',
            borderRadius: 8, padding: '6px 14px',
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            Fill in the field above
          </div>
        </div>
      )}

    <div style={{
      background: '#1B2A4A',
      borderRadius: 20,
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 8px 48px rgba(0,0,0,0.35)',
      maxHeight: 'calc(100vh - 110px)',
      overflowY: 'auto',
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(42,191,191,0.25) transparent',
    }}>

      {/* ── Panel header ────────────────────────────────────────────────── */}
      <div style={{
        padding: '14px 20px',
        background: 'linear-gradient(135deg, rgba(42,191,191,0.14) 0%, rgba(42,191,191,0.04) 100%)',
        borderBottom: `1px solid ${C_DIV}`,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10,
          background: 'rgba(42,191,191,0.15)',
          border: '1px solid rgba(42,191,191,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke={C_TEAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#fff' }}>
            Live Results
          </div>
          <div style={{ fontSize: 10.5, color: C_HINT, marginTop: 1 }}>Updates as you type</div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — After-Tax Cashflow Hero
      ════════════════════════════════════════════════════════════════════ */}
      <div style={{ padding: '20px 20px 18px', borderBottom: `1px solid ${C_DIV}` }}>
        <div style={{ fontSize: 9.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.13em', color: C_HINT, marginBottom: 12 }}>
          Cashflow After Tax
        </div>

        {/* Monthly range */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
          <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 28, fontWeight: 900, color: minATcolor, lineHeight: 1 }}>
            {fmtCf(minAfterTax / 12)}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 18, fontWeight: 300 }}>—</span>
          <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 28, fontWeight: 900, color: maxATcolor, lineHeight: 1 }}>
            {fmtCf(maxAfterTax / 12)}
          </span>
          <span style={{ fontSize: 11, color: C_HINT, fontWeight: 600 }}>/mo</span>
        </div>

        {/* Annual range */}
        <div style={{ fontSize: 11.5, color: C_MID, marginBottom: 16, fontWeight: 500 }}>
          Annual: <span style={{ color: minATcolor, fontWeight: 700 }}>{fmtCf(minAfterTax)}</span>
          {' '}—{' '}
          <span style={{ color: maxATcolor, fontWeight: 700 }}>{fmtCf(maxAfterTax)}</span>
          {' '}/yr
        </div>

        {/* Min / Max sub-cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {/* Min */}
          <div style={{
            background: 'rgba(255,255,255,0.045)',
            borderRadius: 12,
            padding: '12px 14px',
            border: `1px solid ${minATcolor}28`,
          }}>
            <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: C_HINT, marginBottom: 7 }}>
              Min Scenario
            </div>
            <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 21, fontWeight: 900, color: minATcolor, lineHeight: 1 }}>
              {fmtCf(minAfterTax / 12)}
            </div>
            <div style={{ fontSize: 10.5, color: C_HINT, marginTop: 5, fontWeight: 600 }}>
              {fmtCf(minAfterTax)} / yr
            </div>
          </div>

          {/* Max */}
          <div style={{
            background: 'rgba(255,255,255,0.045)',
            borderRadius: 12,
            padding: '12px 14px',
            border: `1px solid ${maxATcolor}28`,
          }}>
            <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: C_HINT, marginBottom: 7 }}>
              Max Scenario
            </div>
            <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 21, fontWeight: 900, color: maxATcolor, lineHeight: 1 }}>
              {fmtCf(maxAfterTax / 12)}
            </div>
            <div style={{ fontSize: 10.5, color: C_HINT, marginTop: 5, fontWeight: 600 }}>
              {fmtCf(maxAfterTax)} / yr
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — Yield Meter
      ════════════════════════════════════════════════════════════════════ */}
      <div style={{ borderBottom: `1px solid ${C_DIV}` }}>
        <SectionHeader title="Gross Rental Yield" />
        <YieldMeter minYield={minGrossYield} maxYield={maxGrossYield} />
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — Rental Income
      ════════════════════════════════════════════════════════════════════ */}
      <div style={{ borderBottom: `1px solid ${C_DIV}` }}>
        <SectionHeader title="Rental Income" />
        <div style={{ padding: '12px 20px' }}>
          {/* Yield range */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: C_MID }}>Gross Yield Range</span>
            <span style={{ fontSize: 13, fontWeight: 800, color: C_TEAL }}>
              {minGrossYield.toFixed(2)}% – {maxGrossYield.toFixed(2)}%
            </span>
          </div>

          {/* Min rent row */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '10px 14px', marginBottom: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C_HINT, marginBottom: 5 }}>
              Min Rent
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { label: '/wk', val: minWeeklyRent },
                { label: '/mo', val: (minWeeklyRent * 52) / 12 },
                { label: '/yr', val: minAnnualRent },
              ].map(({ label, val }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 16, fontWeight: 900, color: C_WHITE, lineHeight: 1 }}>
                    {fmtAbs(val)}
                  </div>
                  <div style={{ fontSize: 9.5, color: C_HINT, fontWeight: 700, marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Max rent row */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 10, padding: '10px 14px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C_HINT, marginBottom: 5 }}>
              Max Rent
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { label: '/wk', val: maxWeeklyRent },
                { label: '/mo', val: (maxWeeklyRent * 52) / 12 },
                { label: '/yr', val: maxAnnualRent },
              ].map(({ label, val }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 16, fontWeight: 900, color: C_WHITE, lineHeight: 1 }}>
                    {fmtAbs(val)}
                  </div>
                  <div style={{ fontSize: 9.5, color: C_HINT, fontWeight: 700, marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — Expenses Detail (collapsible)
      ════════════════════════════════════════════════════════════════════ */}
      <div style={{ borderBottom: `1px solid ${C_DIV}` }}>
        <SectionHeader
          title="Annual Expenses"
          collapsible
          open={expensesOpen}
          onToggle={() => setExpensesOpen(o => !o)}
        />
        {expensesOpen && (
          <>
            {expenseItems.map((item, i) => (
              <ExpenseRow key={i} {...item} />
            ))}
            {/* Total */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 20px',
              background: 'rgba(255,255,255,0.04)',
              borderTop: `1px solid ${C_DIV}`,
            }}>
              <span style={{ fontSize: 11.5, fontWeight: 800, color: C_WHITE, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Total Expenses
              </span>
              <span style={{ fontSize: 13, fontWeight: 900, color: C_NEG, fontFamily: "'Playfair Display',Georgia,serif" }}>
                {fmtAbs(minTotalExpenses)} – {fmtAbs(maxTotalExpenses)} /yr
              </span>
            </div>
          </>
        )}
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 5 — Cashflow Table
      ════════════════════════════════════════════════════════════════════ */}
      <div style={{ borderBottom: `1px solid ${C_DIV}` }}>
        <SectionHeader title="Cashflow Breakdown" />
        <CashflowTable
          minBT={minCashflowBT}
          maxBT={maxCashflowBT}
          minAT={minAfterTax}
          maxAT={maxAfterTax}
          depreciation={depreciation}
        />
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 6 — Purchase Costs Summary
      ════════════════════════════════════════════════════════════════════ */}
      <div style={{ borderBottom: `1px solid ${C_DIV}` }}>
        <SectionHeader title="Purchase Costs Summary" highlight />

        <CostRow label="Deposit"          value={depositAmount} />
        <CostRow label="Stamp Duty"        value={stampDutyResult?.amount ?? 0} />
        <CostRow label="LMI Premium"       value={lmiResult?.lmi ?? 0} />
        <CostRow label="Conveyancing"      value={conveyancing} />
        <CostRow label="Building & Pest"   value={buildingPest} />
        <CostRow label="Other Costs"       value={otherCosts} />
        <CostRow label="Settlement & Legal" value={settlementLegal} />

        {(lmiResult?.lmi > 0) && (
          <CostRow label="Less LMI (Capitalised)" value={lmiResult.lmi} isNegative />
        )}
        {(Number(equityUsed) > 0) && (
          <CostRow label="Less Equity Used" value={Number(equityUsed)} isNegative />
        )}

        {/* Total Cash Required */}
        <CostRow
          label="Total Cash Required"
          value={totalCashRequired}
          isTotal
        />

        {/* Loan summary */}
        <div style={{ padding: '10px 20px 14px', display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: C_HINT, marginBottom: 5 }}>
              Loan Pre-LMI
            </div>
            <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 16, fontWeight: 900, color: C_WHITE }}>
              {fmtAbs(loanPre)}
            </div>
          </div>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: C_HINT, marginBottom: 5 }}>
              Loan Post-LMI
            </div>
            <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 16, fontWeight: 900, color: C_TEAL }}>
              {fmtAbs(loanPost)}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 7 — Disclaimer
      ════════════════════════════════════════════════════════════════════ */}
      <div style={{ padding: '12px 20px 16px' }}>
        <p style={{
          fontSize: 10,
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.22)',
          fontStyle: 'italic',
          margin: 0,
        }}>
          General information only. Not financial advice. Figures are estimates
          based on inputs provided and may not reflect actual outcomes. Consult a
          qualified financial advisor, accountant, or mortgage broker before
          making any investment decision.
        </p>
      </div>

    </div>
    </div>
  );
};

export default ResultsPanel;
