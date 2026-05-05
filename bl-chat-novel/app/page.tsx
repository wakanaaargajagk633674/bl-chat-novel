import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ backgroundColor: '#0a0a18' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(80,60,120,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(40,80,60,0.1) 0%, transparent 60%)',
        }}
      />

      {/* Decorative top line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, #3a3060)' }}
        aria-hidden="true"
      />

      <div className="relative text-center max-w-xs w-full">
        {/* Genre label */}
        <p
          className="tracking-[0.35em] mb-10"
          style={{ color: '#4a4a70', fontSize: '11px' }}
        >
          BOYS LOVE CHAT NOVEL
        </p>

        {/* Flower icon */}
        <div className="mb-6" style={{ fontSize: '36px', lineHeight: 1 }}>
          🌿
        </div>

        {/* Title */}
        <h1
          className="leading-snug mb-3"
          style={{ color: '#e0dce8', fontSize: '26px', fontWeight: 300, letterSpacing: '0.05em' }}
        >
          既読の先に、
          <br />
          君がいた
        </h1>

        <p
          className="mb-10"
          style={{ color: '#5a5a7a', fontSize: '13px' }}
        >
          葬儀社と花屋、静かな恋の物語
        </p>

        {/* Characters */}
        <div
          className="flex justify-center gap-8 mb-10 py-4 rounded-xl"
          style={{ backgroundColor: '#10101e', border: '1px solid #1e1e30' }}
        >
          <div className="text-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1"
              style={{ backgroundColor: '#1e3430' }}
            >
              <span style={{ color: '#a0c8a0', fontSize: '14px' }}>優</span>
            </div>
            <p style={{ color: '#7a7a9a', fontSize: '11px' }}>瀬川 優</p>
            <p style={{ color: '#4a4a6a', fontSize: '10px' }}>葬儀社勤務</p>
          </div>
          <div
            className="flex items-center"
            style={{ color: '#2a2a45', fontSize: '20px' }}
          >
            ×
          </div>
          <div className="text-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1"
              style={{ backgroundColor: '#1a2a3d' }}
            >
              <span style={{ color: '#8ab0d8', fontSize: '14px' }}>蒼</span>
            </div>
            <p style={{ color: '#7a7a9a', fontSize: '11px' }}>木下 蒼</p>
            <p style={{ color: '#4a4a6a', fontSize: '10px' }}>花屋勤務</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/episode/1"
          className="block w-full py-4 rounded-2xl text-center transition-all active:scale-[0.97]"
          style={{
            backgroundColor: '#1e1e38',
            border: '1px solid #3a3a60',
            color: '#c8c0e0',
            fontSize: '15px',
            letterSpacing: '0.05em',
          }}
        >
          第1話を読む
        </Link>

        <p
          className="mt-4"
          style={{ color: '#3a3a55', fontSize: '11px' }}
        >
          全年齢向け
        </p>
      </div>

      {/* Decorative bottom line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-px"
        style={{ background: 'linear-gradient(to top, transparent, #3a3060)' }}
        aria-hidden="true"
      />
    </div>
  );
}
