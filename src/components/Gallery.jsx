import { useRef, useEffect, useState } from 'react';
import Photo from './Photo';
import { asset } from '../utils/asset';

export default function Gallery({ data, videos = [] }) {
  const [current, setCurrent] = useState(null);
  const touchX = useRef(null);
  const total = data.items.length;

  const next = () => setCurrent((i) => (i + 1) % total);
  const prev = () => setCurrent((i) => (i - 1 + total) % total);

  // Keyboard and scroll lock while the lightbox is open
  useEffect(() => {
    if (current === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setCurrent(null);
      if (e.key === 'ArrowRight') setCurrent((i) => (i + 1) % total);
      if (e.key === 'ArrowLeft') setCurrent((i) => (i - 1 + total) % total);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [current, total]);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) (dx < 0 ? next() : prev());
  };

  const active = current !== null ? data.items[current] : null;

  return (
    <div className="gallery-wrap">
      <h2 className="section-title reveal">{data.heading}</h2>

      <div className="gallery">
        {data.items.map((item, i) => (
          <div className="reveal" key={item.src}>
            <button
              className={`card card-${item.style}`}
              onClick={() => setCurrent(i)}
              aria-label={`Open photo: ${item.caption}`}
            >
              <Photo src={item.src} alt={item.caption} />
              <span className="caption">{item.caption}</span>
            </button>
          </div>
        ))}
      </div>

      {videos.length > 0 && (
        <div className="video-grid">
          {videos.map((v) => (
            <figure key={v.src} className="reveal">
              <video controls preload="none" playsInline src={asset(v.src)} />
              <figcaption className="caption">{v.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setCurrent(null)}>
          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Photo src={active.src} alt={active.caption} className="lightbox-photo" />
            <p className="caption lightbox-caption">{active.caption}</p>
          </div>
          <button
            className="lb-btn lb-prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>
          <button
            className="lb-btn lb-next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </button>
          <button
            className="lb-btn lb-close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(null);
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
