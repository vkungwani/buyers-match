import React from "react";
import { STATES, BUILD_YEARS, BUYER_TYPES } from "../data/defaults";
import "../styles/calculator.css";

const fmt = (n) => "$" + Math.round(n).toLocaleString("en-AU");

const HomeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--calc-teal)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

// ── Shared micro-components ───────────────────────────────────────────────────

const MoneyInput = ({ value, onChange, placeholder, hasError }) => (
  <div className="cfc-input-group" style={hasError ? { borderColor: '#e53e3e', boxShadow: '0 0 0 2px rgba(229,62,62,0.15)' } : {}}>
    <span className="cfc-addon">$</span>
    <input
      className="cfc-input"
      type="number"
      min={0}
      step={1000}
      value={value}
      placeholder={placeholder ?? ''}
      onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
    />
  </div>
);

const Field = ({ label, note, full, required, errorMsg, children }) => (
  <div className={`cfc-field${full ? " full" : ""}`}>
    <div className="cfc-label">
      {label}
      {required && <span style={{ color: '#e53e3e', marginLeft: 3 }}>*</span>}
    </div>
    {children}
    {errorMsg
      ? <div className="cfc-note" style={{ color: '#e53e3e', fontWeight: 600 }}>{errorMsg}</div>
      : note && <div className="cfc-note">{note}</div>
    }
  </div>
);

// ── PropertyDetails ───────────────────────────────────────────────────────────

const PropertyDetails = ({ inputs, onChange, stampDuty }) => {
  const {
    state,
    purchasePrice,
    buildYear,
    minWeeklyRent,
    maxWeeklyRent,
    homeInsurance,
    buyerType,
  } = inputs;

  const formStarted = purchasePrice !== "" && purchasePrice > 0;
  const minRentEmpty = minWeeklyRent === "" || minWeeklyRent === 0;
  const showMinRentError = formStarted && minRentEmpty;

  const depositPct =
    purchasePrice > 0
      ? ((inputs.depositAmount / purchasePrice) * 100).toFixed(1)
      : "0.0";

  return (
    <div className="cfc-card-primary">
      {/* Header */}
      <div className="cfc-header-primary" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="cfc-header-primary-icon">
          <HomeIcon />
        </div>
        <div style={{ flex: 1 }}>
          <div className="cfc-header-primary-title">Property Details</div>
          <div className="cfc-header-primary-sub">
            Location, price &amp; rental income
          </div>
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

      {/* 2-column grid */}
      <div className="cfc-grid-2">
        {/* State */}
        <Field label="State">
          <select
            className="cfc-select"
            value={state}
            onChange={(e) => onChange("state", e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            {STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        {/* Purchase Price */}
        <Field label="Purchase Price">
          <MoneyInput
            value={purchasePrice}
            onChange={(v) => onChange("purchasePrice", v)}
          />
        </Field>

        {/* Build Year */}
        <Field label="Build Year">
          <select
            className="cfc-select"
            value={buildYear}
            onChange={(e) => onChange("buildYear", e.target.value)}
          >
            <option value="" disabled>Select</option>
            {BUILD_YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </Field>

        {/* Home Insurance */}
        <Field label="Home Insurance (annual)">
          <MoneyInput
            value={homeInsurance}
            onChange={(v) => onChange("homeInsurance", v)}
          />
        </Field>

        {/* Min Weekly Rent */}
        <Field
          label="Min Weekly Rent"
          required
          note={!minRentEmpty ? `Annual min: ${fmt(minWeeklyRent * 52)}` : undefined}
          errorMsg={showMinRentError ? "Required — enter a weekly rent amount" : undefined}
        >
          <MoneyInput
            value={minWeeklyRent}
            onChange={(v) => onChange("minWeeklyRent", v)}
            hasError={showMinRentError}
          />
        </Field>

        {/* Max Weekly Rent */}
        <Field
          label="Max Weekly Rent"
          note={`Annual max: ${fmt((maxWeeklyRent || 0) * 52)}`}
        >
          <MoneyInput
            value={maxWeeklyRent}
            onChange={(v) => onChange("maxWeeklyRent", v)}
          />
        </Field>

        {/* Buyer Type — full width */}
        <Field label="Buyer Type" full>
          <div className="cfc-toggle-group">
            {BUYER_TYPES.map((bt) => (
              <button
                key={bt}
                type="button"
                className={`cfc-toggle-btn${buyerType === bt ? " active" : ""}`}
                onClick={() => onChange("buyerType", bt)}
              >
                {bt}
              </button>
            ))}
          </div>
        </Field>

        {/* Stamp Duty — full width, readonly */}
        <Field label="Stamp Duty" full>
          {stampDuty ? (
            <div className="cfc-stamp-display">
              <span className="cfc-stamp-amount">{fmt(stampDuty.amount)}</span>
              {stampDuty.note ? (
                <span className="cfc-stamp-note">{stampDuty.note}</span>
              ) : (
                <span style={{ fontSize: 11, color: "var(--calc-text-hint)" }}>
                  Standard rate — {state}
                </span>
              )}
            </div>
          ) : (
            <div className="cfc-stamp-display">
              <span className="cfc-stamp-amount">$0</span>
            </div>
          )}
        </Field>
      </div>
    </div>
  );
};

export default PropertyDetails;
