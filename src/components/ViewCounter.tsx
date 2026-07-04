'use client';

import { useEffect, useState } from 'react';

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function syncViews() {
      const today = new Date().toISOString().slice(0, 10);
      const storageKey = 'portfolio-viewed-on';
      const lastViewed = window.localStorage.getItem(storageKey);
      const shouldIncrement = lastViewed !== today;

      try {
        const response = await fetch('/api/views', {
          method: shouldIncrement ? 'POST' : 'GET',
          cache: 'no-store',
        });
        const data = (await response.json()) as { count?: number };

        if (!cancelled) {
          setViews(typeof data.count === 'number' ? data.count : 0);
        }

        if (shouldIncrement) {
          window.localStorage.setItem(storageKey, today);
        }
      } catch {
        if (!cancelled) {
          setViews(0);
        }
      }
    }

    syncViews();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5 text-slate-500" aria-label="Portfolio views">
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="2.8" />
      </svg>
      <span>{views ?? '...'}</span>
    </span>
  );
}
