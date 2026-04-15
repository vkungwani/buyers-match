import React from "react";
import "../styles/calculator.css";

const TagIcon = () => (
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
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

// ── Shared micro-components ───────────────────────────────────────────────────

const MoneyInput = ({ value, onChange }) => (
  <div className="cfc-input-group">
    <span className="cfc-addon">$</span>
    <input
      className="cfc-input"
      type="number"
      min={0}
      step={50}
      value={value}
      onChange={(e) =>
        onChange(e.target.value === "" ? "" : Number(e.target.value))
      }
    />
  </div>
);

const Field = ({ label, note, children }) => (
  <div className="cfc-field">
    <div className="cfc-label">{label}</div>
    {children}
    {note && <div className="cfc-note">{note}</div>}
  </div>
);

// ── PurchaseCosts ─────────────────────────────────────────────────────────────

const PurchaseCosts = ({ inputs, onChange }) => {
  const {
    conveyancing,
    buildingPest,
    depSchedule,
    compliance,
    settlementLegal,
  } = inputs;

  const total =
    (Number(conveyancing) || 0) +
    (Number(buildingPest) || 0) +
    (Number(depSchedule) || 0) +
    (Number(compliance) || 0) +
    (Number(settlementLegal) || 0);

  return (
    <div className="cfc-card-secondary">
      {/* Header */}
      <div className="cfc-header-secondary">
        <div className="cfc-header-secondary-icon">
          <TagIcon />
        </div>
        <div>
          <div className="cfc-header-secondary-title">
            One-Off Purchase Costs
          </div>
          <div className="cfc-header-secondary-sub">
            Excluded from loan — paid upfront
          </div>
        </div>
      </div>

      {/* 3-column grid */}
      <div className="cfc-grid-3">
        <Field label="Conveyancing" note="E.g. $1,700">
          <MoneyInput
            value={conveyancing}
            onChange={(v) => onChange("conveyancing", v)}
          />
        </Field>

        <Field label="Building &amp; Pest" note="E.g. $700">
          <MoneyInput
            value={buildingPest}
            onChange={(v) => onChange("buildingPest", v)}
          />
        </Field>

        <Field label="Depreciation Schedule" note="E.g. $550">
          <MoneyInput
            value={depSchedule}
            onChange={(v) => onChange("depSchedule", v)}
          />
        </Field>

        <Field label="Compliance Checks" note="E.g. $350">
          <MoneyInput
            value={compliance}
            onChange={(v) => onChange("compliance", v)}
          />
        </Field>

        <Field label="Settlement &amp; Legal" note="E.g. $400">
          <MoneyInput
            value={settlementLegal}
            onChange={(v) => onChange("settlementLegal", v)}
          />
        </Field>

        {/* Total — spans remaining space or sits as a dedicated full-width cell */}
        <div
          className="cfc-field"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <div className="cfc-label">Total Costs</div>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 20,
              fontWeight: 900,
              color: "var(--calc-navy)",
              lineHeight: 1,
            }}
          >
            ${total.toLocaleString("en-AU")}
          </div>
          <div className="cfc-note">Excl. stamp duty &amp; LMI</div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCosts;
