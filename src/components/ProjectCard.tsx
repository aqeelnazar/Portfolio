import Link from 'next/link';
import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_0_30px_rgba(2,6,23,0.2)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.16)]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {project.category}
        </p>
        <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-300">
          {project.period}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-slate-100">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
      {project.contribution ? (
        <p className="mt-3 text-sm text-slate-400">Contribution: {project.contribution}</p>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200">
            {skill}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        View details →
      </Link>
    </article>
  );
}
