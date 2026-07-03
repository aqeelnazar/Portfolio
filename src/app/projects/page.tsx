import PageLayout from '@/components/PageLayout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="space-y-8">
        <section className="rounded-[32px] border border-slate-800 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(30,41,59,0.95))] p-8 shadow-[0_0_50px_rgba(15,23,42,0.25)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Projects</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-100">Featured Projects</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
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
