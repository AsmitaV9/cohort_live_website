import { ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';
import Logo from '@/components/Logo';
import { LINKS } from '@/config/links';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-ink-200/40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center" aria-label="CohortLive home">
            <Logo size={32} />
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
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={LINKS.login}
              className="hidden items-center rounded-xl border border-ink-200 bg-white px-4 py-2.5 sm:inline-flex text-sm font-semibold text-ink-700 transition hover:border-ink-300 hover:bg-ink-50"
            >
              Login
            </a>
            <a
              href={LINKS.register}
              className="group inline-flex items-center gap-1.5 rounded-xl bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              Register
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
