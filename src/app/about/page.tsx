import PageLayout from '@/components/PageLayout';
import { profile } from '@/data/profile';
import { achievements, certifications, education } from '@/data/education';
import { technicalSkills, softSkills, languages } from '@/data/skills';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">About</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">About Me</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{profile.about}</p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Education</h2>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div key={item.institution}>
                  <h3 className="font-semibold text-slate-800">{item.institution}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.degree}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.period}</p>
                  <p className="text-sm text-slate-500">{item.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Technical Skills</h2>
            <div className="mt-6 space-y-5">
              {technicalSkills.map((group) => (
                <div key={group.category}>
                  <h3 className="font-semibold text-slate-800">{group.category}</h3>
                  <p className="mt-2 text-sm text-slate-600">{group.items.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Soft Skills</h2>
            <ul className="mt-6 space-y-2 text-slate-600">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-600" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Languages</h2>
            <ul className="mt-6 space-y-2 text-slate-600">
              {languages.map((language) => (
                <li key={language} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-600" />
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Achievements</h2>
            <ul className="mt-6 space-y-3 text-slate-600">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Certifications</h2>
            <ul className="mt-6 space-y-3 text-slate-600">
              {certifications.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-600" />
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
