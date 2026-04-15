import React from "react";
import {
  STATE_PROPERTY_MANAGEMENT,
  STATE_COUNCIL_RATES,
  BUILD_YEAR_DEPRECIATION,
} from "../data/defaults";
import "../styles/calculator.css";

const ExpenseIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(255,255,255,0.65)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

// ── Shared micro-components ───────────────────────────────────────────────────

const MoneyInput = ({ value, onChange, readonly }) => (
  <div className={`cfc-input-group${readonly ? " readonly" : ""}`}>
    <span className="cfc-addon">$</span>
    <input
      className={`cfc-input${readonly ? " readonly" : ""}`}
      type="number"
      min={0}
      step={100}
      value={value}
      readOnly={readonly}
      onChange={(e) => !readonly && onChange(e.target.value === '' ? '' : Number(e.target.value))}
    />
  </div>
);

const PctInput = ({ value, onChange }) => (
  <div className="cfc-input-group">
    <input
      className="cfc-input"
      type="number"
      min={0}
      max={25}
      step={0.5}
      value={value}
      onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}
      style={{ paddingLeft: 10 }}
    />
    <span className="cfc-addon suffix">%</span>
  </div>
);

const Field = ({ label, note, noteClass, children }) => (
  <div className="cfc-field">
    <div className="cfc-label">{label}</div>
    {children}
    {note && (
      <div className={`cfc-note${noteClass ? " " + noteClass : ""}`}>
        {note}
      </div>
    )}
  </div>
);

// ── AnnualExpenses ────────────────────────────────────────────────────────────

const AnnualExpenses = ({ inputs, onChange }) => {
  const {
    state,
    buildYear,
    waterRates,
    landlordInsurance,
    maintenance,
    bankCharges,
    strata,
    landTax,
    propMgtPct,
    councilRates, // Add these here
  } = inputs;

  // Live state defaults for display in hints
  const stateDefaultPropMgt = STATE_PROPERTY_MANAGEMENT[state] ?? 8.8;
  const stateDefaultCouncil = STATE_COUNCIL_RATES[state] ?? 1800;
  const buildYearDepreciation = BUILD_YEAR_DEPRECIATION[buildYear] ?? 0;

  return (
    <div className="cfc-card-secondary">
      {/* Header */}
      <div className="cfc-header-secondary">
        <div className="cfc-header-secondary-icon">
          <ExpenseIcon />
        </div>
        <div>
          <div className="cfc-header-secondary-title">Annual Expenses</div>
          <div className="cfc-header-secondary-sub">
            Auto-filled from state — editable
          </div>
        </div>
      </div>

      {/* 3-column grid */}
      <div className="cfc-grid-3">
        {/* Property Management % — state default, editable via propMgtPct field */}
        <Field
          label="Prop. Mgmt"
          note={`${stateDefaultPropMgt}% default for ${state || 'selected state'} (incl. 10% gst)`}
          noteClass="teal"
        >
          <PctInput
            value={propMgtPct}
            onChange={(v) => onChange("propMgtPct", v)}
          />
        </Field>

        {/* Council Rates — state default, editable */}
        <Field
          label="Council Rates"
          note={`$${stateDefaultCouncil.toLocaleString("en-AU")} default for ${state || 'selected state'}`}
          noteClass="teal"
        >
          <MoneyInput
            value={councilRates}
            onChange={(v) => onChange("councilRates", v)}
          />
        </Field>

        {/* Water Rates */}
        <Field label="Water Rates">
          <MoneyInput
            value={waterRates}
            onChange={(v) => onChange("waterRates", v)}
          />
        </Field>

        {/* Landlord Insurance */}
        <Field label="Landlord Insurance">
          <MoneyInput
            value={landlordInsurance}
            onChange={(v) => onChange("landlordInsurance", v)}
          />
        </Field>

        {/* Maintenance */}
        <Field label="Maintenance">
          <MoneyInput
            value={maintenance}
            onChange={(v) => onChange("maintenance", v)}
          />
        </Field>

        {/* Bank Charges */}
        <Field label="Bank Charges">
          <MoneyInput
            value={bankCharges}
            onChange={(v) => onChange("bankCharges", v)}
          />
        </Field>

        {/* Strata */}
        <Field label="Strata / Body Corp">
          <MoneyInput value={strata} onChange={(v) => onChange("strata", v)} />
        </Field>

        {/* Land Tax */}
        <Field label="Land Tax">
          <MoneyInput
            value={landTax}
            onChange={(v) => onChange("landTax", v)}
          />
        </Field>

        {/* Depreciation — readonly, driven by build year */}
        <Field
          label="Depreciation / yr"
          note={`${buildYear} build`}
          noteClass="teal"
        >
          <MoneyInput value={buildYearDepreciation} readonly />
        </Field>
      </div>
    </div>
  );
};

export default AnnualExpenses;
