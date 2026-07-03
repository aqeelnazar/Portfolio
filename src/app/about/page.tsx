import PageLayout from '@/components/PageLayout';
import { profile } from '@/data/profile';
import { achievements, certifications, education } from '@/data/education';
import { technicalSkills, softSkills, languages } from '@/data/skills';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="space-y-8">
        <section className="rounded-[32px] border border-slate-800 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.95))] p-8 shadow-[0_0_50px_rgba(15,23,42,0.25)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">About</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-100">About Me</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{profile.about}</p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_0_30px_rgba(2,6,23,0.2)]">
            <h2 className="text-2xl font-semibold text-slate-100">Education</h2>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div key={item.institution} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-slate-100">{item.institution}</h3>
                  <p className="mt-1 text-sm text-slate-300">{item.degree}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.period}</p>
                  <p className="text-sm text-slate-400">{item.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_0_30px_rgba(2,6,23,0.2)]">
            <h2 className="text-2xl font-semibold text-slate-100">Technical Skills</h2>
            <div className="mt-6 space-y-5">
              {technicalSkills.map((group) => (
                <div key={group.category} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-cyan-200">{group.category}</h3>
                  <p className="mt-2 text-sm text-slate-300">{group.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_0_30px_rgba(2,6,23,0.2)]">
            <h2 className="text-2xl font-semibold text-slate-100">Soft Skills</h2>
            <ul className="mt-6 space-y-3 text-slate-300">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_0_30px_rgba(2,6,23,0.2)]">
            <h2 className="text-2xl font-semibold text-slate-100">Languages</h2>
            <ul className="mt-6 space-y-3 text-slate-300">
              {languages.map((language) => (
                <li key={language} className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_0_30px_rgba(2,6,23,0.2)]">
            <h2 className="text-2xl font-semibold text-slate-100">Achievements</h2>
            <ul className="mt-6 space-y-3 text-slate-300">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_0_30px_rgba(2,6,23,0.2)]">
            <h2 className="text-2xl font-semibold text-slate-100">Certifications</h2>
            <ul className="mt-6 space-y-3 text-slate-300">
              {certifications.map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 px-3 py-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
