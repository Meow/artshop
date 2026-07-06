import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

interface LightboxImageData {
  src: string;
  alt: string;
  caption?: ReactNode;
  originRect?: DOMRect;
}

interface LightboxContextValue {
  open: (image: LightboxImageData) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within a LightboxProvider');
  return ctx;
}

export function LightboxImage({
  src,
  alt,
  caption,
  className,
  loading,
}: LightboxImageData & { className?: string; loading?: 'lazy' | 'eager' }) {
  const { open } = useLightbox();
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const activate = () => open({ src, alt, caption, originRect: ref.current?.getBoundingClientRect() });

  useEffect(() => {
    // Catch images that finished loading (e.g. from cache) before React wired
    // up the onLoad handler during hydration.
    if (ref.current?.complete) setLoaded(true);
  }, []);

  const classes = [className, loaded ? 'is-loaded' : null].filter(Boolean).join(' ');

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={classes || undefined}
      loading={loading}
      decoding="async"
      role="button"
      tabIndex={0}
      onLoad={() => setLoaded(true)}
      onClick={activate}
      onKeyDown={(e: KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      }}
    />
  );
}

function LightboxOverlay({ image, onClose }: { image: LightboxImageData; onClose: () => void }) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    // Freeze the page behind the modal so scrolling stays put.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  useLayoutEffect(() => {
    const el = imgRef.current;

    if (!el) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    let done = false;
    const flip = () => {
      if (done) return;

      el.style.transition = 'none';
      el.style.transform = 'none';

      const last = el.getBoundingClientRect();

      if (!last.width || !last.height) return;

      done = true;

      const origin = image.originRect;
      let fromTransform = 'scale(0.9)';

      if (origin && origin.width && origin.height) {
        const dx = origin.left + origin.width / 2 - (last.left + last.width / 2);
        const dy = origin.top + origin.height / 2 - (last.top + last.height / 2);
        const sx = origin.width / last.width;
        const sy = origin.height / last.height;
        fromTransform = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
      }

      el.style.transform = fromTransform;
      void el.offsetWidth; // commit the "from" pose as the transition baseline
      el.style.transition = 'transform 340ms cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = 'translate(0, 0) scale(1, 1)';
    };

    // Try immediately (cached image), on the next frame (layout just settled),
    // and on load (lazy thumbnail still fetching). The `done` guard means only
    // whichever fires first actually runs.
    flip();
    const raf = requestAnimationFrame(flip);

    el.addEventListener('load', flip);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('load', flip);
    };
  }, [image]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.alt} onClick={onClose}>
      <button className="lightbox__close" type="button" aria-label="Close image" onClick={onClose} autoFocus>
        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <figure className="lightbox__figure" onClick={e => e.stopPropagation()}>
        <img ref={imgRef} className="lightbox__image" src={image.src} alt={image.alt} />
        {image.caption && <figcaption className="lightbox__caption">{image.caption}</figcaption>}
      </figure>
    </div>
  );
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<LightboxImageData | null>(null);
  const open = useCallback((img: LightboxImageData) => setImage(img), []);
  const close = useCallback(() => setImage(null), []);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {image && <LightboxOverlay image={image} onClose={close} />}
    </LightboxContext.Provider>
  );
}
