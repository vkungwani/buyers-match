import React from 'react';
import { TAX_RATES } from '../data/defaults';
import '../styles/calculator.css';

const fmt = n => '$' + Math.round(Math.abs(n)).toLocaleString('en-AU');

const BankIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="var(--calc-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
);

// ── Shared micro-components ───────────────────────────────────────────────────

const MoneyInput = ({ value, onChange, disabled, placeholder }) => (
  <div className={`cfc-input-group${disabled ? ' readonly' : ''}`}>
    <span className="cfc-addon">$</span>
    <input
      className={`cfc-input${disabled ? ' readonly' : ''}`}
      type="number"
      min={0}
      step={1000}
      value={value}
      placeholder={placeholder ?? ''}
      disabled={disabled}
      readOnly={disabled}
      onChange={e => !disabled && onChange(e.target.value === '' ? '' : Number(e.target.value))}
    />
  </div>
);

const ReadonlyPill = ({ value }) => (
  <div className="cfc-input-group readonly">
    <input
      className="cfc-input readonly"
      type="text"
      value={value}
      readOnly
    />
  </div>
);

const Field = ({ label, note, noteClass, full, tooltip, children }) => {
  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <div className={`cfc-field${full ? ' full' : ''}`}>
      <div className="cfc-label" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {label}
        {tooltip && (
          <button
            type="button"
            onClick={() => setShowInfo(!showInfo)}
            style={{
              background: showInfo ? 'var(--calc-teal)' : 'rgba(42, 191, 191, 0.12)',
              border: '1px solid rgba(42, 191, 191, 0.3)',
              color: showInfo ? '#fff' : 'var(--calc-teal-dark)',
              borderRadius: '50%',
              width: 14,
              height: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 9,
              fontWeight: 800,
              fontFamily: 'serif',
              padding: 0,
              flexShrink: 0
            }}
            title="More info"
          >
            i
          </button>
        )}
      </div>
      {tooltip && showInfo && (
        <div style={{
          fontSize: 10,
          color: 'var(--calc-teal-dark)',
          background: 'rgba(42, 191, 191, 0.08)',
          border: '1px solid rgba(42, 191, 191, 0.15)',
          padding: '6px 10px',
          borderRadius: 6,
          marginTop: -2,
          marginBottom: 4,
          lineHeight: 1.4,
          fontWeight: 600
        }}>
          {tooltip}
        </div>
      )}
      {children}
      {note && <div className={`cfc-note${noteClass ? ' ' + noteClass : ''}`}>{note}</div>}
    </div>
  );
};

// ── FinanceDetails ────────────────────────────────────────────────────────────

