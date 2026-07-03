import Link from 'next/link';
import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
          {project.category}
        </p>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {project.period}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
      {project.contribution ? (
        <p className="mt-3 text-sm text-slate-500">Contribution: {project.contribution}</p>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {skill}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-sky-700 transition hover:text-sky-800"
      >
        View details →
      </Link>
    </article>
  );
}
