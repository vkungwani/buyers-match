import React from 'react';

// ── Tag config ────────────────────────────────────────────────────────────────
const TAGS = [
  { max: 2,        label: 'Very Low',      color: '#EF4444' },
  { max: 3,        label: 'Low',           color: '#F97316' },
  { max: 4,        label: 'Below Average', color: '#EAB308' },
  { max: 5,        label: 'Good',          color: '#84CC16' },
  { max: 6,        label: 'Strong',        color: '#22C55E' },
  { max: Infinity, label: 'Excellent',     color: '#16A34A' },
];

const getTag = (y) => TAGS.find(t => y < t.max) ?? TAGS[TAGS.length - 1];

// Ticks: yield value → bar position %
const TICKS = [
  { label: '1%',   pos: 0     },
  { label: '2%',   pos: 16.67 },
  { label: '3%',   pos: 33.33 },
  { label: '4%',   pos: 50    },
  { label: '5%',   pos: 66.67 },
  { label: '6%',   pos: 83.33 },
  { label: '7%+',  pos: 100   },
];

const BAR_GRADIENT =
  'linear-gradient(to right, #EF4444 0%, #F97316 17%, #EAB308 33%, #84CC16 50%, #22C55E 68%, #15803D 100%)';

// ── YieldMeter ────────────────────────────────────────────────────────────────
const YieldMeter = ({ minYield = 0, maxYield = 0 }) => {
  const midYield  = (minYield + maxYield) / 2;
  const tag       = getTag(midYield);
  const needlePos = Math.min(100, Math.max(0, (midYield - 1) / 6 * 100));
  const showRange = Math.abs(maxYield - minYield) > 0.01;

  return (
    <div style={{ padding: '18px 20px 16px' }}>

      {/* ── Large yield + tag ───────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: 18 }}>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 48,
          fontWeight: 900,
          color: tag.color,
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}>
          {midYield.toFixed(2)}%
        </div>

        {showRange && (
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 5, fontWeight: 500 }}>
            Range: {minYield.toFixed(2)}% – {maxYield.toFixed(2)}%
          </div>
        )}

        <div style={{ marginTop: 10 }}>
          <span style={{
            display: 'inline-block',
            background: tag.color + '22',
            color: tag.color,
            border: `1px solid ${tag.color}55`,
            borderRadius: 20,
            padding: '4px 16px',
            fontSize: 11.5,
            fontWeight: 800,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
          }}>
            {tag.label}
          </span>
        </div>
      </div>

      {/* ── Gradient bar + needle ───────────────────────────────────────── */}
      <div style={{ marginBottom: 32 }}>
        {/* Bar */}
        <div style={{
          height: 14,
          borderRadius: 7,
          background: BAR_GRADIENT,
          position: 'relative',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}>
          {/* Needle */}
          <div style={{
            position: 'absolute',
            left: `${needlePos}%`,
            top: -5,
            bottom: -5,
            width: 3,
            background: '#fff',
            borderRadius: 3,
            boxShadow: '0 0 0 2px rgba(255,255,255,0.3), 0 2px 10px rgba(0,0,0,0.5)',
            transform: 'translateX(-50%)',
            transition: 'left 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 2,
          }} />
        </div>

        {/* Tick labels */}
        <div style={{ position: 'relative', height: 18, marginTop: 7 }}>
          {TICKS.map(tick => (
            <div
              key={tick.label}
              style={{
                position: 'absolute',
                left: `${tick.pos}%`,
                transform: 'translateX(-50%)',
                fontSize: 9.5,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.3)',
                whiteSpace: 'nowrap',
                userSelect: 'none',
              }}
            >
              {tick.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── Zone pills ──────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{
          flex: 1, padding: '8px 6px', borderRadius: 10, textAlign: 'center',
          background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.22)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: '#EF4444', lineHeight: 1.3 }}>1–4%</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 600, marginTop: 2 }}>Low Yield</div>
        </div>
        <div style={{
          flex: 1, padding: '8px 6px', borderRadius: 10, textAlign: 'center',
          background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.22)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: '#EAB308', lineHeight: 1.3 }}>4–5%</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 600, marginTop: 2 }}>Good Yield</div>
        </div>
        <div style={{
          flex: 1.3, padding: '8px 8px', borderRadius: 10, textAlign: 'center',
          background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.22)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: '#22C55E', lineHeight: 1.3 }}>5–7%+</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontWeight: 600, marginTop: 2 }}>Strong → Excellent</div>
        </div>
      </div>

    </div>
  );
};

export default YieldMeter;