const FinanceDetails = ({ inputs, onChange, depositPct, loanBreakdown, lmiResult }) => {
  const {
    interestRate, taxRate, depositAmount, equityUsed,
    lmiOverride, lmiWaived,
  } = inputs;

  const lvrDisplay = loanBreakdown?.lvr != null
    ? (loanBreakdown.lvr * 100).toFixed(1) + '%'
    : '—';

  // Active LMI tier: 1 = no LMI, 2 = standard, 3 = high
  const activeTier = lmiResult?.tier ?? 1;

  return (
    <div className="cfc-card-primary">
      {/* Header */}
      <div className="cfc-header-primary" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="cfc-header-primary-icon"><BankIcon /></div>
        <div style={{ flex: 1 }}>
          <div className="cfc-header-primary-title">Finance Details</div>
          <div className="cfc-header-primary-sub">Loan, deposit &amp; tax settings</div>
        </div>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.15)', 
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#fff', 
          fontSize: '9px', 
          fontWeight: 800, 
          padding: '4px 8px', 
          borderRadius: '4px', 
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          Required
        </div>
      </div>

      <div className="cfc-grid-2">

        {/* Interest Rate */}
        <Field label="Interest Rate">
          <div className="cfc-input-group">
            <input
              className="cfc-input"
              type="number"
              min={0}
              max={20}
              step={0.1}
              value={interestRate}
              onChange={e => onChange('interestRate', e.target.value === '' ? '' : Number(e.target.value))}
              style={{ paddingLeft: 10 }}
            />
            <span className="cfc-addon suffix">%</span>
          </div>
        </Field>

        {/* Tax Rate */}
        <Field 
          label="Tax Rate (Marginal)"
          tooltip="This is the income tax rate for your COMBINED family income"
        >
          <select
            className="cfc-select"
            value={taxRate}
            onChange={e => onChange('taxRate', parseFloat(e.target.value))}
          >
            {TAX_RATES.map(r => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </Field>

        {/* Deposit Amount */}
        <Field
          label="Deposit Amount"
          note={
            depositPct != null
              ? `${depositPct}% of purchase price`
              : 'Cash from savings'
          }
        >
          <MoneyInput
            value={depositAmount}
            onChange={v => onChange('depositAmount', v)}
          />
        </Field>

        {/* Equity Used */}
        <Field
          label="Equity Used"
          note="Equity from existing property"
        >
          <MoneyInput
            value={equityUsed}
            onChange={v => onChange('equityUsed', v)}
          />
        </Field>

        {/* LVR — readonly */}
        <Field label="LVR (Loan-to-Value Ratio)">
          <ReadonlyPill value={lvrDisplay} />
        </Field>

        {/* LMI Premium */}
        <Field
          label="LMI Premium"
          note={lmiWaived ? 'Waived — not added to loan' : 'Added to loan amount'}
        >
          <MoneyInput
            value={lmiOverride !== '' ? lmiOverride : (lmiResult?.lmi ?? 0)}
            placeholder="Auto-calculated"
            disabled={lmiWaived}
            onChange={v => onChange('lmiOverride', v === 0 ? '' : v)}
          />
        </Field>

        {/* LMI Waived — full width */}
        <Field full label="LMI Waiver">
          <label className="cfc-checkbox-row">
            <input
              type="checkbox"
              checked={lmiWaived}
              onChange={e => onChange('lmiWaived', e.target.checked)}
            />
            <span className="cfc-checkbox-label">
              LMI Waived (e.g. bank employee, medical professional, &gt;20% deposit)
            </span>
          </label>
        </Field>

        {/* LMI tier pills — full width */}
        <Field full label="LMI Tier">
          <div className="cfc-lmi-pills">
            <div className={`cfc-lmi-pill${activeTier === 1 ? ' active' : ''}`}>
              No LMI<br />
              <span style={{ fontWeight: 600, fontSize: 9 }}>≤ 80% LVR</span>
            </div>
            <div className={`cfc-lmi-pill${activeTier === 2 ? ' active' : ''}`}>
              Standard<br />
              <span style={{ fontWeight: 600, fontSize: 9 }}>80 – 90% LVR</span>
            </div>
            <div className={`cfc-lmi-pill${activeTier === 3 ? ' active' : ''}`}>
              High<br />
              <span style={{ fontWeight: 600, fontSize: 9 }}>&gt; 90% LVR</span>
            </div>
          </div>
        </Field>

        {/* Loan breakdown panel — full width */}
        {loanBreakdown && (
          <Field full label="Loan Breakdown">
            <div className="cfc-breakdown">
              <div className="cfc-breakdown-row">
                <span className="cfc-breakdown-lbl">Purchase Price</span>
                <span className="cfc-breakdown-val">{fmt(loanBreakdown.purchasePrice)}</span>
              </div>
              <div className="cfc-breakdown-row">
                <span className="cfc-breakdown-lbl">Cash Deposit</span>
                <span className="cfc-breakdown-val">− {fmt(loanBreakdown.depositAmount)}</span>
              </div>
              <div className="cfc-breakdown-row">
                <span className="cfc-breakdown-lbl">Equity Used</span>
                <span className="cfc-breakdown-val">+ {fmt(loanBreakdown.equityUsed)}</span>
              </div>
              <div className="cfc-breakdown-row">
                <span className="cfc-breakdown-lbl">LMI Premium</span>
                <span className="cfc-breakdown-val">+ {fmt(loanBreakdown.lmiPremium)}</span>
              </div>
              <div className="cfc-breakdown-row">
                <span className="cfc-breakdown-lbl" style={{ fontWeight: 800, color: 'var(--calc-navy)' }}>
                  Total Loan Amount
                </span>
                <span className="cfc-breakdown-val teal">{fmt(loanBreakdown.totalLoan)}</span>
              </div>
            </div>
          </Field>
        )}

      </div>
    </div>
  );
};

export default FinanceDetails;
