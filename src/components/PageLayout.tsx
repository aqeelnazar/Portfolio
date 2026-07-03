import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-6 py-12">{children}</main>
      <Footer />
    </div>
  );
}
