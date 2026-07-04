import ViewCounter from './ViewCounter';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Mohamed Aqeel. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <ViewCounter />
        </div>
      </div>
    </footer>
  );
}
