import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  /** 'left' scrolls right-to-left, 'right' scrolls left-to-right */
  direction?: 'left' | 'right';
  /** Seconds for one full loop; higher is slower */
  durationSeconds?: number;
  label: string;
}

/**
 * Seamless, CSS-only scrolling strip. The content is rendered twice and the track
 * moves by half its width, so the loop has no visible jump. Pauses on hover and
 * keyboard focus, and becomes a static wrapped row when reduced motion is preferred.
 */
const Marquee: React.FC<MarqueeProps> = ({ children, direction = 'left', durationSeconds = 40, label }) => (
  <div className="marquee" role="region" aria-label={label}>
    <div
      className={`marquee-track ${direction === 'right' ? 'marquee-reverse' : ''}`}
      style={{ animationDuration: `${durationSeconds}s` }}
    >
      <ul className="marquee-group">{children}</ul>
      <ul className="marquee-group marquee-duplicate" aria-hidden="true">
        {children}
      </ul>
    </div>
  </div>
);

export default Marquee;
