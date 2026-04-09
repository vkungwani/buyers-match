import React from 'react';
import TiltCard from './TiltCard';

const stateEmoji = (state: string) => {
  switch (state?.toUpperCase()) {
    case 'VIC': return '🏢';
    case 'NSW': return '🌆';
    case 'QLD': return '🏖️';
    case 'WA':  return '🌴';
    case 'SA':  return '🌇';
    case 'TAS': return '🏔️';
    case 'NT':  return '🌵';
    case 'ACT': return '🏛️';
    default:    return '🏡';
  }
};

const saleTypeColor = (type: string) => {
  switch (type?.toLowerCase()) {
    case 'auction':      return { bg: 'rgba(212,168,67,.12)',  text: '#8A6A10', dot: '#D4A843' };
    case 'private sale': return { bg: 'rgba(42,191,191,.12)',  text: '#1E9898', dot: '#2ABFBF' };
    case 'off market':   return { bg: 'rgba(107,63,160,.12)',  text: '#6B3FA0', dot: '#9B6FD0' };
    default:             return { bg: 'rgba(42,191,191,.12)',  text: '#1E9898', dot: '#2ABFBF' };
  }
};

const formatCurrency = (val: number) =>
  '$' + val.toLocaleString('en-AU');

interface SuccessStory {
  state: string;
  purchaseDate: string;
  purchasePrice: number;
  currentPrice: number;
  currentPriceAsAt: string;
  rentalYield: number | null;
  saleType: string;
}

interface CaseStudyCardProps {
  story: SuccessStory;
  className?: string;
  style?: React.CSSProperties;
  animationProps?: any;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ story, className, style, animationProps }) => {
  const typeColor  = saleTypeColor(story.saleType);
  const emoji      = stateEmoji(story.state);
  const growthAbs  = story.currentPrice - story.purchasePrice;
  const growthPct  = ((growthAbs / story.purchasePrice) * 100).toFixed(1);

  return (
    <TiltCard
      {...animationProps}
      className={`group relative rounded-[22px] overflow-hidden bg-white flex flex-col h-full transition-all duration-500 hover:-translate-y-2 ${className || ''}`}
      style={{
        border: '1px solid rgba(0,0,0,.07)',
        boxShadow: '0 4px 24px rgba(27,42,74,.06)',
        ...style,
      }}
    >
      {/* Teal top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: 'linear-gradient(90deg, #2ABFBF, #1E9898)' }}
      />

      {/* ── HEADER ── */}
      <div
        className="relative px-5 py-5 flex items-center justify-between gap-3 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #22345A 100%)' }}
      >
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none" style={{ background: 'rgba(42,191,191,.06)' }} />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full pointer-events-none" style={{ background: 'rgba(42,191,191,.04)' }} />

        {/* State */}
        <div className="flex items-center gap-3 relative z-10 min-w-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: 'rgba(42,191,191,.12)', border: '1px solid rgba(42,191,191,.25)' }}
          >
            {emoji}
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '17px',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}
          >
            {story.state}
          </div>
        </div>

        {/* Sale type badge */}
        <div
          className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex-shrink-0"
          style={{ background: typeColor.bg, color: typeColor.text, border: `1px solid ${typeColor.dot}40` }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: typeColor.dot }} />
          {story.saleType}
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 pt-4 pb-5 flex-grow flex flex-col">

        {/* Purchase Price & Current Value */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {/* Purchase Price */}
          <div
            className="rounded-xl p-3 transition-all duration-300"
            style={{ background: '#F7F5F0', border: '1px solid transparent' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(42,191,191,.2)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
          >
            <div
              className="leading-none mb-1"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '15px',
                fontWeight: 900,
                color: '#1B2A4A',
              }}
            >
              {formatCurrency(story.purchasePrice)}
            </div>
            <div className="text-[9.5px] font-bold uppercase tracking-[.08em]" style={{ color: '#A0ABBB' }}>
              Purchase Price
            </div>
            <div className="text-[9px] font-medium mt-0.5" style={{ color: '#C0CBDB' }}>
              {story.purchaseDate}
            </div>
          </div>

          {/* Current Value */}
          <div
            className="rounded-xl p-3 transition-all duration-300"
            style={{ background: '#F7F5F0', border: '1px solid transparent' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(42,191,191,.2)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
          >
            <div
              className="leading-none mb-1"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '15px',
                fontWeight: 900,
                color: '#1C8A50',
              }}
            >
              {formatCurrency(story.currentPrice)}
            </div>
            <div className="text-[9.5px] font-bold uppercase tracking-[.08em]" style={{ color: '#A0ABBB' }}>
              Current Value
            </div>
            <div className="text-[9px] font-medium mt-0.5" style={{ color: '#C0CBDB' }}>
              as at {story.currentPriceAsAt}
            </div>
          </div>
        </div>

        {/* Capital Growth */}
        <div
          className="rounded-xl p-3 mb-3 flex items-center justify-between transition-all duration-300"
          style={{ background: 'rgba(28,138,80,.06)', border: '1px solid rgba(28,138,80,.12)' }}
        >
          <div>
            <div className="text-[9.5px] font-bold uppercase tracking-[.08em] mb-0.5" style={{ color: '#A0ABBB' }}>
              Capital Growth
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '16px',
                fontWeight: 900,
                color: '#1C8A50',
              }}
            >
              +{formatCurrency(growthAbs)}
            </div>
          </div>
          <div
            className="px-3 py-1.5 rounded-full text-[13px] font-black"
            style={{ background: 'rgba(28,138,80,.1)', color: '#1C8A50' }}
          >
            +{growthPct}%
          </div>
        </div>

        {/* Rental Yield */}
        <div
          className="rounded-xl p-3 flex items-center justify-between mt-auto transition-all duration-300"
          style={{ background: '#F7F5F0', border: '1px solid transparent' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(42,191,191,.2)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
        >
          <div className="text-[9.5px] font-bold uppercase tracking-[.08em]" style={{ color: '#A0ABBB' }}>
            Rental Yield
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '16px',
              fontWeight: 900,
              color: story.rentalYield ? '#1E9898' : '#C0CBDB',
            }}
          >
            {story.rentalYield ? `${story.rentalYield}%` : '—'}
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export default CaseStudyCard;
