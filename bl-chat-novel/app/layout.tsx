import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '既読の先に、君がいた',
  description: '葬儀社と花屋、静かな恋の物語。スマホ向けBLチャットノベル。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full" style={{ backgroundColor: '#0a0a18' }}>
        {children}
      </body>
    </html>
  );
}
