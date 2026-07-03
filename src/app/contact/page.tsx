import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';
import { profile } from '@/data/profile';

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-[32px] border border-slate-800 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.95))] p-8 shadow-[0_0_50px_rgba(15,23,42,0.25)]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Contact</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-100">Let&apos;s connect</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            I am open to internships, freelance opportunities, and collaboration ideas.
          </p>
          <div className="mt-8 space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-slate-100">Email:</span> {profile.email}
            </p>
            <p>
              <span className="font-semibold text-slate-100">Location:</span> {profile.location}
            </p>
          </div>
        </section>

        <ContactForm />
      </div>
    </PageLayout>
  );
}
