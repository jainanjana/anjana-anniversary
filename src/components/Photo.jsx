import { useState } from 'react';
import { asset } from '../utils/asset';

// Shows the photo. If the file is missing, shows a soft placeholder instead of a broken image.
export default function Photo({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`photo photo-fallback ${className}`} aria-hidden="true">
        <span>{src.split('/').pop()}</span>
      </div>
    );
  }

  return (
    <img
      className={`photo ${className}`}
      src={asset(src)}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
