import PageLayout from '@/components/PageLayout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Projects</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Featured Projects</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            A selection of web and mobile projects that reflect my growth in development, design, and problem-solving.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </PageLayout>
  );
}
