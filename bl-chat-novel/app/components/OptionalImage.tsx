'use client';

import Image from 'next/image';
import { useState, type CSSProperties, type ReactNode } from 'react';

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
  objectFit?: 'cover' | 'contain';
  fallback: ReactNode;
  priority?: boolean;
  sizes?: string;
}

export default function OptionalImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  style,
  objectFit = 'cover',
  fallback,
  priority,
  sizes,
}: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) return <>{fallback}</>;

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      style={{ objectFit, ...style }}
      priority={priority}
      sizes={sizes}
      onError={() => setErrored(true)}
    />
  );
}
