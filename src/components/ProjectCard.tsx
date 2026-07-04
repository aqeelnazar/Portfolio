import Link from 'next/link';
import InteractiveCard from '@/components/InteractiveCard';
import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <InteractiveCard>
      <article className="flex h-full flex-col">
        <div className="mb-6 rounded-[22px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),rgba(15,23,42,0.9)_60%)] p-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
            <div className="mt-5 space-y-3">
              <div className="h-3 w-2/3 rounded-full bg-cyan-300/40" />
              <div className="h-16 rounded-2xl bg-white/5" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-8 rounded-xl bg-violet-300/10" />
                <div className="h-8 rounded-xl bg-cyan-300/10" />
                <div className="h-8 rounded-xl bg-emerald-300/10" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">{project.category}</p>
          <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-300">
            {project.period}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-slate-100">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
        {project.contribution ? <p className="mt-3 text-sm text-slate-400">Contribution: {project.contribution}</p> : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200">
              {skill}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
          View details &rarr;
        </Link>
      </article>
    </InteractiveCard>
  );
}
