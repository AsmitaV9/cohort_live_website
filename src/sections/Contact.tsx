import { useState } from 'react';
import { Mail, Building2, Linkedin, Github, Send, CircleCheck, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { COMPANY } from '@/data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Let's talk.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay="reveal-delay-1" className="lg:col-span-7 lg:pt-2">
            <p className="text-lg leading-relaxed text-ink-500">
              Questions, collaboration, or interest in the platform —
              we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>

        {/* Layout: contact links as a clean list + form */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contact links — minimal list, not boxes */}
          <ScrollReveal className="lg:col-span-4">
            <div className="space-y-1">
              <ContactLink
                icon={Mail}
                label="Email"
                value={COMPANY.email}
                href={`mailto:${COMPANY.email}`}
              />
              <ContactLink
                icon={Building2}
                label="Institution"
                value={COMPANY.college}
              />
              <ContactLink
                icon={Linkedin}
                label="LinkedIn"
                value="Connect with us"
                href={COMPANY.linkedin}
              />
              <ContactLink
                icon={Github}
                label="GitHub"
                value="View our code"
                href={COMPANY.github}
              />
            </div>
          </ScrollReveal>

          {/* Form — clean, borderless */}
          <ScrollReveal delay="reveal-delay-1" className="lg:col-span-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-3xl bg-ink-50/60 py-20 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-success-500/10 text-success-600 ring-1 ring-success-500/20">
                  <CircleCheck className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">Message sent!</h3>
                <p className="mt-2 text-sm text-ink-500">We'll get back to you soon.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-brand-600 transition hover:text-brand-700">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Your name" required />
                  <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <Field label="Subject" name="subject" placeholder="What is this about?" required />
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink-700">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us more..."
                    className="w-full border-b border-ink-200 bg-transparent px-0 py-3 text-base text-ink-900 placeholder:text-ink-300 transition focus:border-brand-500 focus:outline-none"
                  />
                </div>
                <button type="submit" className="group inline-flex items-center gap-2 rounded-xl bg-ink-900 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-ink-800">
                  Send Message
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = (
    <div className="group flex items-center gap-4 border-b border-ink-100 py-4 transition hover:border-ink-300">
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

function Field({ label, name, type = 'text', placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink-700">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-ink-200 bg-transparent px-0 py-3 text-base text-ink-900 placeholder:text-ink-300 transition focus:border-brand-500 focus:outline-none"
      />
    </div>
  );
}
