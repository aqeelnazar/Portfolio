import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Mohamed Aqeel
        </Link>
        <nav className="flex gap-5 text-sm font-medium text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-cyan-300">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
