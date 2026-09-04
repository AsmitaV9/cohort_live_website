import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  center = true,
}: Props) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      <span
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? 'text-brand-400' : 'text-brand-600'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem] ${
          dark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            dark ? 'text-ink-400' : 'text-ink-500'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
