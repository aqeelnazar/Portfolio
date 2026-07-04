import Link from 'next/link';
import { notFound } from 'next/navigation';
import InteractiveCard from '@/components/InteractiveCard';
import PageLayout from '@/components/PageLayout';
import { projects } from '@/data/projects';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projectIndex = projects.findIndex((item) => item.slug === params.slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="space-y-8">
        <Link href="/projects" className="inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">
          &larr; Back to projects
        </Link>

        <section className="grid gap-8 rounded-[32px] border border-slate-800 bg-slate-950/65 p-8 md:p-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{project.category}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{project.description}</p>
          </div>

          <div className="portfolio-float rounded-[28px] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),rgba(15,23,42,0.9)_62%)] p-5">
            <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <div className="h-3 w-28 rounded-full bg-cyan-300/40" />
              <div className="mt-5 h-28 rounded-2xl bg-white/5" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="h-12 rounded-xl bg-violet-300/10" />
                <div className="h-12 rounded-xl bg-emerald-300/10" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <InteractiveCard>
            <h2 className="text-xl font-semibold text-white">Project details</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p>
                <span className="font-medium text-slate-100">Contribution:</span> {project.contribution ?? 'Not specified'}
              </p>
              <p>
                <span className="font-medium text-slate-100">Category:</span> {project.category}
              </p>
              <p>
                <span className="font-medium text-slate-100">Period:</span> {project.period}
              </p>
            </div>
          </InteractiveCard>

          <InteractiveCard>
            <h2 className="text-xl font-semibold text-white">Skills used</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                  {skill}
                </span>
              ))}
            </div>
          </InteractiveCard>
        </section>

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="block rounded-[28px] border border-slate-800 bg-slate-900/65 p-6 transition hover:border-cyan-300/40"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Next project</p>
            <p className="mt-2 text-xl font-semibold text-cyan-200">{nextProject.title}</p>
          </Link>
        ) : null}
      </div>
    </PageLayout>
  );
}
