import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';
import { profile } from '@/data/profile';

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Contact</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Let&apos;s connect</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            I am open to internships, freelance opportunities, and collaboration ideas.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-slate-800">Email:</span> {profile.email}
            </p>
            <p>
              <span className="font-semibold text-slate-800">Location:</span> {profile.location}
            </p>
          </div>
        </section>

        <ContactForm />
      </div>
    </PageLayout>
  );
}
