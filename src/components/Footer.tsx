import { Linkedin, Github, Mail } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/data/content';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-400">
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-brand-400 ring-1 ring-white/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white font-display">{COMPANY.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">{COMPANY.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              <a href={COMPANY.linkedin} className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-400 ring-1 ring-white/10 transition hover:bg-brand-500 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={COMPANY.github} className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-400 ring-1 ring-white/10 transition hover:bg-brand-500 hover:text-white" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-400 ring-1 ring-white/10 transition hover:bg-brand-500 hover:text-white" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">Navigate</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-400 transition hover:text-brand-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">Legal</h4>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#" className="text-sm text-ink-400 transition hover:text-brand-400">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-ink-400 transition hover:text-brand-400">Terms of Service</a></li>
              <li className="pt-2 text-sm text-ink-600">{COMPANY.college}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p className="text-sm text-ink-600">Built by Computer Engineering students.</p>
        </div>
      </div>
    </footer>
  );
}
