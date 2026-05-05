'use client';

import { type CSSProperties } from 'react';
import { getCharacterImage } from '../lib/characterImages';
import OptionalImage from './OptionalImage';

interface Props {
  name: string;
  size?: number;
  accentColor?: string;
  bgColor?: string;
  borderColor?: string;
}

export default function CharacterAvatar({
  name,
  size = 36,
  accentColor = '#7ec8e8',
  bgColor = '#1a2e45',
  borderColor = '#2a4060',
}: Props) {
  const avatarChar = name.replace(/\s/g, '').slice(-1);
  const imageSrc = getCharacterImage(name);

  const containerStyle: CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const fallback = (
    <span style={{ color: accentColor, fontSize: Math.round(size * 0.39), fontWeight: 600 }}>
      {avatarChar}
    </span>
  );

  if (!imageSrc) return <div style={containerStyle}>{fallback}</div>;

  return (
    <div style={containerStyle}>
      <OptionalImage
        src={imageSrc}
        alt={name}
        fill
        objectFit="cover"
        sizes={`${size}px`}
        fallback={fallback}
      />
    </div>
  );
}
