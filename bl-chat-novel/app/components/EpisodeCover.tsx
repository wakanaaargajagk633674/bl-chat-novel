'use client';

import OptionalImage from './OptionalImage';

interface Props {
  src: string;
  title: string;
  subtitle?: string;
}

function CoverPlaceholder({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div
      className="flex h-full flex-col items-center justify-center px-5 text-center"
      style={{
        background: 'linear-gradient(160deg, #0d1030 0%, #1a1060 50%, #0d1a30 100%)',
      }}
    >
      <p
        style={{
          color: 'rgba(165,160,220,0.55)',
          fontSize: '11px',
          letterSpacing: '0.28em',
          marginBottom: '10px',
        }}
      >
        EPISODE ILLUSTRATION
      </p>
      <p
        style={{
          color: '#c8c4e0',
          fontSize: '18px',
          fontWeight: 300,
          letterSpacing: '0.06em',
        }}
      >
        {title}
      </p>
      {subtitle && (
        <p style={{ color: 'rgba(148,140,200,0.62)', fontSize: '12px', marginTop: '6px' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function EpisodeCover({ src, title, subtitle }: Props) {
  return (
    <div
      className="relative mb-2 overflow-hidden rounded-2xl"
      style={{
        minHeight: '180px',
        aspectRatio: '16 / 9',
        border: '1px solid rgba(139,130,230,0.2)',
      }}
    >
      <OptionalImage
        src={src}
        alt={`${title} 扉絵`}
        fill
        objectFit="cover"
        priority
        sizes="(max-width: 480px) 100vw, 480px"
        fallback={<CoverPlaceholder title={title} subtitle={subtitle} />}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 42%, rgba(12,14,34,0.86) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div className="absolute bottom-4 left-4 right-4" style={{ pointerEvents: 'none' }}>
        <p
          style={{
            color: 'rgba(244,241,255,0.94)',
            fontSize: '16px',
            fontWeight: 300,
            letterSpacing: '0.05em',
          }}
        >
          {title}
        </p>
        {subtitle && (
          <p style={{ color: 'rgba(210,206,235,0.72)', fontSize: '12px', marginTop: '2px' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
