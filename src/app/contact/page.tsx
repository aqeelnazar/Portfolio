import ContactForm from '@/components/ContactForm';
import PageLayout from '@/components/PageLayout';
import SectionHeader from '@/components/SectionHeader';
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/social';

function SocialIcon({ icon }: { icon: string }) {
  if (icon === 'github') {
    return (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (icon === 'facebook') {
    return (
      <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <section className="space-y-6">
          <SectionHeader
            label="Contact"
            title="Start a conversation"
            description="I am open to internships, freelance opportunities, collaboration ideas, and project conversations."
          />
          <div className="rounded-[32px] border border-slate-800 bg-slate-950/70 p-6">
            <div className="portfolio-float rounded-[28px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),rgba(2,6,23,0.94)_62%)] p-6">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 font-mono text-sm text-slate-300">
                <p className="text-cyan-300">message.channel</p>
                <p className="mt-4">email: {profile.email}</p>
                <p>location: {profile.location}</p>
                <p className="mt-4 text-emerald-300">status: available</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-200 hover:shadow-[0_0_32px_rgba(34,211,238,0.12)]"
                aria-label={`Open ${link.label}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 transition group-hover:border-cyan-300/40 group-hover:text-cyan-200">
                  <SocialIcon icon={link.icon} />
                </span>
                <span className="text-sm font-semibold">{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        <ContactForm />
      </div>
    </PageLayout>
  );
}
