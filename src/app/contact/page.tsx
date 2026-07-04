import ContactForm from '@/components/ContactForm';
import PageLayout from '@/components/PageLayout';
import SectionHeader from '@/components/SectionHeader';
import { profile } from '@/data/profile';

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
        </section>

        <ContactForm />
      </div>
    </PageLayout>
  );
}
