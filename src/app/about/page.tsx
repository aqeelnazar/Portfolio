import InteractiveCard from '@/components/InteractiveCard';
import PageLayout from '@/components/PageLayout';
import SectionHeader from '@/components/SectionHeader';
import TechOrbit from '@/components/TechOrbit';
import { achievements, certifications, education } from '@/data/education';
import { profile } from '@/data/profile';
import { languages, softSkills, technicalSkills } from '@/data/skills';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="space-y-10">
        <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <SectionHeader
            label="About"
            title="The path behind the portfolio"
            description={profile.about}
          />
          <TechOrbit />
        </section>

        <section className="rounded-[32px] border border-slate-800 bg-slate-950/65 p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-white">Education timeline</h2>
          <div className="mt-8 space-y-5">
            {education.map((item, index) => (
              <div key={item.institution} className="relative grid gap-4 pl-8 md:grid-cols-[220px_1fr]">
                <span className="absolute left-0 top-2 h-4 w-4 rounded-full border border-cyan-300 bg-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)]" />
                {index !== education.length - 1 ? <span className="absolute bottom-[-20px] left-[7px] top-7 w-px bg-cyan-300/20" /> : null}
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{item.period}</p>
                <InteractiveCard>
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-2 text-slate-300">{item.institution}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                </InteractiveCard>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <InteractiveCard>
            <h2 className="text-2xl font-semibold text-white">Technical stack</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {technicalSkills.map((group) => (
                <div key={group.category} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-cyan-200">{group.category}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </InteractiveCard>

          <InteractiveCard>
            <h2 className="text-2xl font-semibold text-white">Human strengths</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {[...softSkills, ...languages].map((item) => (
                <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
          </InteractiveCard>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <InteractiveCard>
            <h2 className="text-2xl font-semibold text-white">Achievements</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {achievements.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </InteractiveCard>

          <InteractiveCard>
            <h2 className="text-2xl font-semibold text-white">Certifications</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {certifications.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </InteractiveCard>
        </section>
      </div>
    </PageLayout>
  );
}
