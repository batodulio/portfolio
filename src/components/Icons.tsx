interface IconProps {
  className?: string;
}

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const ArrowUpRight = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const Download = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <path d="M12 4v11m0 0 4-4m-4 4-4-4M4 19h16" />
  </svg>
);

export const Mail = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const MapPin = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const Chevron = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Copy = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </svg>
);

export const Check = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export const Award = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <circle cx="12" cy="9" r="5" />
    <path d="m9 13.5-2 7 5-3 5 3-2-7" />
  </svg>
);

export const Linkedin = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M6.5 8.8H3.6V20h2.9V8.8ZM5 7.4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM20.4 13.9c0-3.2-1.7-5.3-4.3-5.3-1.5 0-2.5.7-3 1.6h-.1V8.8H10.2V20h2.9v-5.6c0-1.5.6-2.6 2-2.6s1.9 1.1 1.9 2.6V20h2.9l.5-6.1Z" />
  </svg>
);
