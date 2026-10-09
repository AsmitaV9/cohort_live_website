import { Mail, Building2, Linkedin, Github, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { COMPANY } from '@/data/content';

type ContactItem = { icon: typeof Mail; label: string; value: string; href?: string };

// Only details that are filled in content.ts are shown, so there are no blank or dead rows.
const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  COMPANY.college && { icon: Building2, label: 'Institution', value: COMPANY.college },
  COMPANY.linkedin && { icon: Linkedin, label: 'LinkedIn', value: 'Connect with us', href: COMPANY.linkedin },
  COMPANY.github && { icon: Github, label: 'GitHub', value: 'View our code', href: COMPANY.github },
].filter((item): item is ContactItem => Boolean(item));

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Editorial split heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Contact
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              Admissions & Enrollment
            </h2>
          </ScrollReveal>
          <ScrollReveal delay="reveal-delay-1" className="lg:col-span-7 lg:pt-2">
            <p className="text-lg leading-relaxed text-ink-500">
              Questions, collaboration, or interest in the platform —
              we'd love to hear from you.
            </p>
            {/* Contact details — minimal list, not boxes */}
            <div className="mt-8 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
              {CONTACT_ITEMS.map((item) => (
                <ContactLink key={item.label} {...item} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon: Icon, label, value, href }: ContactItem) {
  const content = (
    <div className="group flex items-center gap-4 border-b border-ink-100 py-5 transition hover:border-ink-300">
      <Icon className="h-5 w-5 flex-shrink-0 text-ink-400 transition group-hover:text-brand-500" />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-ink-400">{label}</p>
        <p className="mt-0.5 truncate text-sm font-semibold text-ink-900">{value}</p>
      </div>
      {href && <ArrowRight className="h-4 w-4 flex-shrink-0 text-ink-300 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />}
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
