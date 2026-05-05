import Link from 'next/link';
import OptionalImage from './components/OptionalImage';

function HeroPlaceholder() {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        background: 'linear-gradient(160deg, #0d1030 0%, #1a1060 55%, #0a1828 100%)',
      }}
    >
      <span style={{ color: 'rgba(165,160,220,0.42)', fontSize: '11px', letterSpacing: '0.28em' }}>
        HERO ILLUSTRATION
      </span>
    </div>
  );
}

function PortraitPlaceholder({
  initial,
  accentColor,
  glowColor,
}: {
  initial: string;
  accentColor: string;
  glowColor: string;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center" style={{ background: glowColor }}>
      <span style={{ color: accentColor, fontSize: '30px', fontWeight: 300, opacity: 0.65 }}>
        {initial}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #0c0e22 0%, #17124a 45%, #0e1c2e 100%)',
      }}
    >
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

      <div className="relative z-10 text-center w-full max-w-sm sm:max-w-md md:max-w-lg">
        <div
          className="relative mb-7 overflow-hidden rounded-2xl"
          style={{
            aspectRatio: '16 / 9',
            minHeight: '180px',
            border: '1px solid rgba(109,99,210,0.22)',
            boxShadow: '0 0 60px rgba(79,70,229,0.18)',
          }}
        >
          <OptionalImage
            src="/images/hero.jpg"
            alt="既読の先に、君がいた メインビジュアル"
            fill
            objectFit="cover"
            priority
            sizes="(max-width: 640px) 100vw, 512px"
            fallback={<HeroPlaceholder />}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(12,14,34,0.02) 0%, rgba(12,14,34,0.45) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        <p
          className="tracking-[0.38em] mb-8"
          style={{ color: 'rgba(165,160,220,0.5)', fontSize: '11px', fontFamily: 'sans-serif' }}
        >
          BOYS LOVE CHAT NOVEL
        </p>

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

        <p className="text-slate-300 mb-1.5" style={{ fontSize: '14px' }}>
          葬儀社と花屋、静かな恋の物語
        </p>
        <p className="mb-9" style={{ color: 'rgba(148,163,184,0.5)', fontSize: '12px' }}>
          社会人BL ·&nbsp;全年齢向け
        </p>

        <div className="flex items-stretch justify-center gap-3 sm:gap-5 mb-10">
          <CharCard
            initial="優"
            name="瀬川 優"
            age="25歳"
            role="葬儀社勤務"
            accentColor="#6ee7b7"
            glowColor="rgba(52,211,153,0.12)"
            borderColor="rgba(52,211,153,0.2)"
            portraitSrc="/images/characters/tohru.png"
          />

          <span
            className="flex-shrink-0 self-center pb-6"
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
            portraitSrc="/images/characters/ren.png"
          />
        </div>

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
  portraitSrc,
}: {
  initial: string;
  name: string;
  age: string;
  role: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  portraitSrc: string;
}) {
  return (
    <div
      className="flex-1 overflow-hidden rounded-2xl text-center"
      style={{
        maxWidth: '155px',
        minWidth: 0,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.09)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="relative"
        style={{
          aspectRatio: '4 / 5',
          minHeight: '110px',
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        <OptionalImage
          src={portraitSrc}
          alt={`${name} 立ち絵`}
          fill
          objectFit="cover"
          sizes="155px"
          fallback={
            <PortraitPlaceholder
              initial={initial}
              accentColor={accentColor}
              glowColor={glowColor}
            />
          }
        />
      </div>

      <div className="px-3 py-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
          style={{ background: glowColor, border: `1px solid ${borderColor}` }}
        >
          <span style={{ color: accentColor, fontSize: '16px', fontWeight: 500 }}>
            {initial}
          </span>
        </div>
        <p className="text-slate-200 mb-1" style={{ fontSize: '13px', letterSpacing: '0.04em' }}>
          {name}
        </p>
        <p style={{ color: 'rgba(148,163,184,0.6)', fontSize: '11px' }}>{age}</p>
        <p style={{ color: 'rgba(148,163,184,0.45)', fontSize: '11px' }}>{role}</p>
      </div>
    </div>
  );
}
