import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import { projects } from '@/data/projects';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="space-y-8">
        <Link href="/projects" className="text-sm font-semibold text-sky-700 hover:text-sky-800">
          ← Back to projects
        </Link>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              {project.category}
            </p>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {project.period}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-900">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{project.description}</p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Details</h2>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>
                  <span className="font-medium text-slate-800">Contribution:</span>{' '}
                  {project.contribution ?? 'Not specified'}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Category:</span>{' '}
                  {project.category}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Period:</span>{' '}
                  {project.period}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Skills</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
