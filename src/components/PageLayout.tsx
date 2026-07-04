import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_34%),#020617] text-slate-100">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-6 py-12">{children}</main>
      <Footer />
    </div>
  );
}
