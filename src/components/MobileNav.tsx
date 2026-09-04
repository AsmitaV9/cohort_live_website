import { useState } from 'react';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/data/content';

type Props = {
  onLaunch: () => void;
};

export default function MobileNav({ onLaunch }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 top-3.5 z-40 rounded-xl border border-ink-200 bg-white/90 p-2.5 shadow-lg xl:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5 text-ink-700" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <div className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-brand-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold text-ink-900 font-display">{COMPANY.name}</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-ink-400 hover:bg-ink-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-8 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink-700 transition hover:bg-ink-50 hover:text-ink-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setOpen(false);
                onLaunch();
              }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-ink-900 px-4 py-3 text-base font-semibold text-white"
            >
              Launch Platform
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
