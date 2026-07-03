import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import { profile } from '@/data/profile';

export default function HomePage() {
  return (
    <PageLayout>
      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Portfolio
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {profile.name}
            </h1>
            <p className="text-xl font-medium text-slate-700">{profile.title}</p>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">{profile.about}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-900 p-8 text-slate-100">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Location</p>
          <p className="mt-3 text-2xl font-semibold">{profile.location}</p>
          <p className="mt-6 text-sm leading-7 text-slate-300">{profile.email}</p>
        </div>
      </section>
    </PageLayout>
  );
}
