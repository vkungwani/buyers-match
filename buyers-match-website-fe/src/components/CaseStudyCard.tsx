import React from 'react';
import TiltCard from './TiltCard';

const locationEmoji = (location) => {
  if (location.includes('Brisbane')) return '🏙️';
  if (location.includes('Gold Coast')) return '🏖️';
  if (location.includes('Melbourne')) return '🏢';
  if (location.includes('Sydney')) return '🌆';
  if (location.includes('Adelaide')) return '🌇';
  if (location.includes('Perth')) return '🌴';
  return '🏡';
};

const purchaseTypeColor = (type) => {
  switch (type?.toLowerCase()) {
    case 'investment':       return { bg: 'rgba(42,191,191,.12)',  text: '#1E9898', dot: '#2ABFBF' };
    case 'home buyer':       return { bg: 'rgba(212,168,67,.12)',  text: '#8A6A10', dot: '#D4A843' };
    case 'first home buyer': return { bg: 'rgba(28,138,80,.12)',   text: '#1C6A40', dot: '#1C8A50' };
    case 'smsf':             return { bg: 'rgba(107,63,160,.12)',  text: '#6B3FA0', dot: '#9B6FD0' };
    default:                 return { bg: 'rgba(42,191,191,.12)',  text: '#1E9898', dot: '#2ABFBF' };
  }
};

const getMetrics = (story) => [
  { value: story.growth18mo,  label: 'Growth 18mo',  color: '#1C8A50' },
  { value: story.rentalYield, label: 'Rental Yield', color: '#1E9898' },
  { value: story.belowAsking, label: 'Below Asking', color: '#1B2A4A' },
  { value: story.vacancyRate, label: 'Vacancy Rate', color: '#1E9898' },
];

interface SuccessStory {
  location: string;
  purchaseType: string;
  desc: string;
  growth18mo: string;
  rentalYield: string;
  belowAsking: string;
  vacancyRate: string;
  daysSecured: number;
}

interface CaseStudyCardProps {
  story: SuccessStory;
  className?: string;
  style?: React.CSSProperties;
  animationProps?: any;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ story, className, style, animationProps }) => {
  const typeColor     = purchaseTypeColor(story.purchaseType);
  const emoji         = locationEmoji(story.location);

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
      {/* Teal top accent bar slides in on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: 'linear-gradient(90deg, #2ABFBF, #1E9898)' }}
      />

      {/* ── HEADER ── */}
      <div
        className="relative px-5 py-5 flex items-center justify-between gap-3 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #22345A 100%)' }}
      >
        {/* Decorative bg circles */}
        <div
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
          style={{ background: 'rgba(42,191,191,.06)' }}
        />
        <div
          className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full pointer-events-none"
          style={{ background: 'rgba(42,191,191,.04)' }}
        />

        {/* Location block */}
        <div className="flex items-center gap-3 relative z-10 min-w-0">
          {/* Emoji icon box */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{
              background: 'rgba(42,191,191,.12)',
              border: '1px solid rgba(42,191,191,.25)',
            }}
          >
            {emoji}
          </div>

          {/* Location name */}
          <div
            className="min-w-0"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '17px',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}
          >
            {story.location}
          </div>
        </div>

        {/* Purchase type badge */}
        <div
          className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex-shrink-0"
          style={{
            background: typeColor.bg,
            color: typeColor.text,
            border: `1px solid ${typeColor.dot}40`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: typeColor.dot }}
          />
          {story.purchaseType}
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 pt-4 pb-5 flex-grow flex flex-col">

        {/* desc */}
        <div
          className="mb-4 pb-4"
          style={{ borderBottom: '1px solid rgba(0,0,0,.06)' }}
        >
          <div
            className="text-[12.5px] font-medium leading-relaxed"
            style={{ color: '#5A6778' }}
          >
            {story.desc || 'Off-market acquisition'}
          </div>
        </div>

        {/* ── METRICS 2x2 ── */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {getMetrics(story).map((m, i) => (
            <div
              key={i}
              className="rounded-xl p-3 transition-all duration-300"
              style={{
                background: '#F7F5F0',
                border: '1px solid transparent',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(42,191,191,.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
            >
              <div
                className="leading-none mb-1"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '21px',
                  fontWeight: 900,
                  color: m.color,
                }}
              >
                {m.value}
              </div>
              <div
                className="text-[9.5px] font-bold uppercase tracking-[.08em]"
                style={{ color: '#A0ABBB' }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <div
          className="mt-4 pt-3.5 flex items-center justify-between"
          style={{ borderTop: '1px solid rgba(0,0,0,.06)' }}
        >
          {/* Days secured */}
          <div
            className="flex items-center gap-2 text-[11.5px] font-semibold"
            style={{ color: '#8A97A8' }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(42,191,191,.1)' }}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#2ABFBF"
                strokeWidth="2.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            Secured in{' '}
            <span style={{ fontWeight: 900, color: '#1B2A4A' }}>
              {story.daysSecured} days
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export default CaseStudyCard;