import React, { useEffect, useState } from 'react';

// Built-in placeholder, so a missing image never depends on an external service
const DEFAULT_FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><rect width="400" height="250" fill="#f7ecea"/><path d="M170 140l25-30 20 22 15-16 30 34H150z" fill="#994545" opacity=".35"/><circle cx="180" cy="100" r="10" fill="#994545" opacity=".35"/></svg>'
  );

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc = DEFAULT_FALLBACK,
  alt,
  className = '',
  style = {},
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src?.trim() ? src : fallbackSrc);

  useEffect(() => {
    setImgSrc(src?.trim() ? src : fallbackSrc);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    // The tinted background shows while the image loads; the image paints over it
    <div style={{ position: 'relative', backgroundColor: '#f3eeeb', ...style }}>
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        loading="lazy"
        onError={handleError}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...style,
        }}
      />
    </div>
  );
};

export default ImageWithFallback;
