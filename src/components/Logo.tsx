/** Brand tagline: always exactly this wording. */
export const TAGLINE = 'Learn live. Test real.';

/**
 * The CohortLive mark: three cohort members on one shared arc, forming a C that opens to the right.
 * Same geometry as brand/svg; sizes ≤ 32 px use the small master (thicker, stronger arc).
 * Colours come from the --logo-* variables in index.css, so it follows light/dark.
 */
export function LogoMark({ size = 32 }: { size?: number }) {
  const m = size <= 32 ? { w: 4, o: 0.6, l: 8.75, r: 7.25 } : { w: 2.5, o: 0.3, l: 8.5, r: 7 };
  return (
    <svg className="block flex-none" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M47 14.68A20 20 0 1 0 47 49.32" style={{ fill: 'none', stroke: 'var(--logo-a)', strokeOpacity: m.o, strokeWidth: m.w, strokeLinecap: 'round' }} />
      <circle cx="17" cy="32" r={m.l} style={{ fill: 'var(--logo-b)' }} />
      <circle cx="47" cy="14.68" r={m.r} style={{ fill: 'var(--logo-a)' }} />
      <circle cx="47" cy="49.32" r={m.r} style={{ fill: 'var(--logo-a)' }} />
    </svg>
  );
}

/** Horizontal logo: mark + "CohortLive" wordmark. `onDark` forces the dark palette (e.g. the footer). */
export default function Logo({ size = 32, onDark = false, className = '' }: { size?: number; onDark?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${onDark ? 'logo-on-dark' : ''} ${className}`}>
      <LogoMark size={size} />
      <span
        className="font-display font-semibold leading-none tracking-[-0.025em]"
        style={{ fontSize: Math.round(size * 0.56), color: 'var(--logo-text)' }}
      >
        Cohort<span style={{ color: 'var(--logo-a)' }}>Live</span>
      </span>
    </span>
  );
}
