import { ArrowRight } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/data/content';

type Props = {
  onLaunch: () => void;
};

export default function Navbar({ onLaunch }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-ink-200/40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-brand-400">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span className="text-base font-bold tracking-tight text-ink-900 font-display">
              {COMPANY.name}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-500 transition hover:text-ink-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={onLaunch}
            className="group inline-flex items-center gap-1.5 rounded-xl bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
          >
            Book a Demo / Purchase
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
