'use client';

import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import { education, achievements, certifications } from '@/data/education';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { languages, softSkills, technicalSkills } from '@/data/skills';

type Stage = 'loading' | 'profile' | 'about' | 'skills' | 'education' | 'projects';

const stageOrder: Stage[] = ['loading', 'profile', 'about', 'skills', 'education', 'projects'];

function Reveal({ children, active }: { children: ReactNode; active: boolean }) {
  return (
    <div className={`transition-all duration-700 ${active ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      {children}
    </div>
  );
}

export default function FuturisticOnePage() {
  const [stage, setStage] = useState<Stage>('loading');

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStage('profile'), 1000),
      window.setTimeout(() => setStage('about'), 2200),
      window.setTimeout(() => setStage('skills'), 3200),
      window.setTimeout(() => setStage('education'), 4200),
      window.setTimeout(() => setStage('projects'), 5200),
    ];

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  const isRevealed = (target: Exclude<Stage, 'loading'>) => {
    const currentIndex = stageOrder.indexOf(stage);
    const targetIndex = stageOrder.indexOf(target);
    return currentIndex >= targetIndex;
  };

  return (
    <div className="space-y-8 pb-12">
      {stage === 'loading' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),_transparent_42%),linear-gradient(135deg,_rgba(2,6,23,1)_0%,_rgba(15,23,42,0.98)_50%,_rgba(30,41,59,1)_100%)]">
          <div className="text-center">
            <div className="mx-auto h-20 w-20 animate-spin rounded-full border-4 border-cyan-400/25 border-t-cyan-300" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Initializing portfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-100">Welcome to my digital world</h2>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(2,6,23,0.98),rgba(15,23,42,0.95))] p-8 shadow-[0_0_90px_rgba(8,145,178,0.16)] md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.14),_transparent_34%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal active={isRevealed('profile')}>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Futuristic Portfolio
              </p>
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {profile.name}
                </h1>
                <p className="text-xl font-medium text-cyan-100">{profile.title}</p>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{profile.about}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore projects
                </Link>
                <Link
                  href="#education"
                  className="rounded-full border border-cyan-400/30 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300"
                >
                  View education
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal active={isRevealed('profile')}>
            <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 to-slate-900 p-3 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                <img
                  src="/aqeel.png"
                  alt={profile.name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="mt-6 space-y-2 text-center text-sm text-slate-300">
                <p className="text-lg font-semibold text-white">{profile.location}</p>
                <p>{profile.email}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal active={isRevealed('about')}>
        <section className="rounded-[32px] border border-slate-800 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.95))] p-8 shadow-[0_0_50px_rgba(15,23,42,0.25)] backdrop-blur md:p-10">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">About</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-100">A curious developer building meaningful experiences</h2>
            </div>
            <div className="hidden rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 md:block">
              Available for opportunities
            </div>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 p-6 text-slate-200">
              <p className="text-lg leading-8">{profile.about}</p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-slate-100">Quick highlights</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Passionate about problem-solving and modern web experiences</li>
                <li>• Comfortable with Java, React, databases, and UI/UX concepts</li>
                <li>• Focused on building polished, user-friendly applications</li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal active={isRevealed('skills')}>
        <section className="rounded-[32px] border border-slate-800 bg-[linear-gradient(135deg,rgba(2,6,23,0.98),rgba(15,23,42,0.95))] p-8 text-white shadow-[0_0_60px_rgba(2,6,23,0.25)] md:p-10">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Skills</p>
              <h2 className="mt-2 text-2xl font-semibold">Core tools and strengths</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {technicalSkills.map((group) => (
              <div key={group.category} className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-cyan-200">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="rounded-full border border-cyan-400/20 bg-slate-900/80 px-3 py-1 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-cyan-200">Soft Skills</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {softSkills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-cyan-200">Languages</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {languages.map((language) => (
                  <li key={language}>• {language}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-cyan-200">Focus Areas</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Web development</li>
                <li>• Database design</li>
                <li>• Problem-solving</li>
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal active={isRevealed('education')}>
        <section id="education" className="rounded-[32px] border border-slate-800 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.95))] p-8 shadow-[0_0_45px_rgba(15,23,42,0.2)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Education</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-100">Academic path and achievements</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.degree}</h3>
                  <p className="mt-1 text-slate-300">{item.institution}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-6 text-slate-200">
                <h3 className="text-lg font-semibold text-white">Achievements</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {achievements.map((achievement) => (
                    <li key={achievement}>• {achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-slate-100">Certifications</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {certifications.map((certification) => (
                    <li key={certification}>• {certification}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal active={isRevealed('projects')}>
        <section id="projects" className="rounded-[32px] border border-slate-800 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.95))] p-8 shadow-[0_0_45px_rgba(15,23,42,0.2)] md:p-10">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Projects</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-100">Selected work and case studies</h2>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              View all
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <div key={project.id} className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {project.category}
                  </p>
                  <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-300 shadow-sm">
                    {project.period}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-sm font-medium text-slate-200 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
