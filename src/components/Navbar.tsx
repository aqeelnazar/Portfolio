'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm text-cyan-100 shadow-[0_0_26px_rgba(34,211,238,0.16)]">
            MA
          </span>
          <span className="transition group-hover:text-cyan-200">Mohamed Aqeel</span>
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>

        <nav className="hidden items-center gap-2 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 transition ${
                isActive(link.href)
                  ? 'bg-cyan-300 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.22)]'
                  : 'hover:bg-white/5 hover:text-cyan-200'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen ? (
        <nav className="border-t border-white/10 px-6 pb-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2 pt-4 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 transition ${
                  isActive(link.href) ? 'bg-cyan-300 text-slate-950' : 'bg-white/5 text-slate-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
