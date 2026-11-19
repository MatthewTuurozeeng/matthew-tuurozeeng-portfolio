import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** Display value such as "140+", "~4%", "+28%", "4,000" or 12 */
  value: string | number;
  durationMs?: number;
}

const parse = (value: string) => {
  const match = value.match(/^(\D*?)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  return {
    prefix,
    suffix,
    target: parseFloat(number.replace(/,/g, '')),
    useCommas: number.includes(','),
  };
};

/** Counts a number up from zero the first time it scrolls into view. */
const CountUp: React.FC<CountUpProps> = ({ value, durationMs = 1200 }) => {
  const text = String(value);
  const parsed = parse(text);
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!parsed || !el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return;

    setCurrent(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(progress < 1 ? Math.round(parsed.target * eased) : null);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, durationMs]);

  let display = text;
  if (parsed && current !== null) {
    const num = parsed.useCommas ? current.toLocaleString('en-US') : String(current);
    display = `${parsed.prefix}${num}${parsed.suffix}`;
  }

  return (
    <span ref={ref} className="count-up">
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
};

export default CountUp;
