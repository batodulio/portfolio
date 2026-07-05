export const BAT_PATH =
  "M6 26 Q28 8 46 16 L52 2 L60 12 L68 2 L74 16 Q92 8 114 26 Q96 24 88 34 Q76 28 68 40 Q64 32 60 48 Q56 32 52 40 Q44 28 32 34 Q24 24 6 26 Z";

export function BatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 50" className={className} aria-hidden="true" focusable="false">
      <path d={BAT_PATH} fill="currentColor" />
    </svg>
  );
}
