import ViewCounter from './ViewCounter';
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/social';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-6 text-center text-sm text-slate-400">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/10 px-3 py-1 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            Email
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-3 py-1 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p>&copy; 2026 Mohamed Aqeel. All rights reserved.</p>
        <ViewCounter />
      </div>
    </footer>
  );
}
