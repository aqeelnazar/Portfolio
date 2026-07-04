import PageLayout from '@/components/PageLayout';
import ProjectsExplorer from '@/components/ProjectsExplorer';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="space-y-10">
        <section className="grid gap-8 rounded-[32px] border border-slate-800 bg-slate-950/65 p-8 md:p-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <SectionHeader
            label="Projects"
            title="Interactive project lab"
            description="Filter through selected web and mobile projects that show development, design, and problem-solving growth."
          />
          <div className="portfolio-float hidden rounded-[32px] border border-cyan-300/20 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.2),rgba(15,23,42,0.9)_58%)] p-6 shadow-[0_0_70px_rgba(34,211,238,0.12)] lg:block">
            <div className="rounded-[24px] border border-white/10 bg-slate-950/80 p-5">
              <div className="h-3 w-24 rounded-full bg-cyan-300/40" />
              <div className="mt-5 grid gap-3">
                <div className="h-20 rounded-2xl bg-cyan-300/10" />
                <div className="h-12 rounded-2xl bg-violet-300/10" />
                <div className="h-12 rounded-2xl bg-emerald-300/10" />
              </div>
            </div>
          </div>
        </section>

        <ProjectsExplorer projects={projects} />
      </div>
    </PageLayout>
  );
}
