import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #0c0e22 0%, #17124a 45%, #0e1c2e 100%)',
      }}
    >
      {/* Ambient glow — top left */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: '-10%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          maxWidth: '500px',
          maxHeight: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,70,229,0.22) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Ambient glow — bottom right */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          maxWidth: '400px',
          maxHeight: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center w-full max-w-sm sm:max-w-md md:max-w-lg">

        {/* Genre label */}
        <p
          className="tracking-[0.38em] mb-8"
          style={{ color: 'rgba(165,160,220,0.5)', fontSize: '11px', fontFamily: 'sans-serif' }}
        >
          BOYS LOVE CHAT NOVEL
        </p>

        {/* Decorative rule */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div
            className="h-px flex-1"
            style={{
              maxWidth: '72px',
              background: 'linear-gradient(to right, transparent, rgba(139,130,230,0.35))',
            }}
          />
          <span style={{ color: 'rgba(139,130,230,0.4)', fontSize: '13px', lineHeight: 1 }}>
            ✦
          </span>
          <div
            className="h-px flex-1"
            style={{
              maxWidth: '72px',
              background: 'linear-gradient(to left, transparent, rgba(139,130,230,0.35))',
            }}
          />
        </div>

        {/* Title */}
        <h1
          className="leading-tight mb-4"
          style={{
            color: '#f1eff8',
            fontSize: 'clamp(30px, 7.5vw, 46px)',
            fontWeight: 300,
            letterSpacing: '0.06em',
            textShadow: '0 0 60px rgba(139,130,230,0.25)',
          }}
        >
          既読の先に、
          <br />
          君がいた
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 mb-1.5" style={{ fontSize: '14px' }}>
          葬儀社と花屋、静かな恋の物語
        </p>
        <p className="mb-10" style={{ color: 'rgba(148,163,184,0.5)', fontSize: '12px' }}>
          社会人BL ·&nbsp;全年齢向け
        </p>

        {/* Character cards */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-10">
          <CharCard
            initial="優"
            name="瀬川 優"
            age="25歳"
            role="葬儀社勤務"
            accentColor="#6ee7b7"
            glowColor="rgba(52,211,153,0.12)"
            borderColor="rgba(52,211,153,0.2)"
          />

          <span
            className="pb-4 flex-shrink-0"
            style={{ color: 'rgba(100,116,139,0.5)', fontSize: '18px' }}
          >
            ×
          </span>

          <CharCard
            initial="蒼"
            name="木下 蒼"
            age="27歳"
            role="花屋勤務"
            accentColor="#7dd3fc"
            glowColor="rgba(125,211,252,0.12)"
            borderColor="rgba(125,211,252,0.2)"
          />
        </div>

        {/* CTA Button */}
        <Link
          href="/episode/1"
          className="block w-full rounded-2xl text-center text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
          style={{
            padding: '18px 24px',
            background: 'linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)',
            boxShadow: '0 0 50px rgba(109,40,217,0.4), 0 8px 30px rgba(0,0,0,0.4)',
            fontSize: '16px',
            fontWeight: 300,
            letterSpacing: '0.1em',
          }}
        >
          第1話を読む
        </Link>

        <p className="mt-5" style={{ color: 'rgba(100,116,139,0.55)', fontSize: '11px' }}>
          ストーリーの進捗は自動保存されます
        </p>
      </div>

      {/* Vertical decorative lines */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(109,99,210,0.3))' }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to top, transparent, rgba(109,99,210,0.3))' }}
      />
    </div>
  );
}

function CharCard({
  initial,
  name,
  age,
  role,
  accentColor,
  glowColor,
  borderColor,
}: {
  initial: string;
  name: string;
  age: string;
  role: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
}) {
  return (
    <div
      className="flex-1 py-5 px-4 rounded-2xl text-center"
      style={{
        maxWidth: '155px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.09)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
        style={{
          background: glowColor,
          border: `1px solid ${borderColor}`,
        }}
      >
        <span
          style={{
            color: accentColor,
            fontSize: '17px',
            fontWeight: 500,
          }}
        >
          {initial}
        </span>
      </div>

      {/* Name */}
      <p className="text-slate-200 mb-1" style={{ fontSize: '13px', letterSpacing: '0.04em' }}>
        {name}
      </p>

      {/* Age */}
      <p style={{ color: 'rgba(148,163,184,0.6)', fontSize: '11px' }}>{age}</p>

      {/* Role */}
      <p style={{ color: 'rgba(148,163,184,0.45)', fontSize: '11px' }}>{role}</p>
    </div>
  );
}
