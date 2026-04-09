import React from 'react';

// ── Formatters ────────────────────────────────────────────────────────────────
const fmtAbs = n => '$' + Math.abs(Math.round(n)).toLocaleString('en-AU');
const fmtCf  = n => n < 0 ? `(${fmtAbs(n)})` : fmtAbs(n);
const fmtDep = n => `(${fmtAbs(n)})`; // depreciation always in brackets

// ── Colors (dark-background palette) ─────────────────────────────────────────
const C_POS     = '#4ADE80';
const C_NEG     = '#F87171';
const C_NEUTRAL = 'rgba(255,255,255,0.38)';
const C_TEAL    = '#2ABFBF';
const C_TEXT    = 'rgba(255,255,255,0.7)';

// ── CashflowTable ─────────────────────────────────────────────────────────────
const CashflowTable = ({ minBT, maxBT, minAT, maxAT, depreciation }) => {

  const rows = [
    {
      label:         'Before-tax cashflow (min rent)',
      vals:          [minBT / 52, minBT / 12, minBT],
      isDepreciation: false,
      highlight:     false,
    },
    {
      label:         'Before-tax cashflow (max rent)',
      vals:          [maxBT / 52, maxBT / 12, maxBT],
      isDepreciation: false,
      highlight:     false,
    },
    {
      label:         'Depreciation (non-cash)',
      vals:          [depreciation / 52, depreciation / 12, depreciation],
      isDepreciation: true,
      highlight:     false,
    },
    {
      label:         'After-tax cashflow (min rent)',
      vals:          [minAT / 52, minAT / 12, minAT],
      isDepreciation: false,
      highlight:     true,
    },
    {
      label:         'After-tax cashflow (max rent)',
      vals:          [maxAT / 52, maxAT / 12, maxAT],
      isDepreciation: false,
      highlight:     true,
    },
  ];

  const cellColor = (val, isDepreciation, highlight) => {
    if (isDepreciation) return C_NEUTRAL;
    if (highlight)      return val >= 0 ? C_POS : C_NEG;
    return val >= 0 ? C_TEXT : C_NEG;
  };

  return (
    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 360 }}>

        {/* Head */}
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {['Scenario', 'Weekly', 'Monthly', 'Yearly'].map((h, i) => (
              <th key={h} style={{
                padding: '9px 12px',
                fontSize: 9,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.3)',
                textAlign: i === 0 ? 'left' : 'right',
                background: 'rgba(255,255,255,0.025)',
                whiteSpace: 'nowrap',
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                background: row.highlight
                  ? 'rgba(42,191,191,0.08)'
                  : i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {/* Label cell */}
              <td style={{
                padding: '10px 12px',
                fontSize: 11.5,
                fontWeight:  row.highlight ? 800 : 600,
                color: row.highlight
                  ? C_TEAL
                  : row.isDepreciation
                  ? C_NEUTRAL
                  : 'rgba(255,255,255,0.65)',
                borderRight: '1px solid rgba(255,255,255,0.05)',
                lineHeight: 1.35,
              }}>
                {row.label}
              </td>

              {/* Value cells */}
              {row.vals.map((val, j) => (
                <td key={j} style={{
                  padding: '10px 12px',
                  textAlign: 'right',
                  fontSize: row.isDepreciation ? 11.5 : 12.5,
                  fontWeight: row.highlight ? 900 : 700,
                  fontFamily: row.isDepreciation
                    ? 'inherit'
                    : "'Playfair Display', Georgia, serif",
                  color: cellColor(val, row.isDepreciation, row.highlight),
                  whiteSpace: 'nowrap',
                }}>
                  {row.isDepreciation ? fmtDep(val) : fmtCf(val)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default CashflowTable;
