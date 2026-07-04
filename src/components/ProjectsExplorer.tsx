'use client';

import { useMemo, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/types';

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            data-project-filter={activeCategory === category ? 'active' : 'idle'}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'border-cyan-300 bg-cyan-300 text-slate-950'
                : 'border-slate-700 bg-slate-900/70 text-slate-300 hover:border-cyan-300/60 hover:text-cyan-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
