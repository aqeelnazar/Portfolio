'use client';

import { ReactNode } from 'react';

type InteractiveCardProps = {
  children: ReactNode;
  className?: string;
};

export default function InteractiveCard({ children, className = '' }: InteractiveCardProps) {
  return (
    <div className={`group [perspective:1200px] ${className}`}>
      <div className="h-full rounded-[28px] border border-white/10 bg-slate-900/75 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.28)] transition duration-500 [transform-style:preserve-3d] group-hover:-translate-y-1 group-hover:rotate-x-2 group-hover:-rotate-y-2 group-hover:border-cyan-300/35 group-hover:shadow-[0_26px_90px_rgba(34,211,238,0.18)]">
        {children}
      </div>
    </div>
  );
}
